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
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <InputForm
          value={values.imie}
          type={'input'}
          id={'imie'}
          name={'imie'}
          label={'Imię'}
        />
        <InputForm
          value={values.nazwisko}
          id={'nazwisko'}
          name={'nazwisko'}
          label={'Nazwisko'}
        />
      </div>
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
          value={values.haslo}
          id={'haslo'}
          name={'haslo'}
          label={'Hasło'}
          type={'text'}
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
