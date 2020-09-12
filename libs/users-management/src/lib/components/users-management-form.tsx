import React, { FunctionComponent } from 'react';
import { Formik } from 'formik';

import styled from 'styled-components';
import { useUsersManagementFormFacade } from '../hooks/use-users-management-form-facade';
import { InitialDataModel } from '../hooks/use-users-management-form-facade';
import { RenderUsersManagementForm } from './render-users-management-form';

type UsersManagementFormProps = {};

export const UsersManagementForm: FunctionComponent<UsersManagementFormProps> = () => {
  const {
    initialValues,
    validationSchema,
    handleSubmitForm,
  } = useUsersManagementFormFacade();

  return (
    <StyledUserManagement>
      <h1>Welcome to User Management</h1>
      <Formik<InitialDataModel>
        validateOnChange
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmitForm}
      >
        {({ values, errors }) => <RenderUsersManagementForm />}
      </Formik>
    </StyledUserManagement>
  );
};

const StyledUserManagement = styled.div``;
