import axios, { AxiosResponse } from 'axios';
import { ApiQueryResponse } from '../core/_models';
import { GET_USERS_URL } from '../../constants/api';

export const getUsers = (name: string, page?: number): Promise<ApiQueryResponse> => {
  return axios
    .get(GET_USERS_URL, {
      headers: {},
      params: {
        name,
        page,
      },
    })
    .then((d: AxiosResponse<ApiQueryResponse>) => d.data);
};
