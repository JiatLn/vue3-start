import { LoginResp } from './types';
import useHttp from './useHttp';

export interface LoginData {
  username: string;
  password: string;
  code: string;
  uuid: string;
}

export const loginApi = (data: LoginData) => {
  return useHttp<LoginResp>({
    url: '/login',
    method: 'POST',
    data: {
      ...data,
    },
  });
};

export interface CaptchaImage {
  code: number;
  img: string;
  msg: string;
  uuid: string;
}

export const getCaptchaImageApi = () => {
  return useHttp<CaptchaImage>({
    url: '/captchaImage',
    method: 'GET',
  });
};
