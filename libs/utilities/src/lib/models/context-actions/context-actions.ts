import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core';

export type SingleActionModel = {
  id: number;
  name: string;
  value: string;
  isForSingleItem: boolean;
  icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
};

export type ContextActionsModel = {
  usesrsMenagementActions: SingleActionModel[];
};
