import { SingleActionModel } from './../models';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import {
  USERS_MANAGEMENT_DELETE,
  USERS_MANAGEMENT_EDIT,
} from './context-actions-values';
export const usesrsMenagementActions: SingleActionModel[] = [
  {
    id: 1,
    name: 'delete',
    value: USERS_MANAGEMENT_DELETE,
    isForSingleItem: true,
    icon: DeleteOutlineIcon,
  },
  {
    id: 2,
    name: 'edit',
    value: USERS_MANAGEMENT_EDIT,
    isForSingleItem: false,
    icon: EditOutlinedIcon,
  },
];
