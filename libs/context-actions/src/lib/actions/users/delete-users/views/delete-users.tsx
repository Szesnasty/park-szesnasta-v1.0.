import React from 'react';
import { useFormikContext, Form } from 'formik';
import { ButtonForm, notificationsDispatch } from '@park-szesnasta/components';
import { Formik } from 'formik';
import * as yup from 'yup';
import { UsersManagementCommands } from '@park-szesnasta/services';
import { ContextActionContainer } from './../../../../context-actions-container/context-actions-container';

export const DeleteUsers = ({ data, handleRefreshData }) => {
  const initialValues = {
    // id: data?.map((x) => x.id),
    id: data[0]?.id,
  };

  const validationSchema = yup.object<InitialDataModel>({
    // id: yup.array().of(yup.string()).required(),
    id: yup.string().required(),
  });

  const handleSubmitForm = (values: InitialDataModel) => {
    console.log(values.id);
    new UsersManagementCommands()
      .RemoveUser({
        id: values.id,
      })
      .then((res) => {
        handleRefreshData();
        notificationsDispatch({
          msg: `Success`,
          variant: 'success',
        });
      })
      .catch((err) => {
        notificationsDispatch({
          msg: `Coś poszło nie tak...`,
          variant: 'error',
        });
      });
  };
  return (
    <ContextActionContainer<InitialDataModel>
      formId={'delete-user-form'}
      submitLabel={'Delete'}
      isUseFormik
      formikState={{
        initialValues: initialValues,
        validationSchema: validationSchema,
        handleSubmitForm: handleSubmitForm,
      }}
    >
      <Form
        id={'delete-user-form'}
        style={{
          display: 'grid',
          gridGap: '2rem',
        }}
      >
        <div>
          <p>{`Are You shure You want do delete `}</p>
          {data.map((x) => (
            <p>{`${x.name} ${x.surname}`}</p>
          ))}
        </div>
      </Form>
    </ContextActionContainer>
  );
};

export type InitialDataModel = {
  id: string;
};
