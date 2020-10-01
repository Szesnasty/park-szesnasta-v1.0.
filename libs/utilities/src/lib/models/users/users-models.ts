export type CreateNewUserRequestModel = {
  id?: string;
  name: string;
  email: string;
  surname: string;
  password: string;
};

export type GetUsersListResponseModel = CreateNewUserRequestModel;
