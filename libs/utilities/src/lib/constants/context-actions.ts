import { SingleActionModel } from './../models';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

export const usesrsMenagementActions = [
  {
    id: 1,
    name: 'delete',
    value: 'USERS_MANAGEMENT-DELETE',
    isForSingleItem: true,
    icon: DeleteOutlineIcon,
  },
  {
    id: 2,
    name: 'edit',
    value: 'USERS_MANAGEMENT-EDIT',
    isForSingleItem: false,
    icon: EditOutlinedIcon,
  },
];
