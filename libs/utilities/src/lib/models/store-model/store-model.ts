type DrawerStaticModel = {
  isStaticDrawerOpen: boolean;
  data: any;
  actionsList: any;
};

type DrawerModel = {
  isDrawerOpen: boolean;
  data: any;
  actionName: string;
};

export type StoreModel = {
  drawerStatic: DrawerStaticModel;
  drawer: DrawerModel;
};
