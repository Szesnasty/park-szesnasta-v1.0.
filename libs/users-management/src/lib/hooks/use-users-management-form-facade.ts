import * as yup from 'yup';
import { UsersManagementCommands } from '@park-szesnasta/services';
import { FormikHelpers } from 'formik/dist/types';
import { REQUIRED_FIELD } from '@park-szesnasta/utilities';
import { notificationsDispatch } from '@park-szesnasta/components';

type UseUsersManagementFormFacadeProps = {};

const validationSchema = yup.object<InitialDataModel>({
  imie: yup.string().required(REQUIRED_FIELD),
  nazwisko: yup.string().required(REQUIRED_FIELD),
  email: yup.string().required(REQUIRED_FIELD),
  haslo: yup.string().required(REQUIRED_FIELD),
});

export const useUsersManagementFormFacade = () => {
  const initialValues = {
    email: 'Adam',
    imie: 'Ostrowski',
    nazwisko: 'Nazwisko',
    haslo: 'dwed',
  };

  const usersManagementCommands = new UsersManagementCommands();

  const handleSubmitForm = (
    values: InitialDataModel,
    formikHelpers: FormikHelpers<InitialDataModel>
  ) => {
    const newUser = {
      imie: values.imie,
      nazwisko: values.nazwisko,
      email: values.email,
      haslo: values.haslo,
    };
    formikHelpers.setSubmitting(true);

    usersManagementCommands
      .CreateNewUser(newUser)
      .then((res) => {
        notificationsDispatch({
          msg: `Stworzono nowego usera!`,
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
  id?: string;
  email: string;
  imie: string;
  nazwisko: string;
  haslo: string;
};
