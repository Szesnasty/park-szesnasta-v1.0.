type SingleActionModel = {
  id: number;
  name: string;
  value: string;
  isForSingleItem: boolean;
};

export type ContextActionsModel = {
  usesrsMenagementActions: SingleActionModel;
};
