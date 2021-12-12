export interface BasicResp<T> {
  code: number;
  data: T;
  msg: string;
}

export interface LoginResp {
  code: number;
  msg: string;
  token: string;
}
