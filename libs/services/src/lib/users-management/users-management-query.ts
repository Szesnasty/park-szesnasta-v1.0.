import axios from 'axios';
import {
  GetUsersListResponseModel,
  PageInfoResponseModel,
  PageInfoRequestModel,
} from '@park-szesnasta/utilities';
import { GET_USERS_LIST_URL } from './users-management-api';

export class UsersManagementQuery {
  URL_API: string;
  constructor() {
    this.URL_API = process.env.NX_URL_API;
  }

  GetUsers = (requestQuery: { pageInfo: PageInfoRequestModel }) => {
    return axios.post<GetUsersListResponseModel>(
      `${this.URL_API}/${GET_USERS_LIST_URL}`,
      requestQuery
    );
  };
}
