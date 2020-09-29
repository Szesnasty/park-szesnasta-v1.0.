export type CreateNewUserRequestModel = {
  id?: string;
  name: string;
  email: string;
};

export type GetUsersListResponseModel = CreateNewUserRequestModel;
