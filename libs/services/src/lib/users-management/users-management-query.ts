import axios from 'axios';
import {
  GetUsersListResponseModel,
  PageInfoResponseModel,
  PageInfoRequestModel,
} from '@park-szesnasta/utilities';
import { GET_USERS_LIST_URL } from './users-management-api';
import { API_URL } from './../api_url';

export class UsersManagementQuery {
  URL_API: string;
  constructor() {
    // this.URL_API = process.env.NX_URL_API;
  }

  GetUsers = (requestQuery: { pageInfo: PageInfoRequestModel }) => {
    return axios.post<GetUsersListResponseModel>(
      `${API_URL}/${GET_USERS_LIST_URL}`,
      requestQuery
    );
  };
}
