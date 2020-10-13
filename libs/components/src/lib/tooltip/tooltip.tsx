import React from 'react';
import {
  Tooltip as MaterialTooltip,
  TooltipProps as MaterialTooltipProps,
} from '@material-ui/core';

type TooltipProps = {
  title: string;
  children: React.ReactNode;
} & MaterialTooltipProps;

export const Tooltip = ({
  title,
  children,
  ...rest
}: TooltipProps): JSX.Element => {
  return (
    <MaterialTooltip {...rest} title={title}>
      {children}
    </MaterialTooltip>
  );
};
