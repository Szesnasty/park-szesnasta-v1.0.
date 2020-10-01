import axios from 'axios';
import {
  LoginRequestModel,
  LoginResponseModel,
} from '@park-szesnasta/utilities';
import { LOGIN_URL } from './login-api';

export class LoginCommands {
  URL_API: string;
  constructor() {
    this.URL_API = process.env.NX_URL_API;
  }

  LoginUser = (requestQuery: LoginRequestModel) =>
    axios.post<LoginResponseModel>(
      `${this.URL_API}/${LOGIN_URL}`,
      requestQuery
    );
}
