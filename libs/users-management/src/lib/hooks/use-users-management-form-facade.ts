import * as yup from 'yup';
import { UsersManagementCommands } from '@park-szesnasta/services';
import { FormikHelpers } from 'formik/dist/types';
import { REQUIRED_FIELD } from '@park-szesnasta/utilities';
import { notificationsDispatch } from '@park-szesnasta/components';

type UseUsersManagementFormFacadeProps = {};

const validationSchema = yup.object<InitialDataModel>({
  name: yup.string().required(REQUIRED_FIELD),
  email: yup.string().required(REQUIRED_FIELD),
  password: yup.string().required(REQUIRED_FIELD),
});

export const useUsersManagementFormFacade = ({ tableRef }) => {
  const initialValues = {
    email: '',
    name: '',
    surname: '',
    password: '',
  };

  const usersManagementCommands = new UsersManagementCommands();

  const handleSubmitForm = (
    values: InitialDataModel,
    formikHelpers: FormikHelpers<InitialDataModel>
  ) => {
    const newUser = {
      name: values.name,
      email: values.email,
      surname: values.surname,
      password: values.password,
    };

    usersManagementCommands
      .CreateNewUser(newUser)
      .then((res) => {
        formikHelpers.resetForm();
        notificationsDispatch({
          msg: `Stworzono nowego usera!`,
          variant: 'success',
        });
        if (tableRef.current != null) {
          tableRef?.current.onQueryChange();
        }
      })
      .catch((err) => {
        notificationsDispatch({
          msg: `Coś poszło nie tak...`,
          variant: 'error',
        });
      });
  };

  return { validationSchema, initialValues, handleSubmitForm };
};

export type InitialDataModel = {
  id?: string;
  name: string;
  surname: string;
  email: string;
  password: string;
};
