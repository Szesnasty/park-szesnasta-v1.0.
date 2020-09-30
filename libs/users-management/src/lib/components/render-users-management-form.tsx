import { InputForm, ButtonForm } from '@park-szesnasta/components';
import * as React from 'react';
import { useFormikContext, Form } from 'formik';
import { InitialDataModel } from '../hooks/use-users-management-form-facade';

export type RenderUsersManagementFormProps = {};

export const RenderUsersManagementForm = () => {
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
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        <InputForm
          value={values.name}
          type={'input'}
          id={'imie'}
          name={'name'}
          label={'Imię'}
        />
        <InputForm
          value={values.email}
          id={'email'}
          name={'email'}
          label={'Email'}
        />
        <InputForm
          value={values.email}
          id={'passworrd'}
          name={'password'}
          type={'password'}
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
          Register
        </ButtonForm>
      </div>
    </Form>
  );
};
