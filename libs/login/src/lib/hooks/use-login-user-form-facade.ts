import * as yup from 'yup';
import { LoginCommands } from '@park-szesnasta/services';
import { FormikHelpers } from 'formik/dist/types';
import { REQUIRED_FIELD } from '@park-szesnasta/utilities';
import { notificationsDispatch } from '@park-szesnasta/components';

type useLoginUserFormFacadeProps = {};

const validationSchema = yup.object<InitialDataModel>({
  name: yup.string().required(REQUIRED_FIELD),
  email: yup.string().required(REQUIRED_FIELD),
});

export const useLoginUserFormFacade = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const loginCommands = new LoginCommands();

  const handleSubmitForm = (
    values: InitialDataModel,
    formikHelpers: FormikHelpers<InitialDataModel>
  ) => {
    const userLoginData = {
      email: values.email,
      password: values.password,
    };
    formikHelpers.setSubmitting(true);

    loginCommands
      .LoginUser(userLoginData)
      .then((res) => {
        notificationsDispatch({
          msg: `Zalogowano!`,
          variant: 'success',
        });
      })
      .catch((err) => {
        notificationsDispatch({
          msg: `Coś poszło nie tak...`,
          variant: 'error',
        });
      });

    formikHelpers.setSubmitting(false);
    formikHelpers.resetForm();
  };

  return { validationSchema, initialValues, handleSubmitForm };
};

export type InitialDataModel = {
  email: string;
  password: string;
};
