import React from 'react';
import { ButtonForm, notificationsDispatch } from '@park-szesnasta/components';
import { Formik } from 'formik';

export const ContextActionContainer = <T,>({
  formId,
  children,
  submitLabel,
  isUseFormik,
  formikState,
}) => {
  console.log(formId);
  return (
    <div>
      {isUseFormik ? (
        <Formik<T>
          initialValues={formikState.initialValues}
          validationSchema={formikState.validationSchema}
          onSubmit={formikState.handleSubmitForm}
        >
          <>
            {children}
            <ButtonForm
              style={{ display: 'flex' }}
              type="submit"
              variant="contained"
              color="primary"
              form={formId}
            >
              {submitLabel}
            </ButtonForm>
          </>
        </Formik>
      ) : (
        children
      )}
    </div>
  );
};
