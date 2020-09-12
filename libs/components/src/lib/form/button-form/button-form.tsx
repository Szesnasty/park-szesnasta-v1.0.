import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';

type ButtonFormProps = ButtonProps;

export const ButtonForm = ({
  children,
  color = 'primary',
  onClick,
  variant = 'contained',
  type,
}: ButtonFormProps) => {
  return (
    <Button variant={variant} color={color} onClick={onClick} type={type}>
      {children}
    </Button>
  );
};
