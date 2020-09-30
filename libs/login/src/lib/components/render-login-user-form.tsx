import { InputForm, ButtonForm } from '@park-szesnasta/components';
import * as React from 'react';
import { useFormikContext, Form } from 'formik';
import { InitialDataModel } from '../hooks/use-login-user-form-facade';

export type RenderLoginUserFormProps = {};

export const RenderLoginUserForm = () => {
  const { values } = useFormikContext<InitialDataModel>();

  return (
    <Form
      style={{
        display: 'grid',
        gridGap: '2rem',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridGap: '2rem',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
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
      </div>

      <div
        style={{
          justifyContent: 'flex-end',
          width: '100%',
          display: 'grid',
          marginTop: '2rem',
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
    </Form>
  );
};
