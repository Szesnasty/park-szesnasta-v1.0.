import { InputForm, ButtonForm } from '@park-szesnasta/components';
import * as React from 'react';
import { useFormikContext, Form } from 'formik';
import { InitialDataModel } from '../hooks/use-login-user-form-facade';
import styled from 'styled-components';
export type RenderLoginUserFormProps = {};

export const RenderLoginUserForm = () => {
  const { values } = useFormikContext<InitialDataModel>();

  return (
    <StyledForm>
      <InputForm
        value={values.email}
        id={'email'}
        name={'email'}
        label={'Email'}
      />
      <InputForm
        value={values.email}
        type={'password'}
        id={'password'}
        name={'password'}
        label={'Password'}
      />

      <div
        style={{
          justifyContent: 'flex-end',
          width: '100%',
          display: 'grid',
          marginTop: '1rem',
        }}
      >
        <ButtonForm
          style={{ display: 'flex' }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Login
        </ButtonForm>
      </div>
    </StyledForm>
  );
};

const StyledForm = styled(Form)`
  width: 100%;
  grid-gap: 2rem;
  background: #ffffff;
  display: grid;
  grid-auto-flow: row;
  padding: 3rem;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 10px 5px -6px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 10px 5px -6px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 10px 5px -6px rgba(0, 0, 0, 0.35);
`;
