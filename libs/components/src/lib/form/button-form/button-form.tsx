import React, { useEffect, useState } from 'react';
import { Button, ButtonProps } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useFormikContext } from 'formik';

type ButtonFormProps = ButtonProps & {};

export const ButtonForm = ({
  children,
  color = 'primary',
  onClick,
  variant = 'contained',
  type,
}: ButtonFormProps) => {
  const { isSubmitting } = useFormikContext();
  console.log(isSubmitting);
  return (
    <Button
      disabled={isSubmitting}
      variant={variant}
      color={color}
      onClick={onClick}
      type={type}
    >
      {children}
      {isSubmitting ? (
        <CircularProgress
          style={{ width: '2.4rem', height: '2.4rem', marginLeft: '1rem' }}
          color={'secondary'}
        />
      ) : null}
    </Button>
  );
};
