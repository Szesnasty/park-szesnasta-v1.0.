import { Routes } from './routes';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

export const SidebarMenu = [
  {
    id: 'Home_id_sidebar_1',
    name: 'Home',
    linkName: Routes.Home.name,
    to: Routes.Home.path,
    icon: HomeOutlinedIcon,
    hasIcon: true,
  },
  {
    id: 'User_management_id_sidebar_2',
    name: 'User_management',
    linkName: Routes.UsersManagement.name,
    to: Routes.UsersManagement.path,
    icon: PeopleOutlineIcon,
    hasIcon: true,
  },
];
