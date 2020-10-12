export type CreateNewUserRequestModel = {
  id?: string;
  name: string;
  email: string;
  surname: string;
  password: string;
};

export type CreateNewUserResponseModel = {
  id?: string;
  name: string;
  email: string;
  surname: string;
  password: string;
};

export type PageInfoResponseModel = {
  pageSize: number;
  pageNumber: number;
  total?: number;
};
export type PageInfoRequestModel = {
  pageSize: number;
  pageNumber: number;
};

export type GetUsersListResponseModel = {
  items: CreateNewUserResponseModel[];
  pageInfo: PageInfoResponseModel;
};
