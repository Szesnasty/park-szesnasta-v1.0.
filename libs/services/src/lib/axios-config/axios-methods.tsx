import axios from 'axios';

const URL_API = process.env.NX_URL_API;

const accessToken: string = localStorage.getItem('access-token');
const config = {
  headers: { Authorization: `Bearer ${accessToken}` },
};

export const Post = <T extends {}, P>(endpoint: string, data: T) => {
  return axios.post<P>(`${URL_API}/${endpoint}`, data, config);
};
