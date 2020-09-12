import React, { memo } from 'react';
import { useField, FieldAttributes } from 'formik';
import { TextField, BaseTextFieldProps } from '@material-ui/core';
import { TextFieldProps } from '@material-ui/core/TextField';

type InputFormProps = FieldAttributes<{}> & BaseTextFieldProps & TextFieldProps;

export const InputForm = memo(({ placeholder, ...props }: InputFormProps) => {
  const [field, meta] = useField<{}>(props);

  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      {...props}
      variant="outlined"
      label={props.label}
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
});
