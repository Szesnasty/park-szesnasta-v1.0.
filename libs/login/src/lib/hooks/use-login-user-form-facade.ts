import * as yup from 'yup';
import { LoginCommands } from '@park-szesnasta/services';
import { FormikHelpers } from 'formik/dist/types';
import { REQUIRED_FIELD } from '@park-szesnasta/utilities';
import { notificationsDispatch } from '@park-szesnasta/components';
import { useHistory } from 'react-router-dom';

type useLoginUserFormFacadeProps = {};

const validationSchema = yup.object<InitialDataModel>({
  email: yup.string().required(REQUIRED_FIELD),
  password: yup.string().required(REQUIRED_FIELD),
});

export const useLoginUserFormFacade = () => {
  const history = useHistory();
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

    console.log(loginCommands.LoginUser(userLoginData));
    loginCommands
      .LoginUser(userLoginData)
      .then((res) => {
        console.log(res);
        const accessToken = res.data?.access_token;
        const userLogged = 'true';
        localStorage.setItem('access-token', accessToken);
        localStorage.setItem('user-logged', userLogged);
        history.push('/');
        notificationsDispatch({
          msg: `Zalogowano!`,
          variant: 'success',
        });
      })
      .catch((err) => {
        console.log(err);

        formikHelpers.resetForm();
        notificationsDispatch({
          msg: `Coś poszło nie tak...`,
          variant: 'error',
        });
      });
  };

  return { validationSchema, initialValues, handleSubmitForm };
};

export type InitialDataModel = {
  email: string;
  password: string;
};
