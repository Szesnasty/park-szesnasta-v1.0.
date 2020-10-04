import axios from 'axios';
import { CreateNewUserRequestModel } from '@park-szesnasta/utilities';
import { ADD_NEW_USER_URL, DELETE_USER_URL } from './users-management-api';

export class UsersManagementCommands {
  URL_API: string;
  constructor() {
    this.URL_API = process.env.NX_URL_API;
  }

  CreateNewUser = (requestQuery: CreateNewUserRequestModel) => {
    return axios.post<any>(`${this.URL_API}/${ADD_NEW_USER_URL}`, requestQuery);
  };

  RemoveUser = (requestQuery: { id: string }) => {
    return axios.delete<any>(`${this.URL_API}/${DELETE_USER_URL}`, {
      data: requestQuery,
    });
  };
}
