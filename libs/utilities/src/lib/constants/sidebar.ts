import { Routes } from './routes';

export const SidebarMenu = [
  {
    id: 'Home_id_sidebar_1',
    name: 'Home',
    linkName: Routes.Home.name,
    to: Routes.Home.path,
    icon: null,
  },
  {
    id: 'User_management_id_sidebar_2',
    name: 'User_management',
    linkName: Routes.UsersManagement.name,
    to: Routes.UsersManagement.path,
    icon: null,
  },
];
