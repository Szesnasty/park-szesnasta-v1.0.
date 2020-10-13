import React from 'react';
import { Formik } from 'formik';

import styled from 'styled-components';
import { useLoginUserFormFacade } from '../hooks/use-login-user-form-facade';
import { InitialDataModel } from '../hooks/use-login-user-form-facade';
import { RenderLoginUserForm } from './render-login-user-form';

type LoginUserFormProps = {};

export const LoginUserForm = (props: LoginUserFormProps) => {
  const {
    initialValues,
    validationSchema,
    handleSubmitForm,
  } = useLoginUserFormFacade();

  return (
    <StyledUserManagement>
      <Formik<InitialDataModel>
        validateOnChange
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmitForm}
      >
        {({ values, errors }) => <RenderLoginUserForm />}
      </Formik>
    </StyledUserManagement>
  );
};

const StyledUserManagement = styled.div`
  width: 30vw;
`;
