import { BasicResp } from './types';
import useHttp from './useHttp';

export interface LoginData {
  username: string;
  password: string;
}

export const loginApi = (data: LoginData) => {
  return useHttp<BasicResp<Object>>({
    url: '/login',
    method: 'post',
    data: {
      ...data,
    },
  });
};
