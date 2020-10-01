export type LoginRequestModel = {
  email: string;
  password: string;
};

export type LoginResponseModel = { access_token: string; message: string };
