import { NO_PERMISSION, OK_CODE } from '@/app/keys';
import router from '@/router';
import { UserInfo } from '@/store/modules/useUserStore';
import axios from 'axios';

const requests = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 20 * 1000,
});

// 请求拦截器
requests.interceptors.request.use((config) => {
  config = config || {};
  const user = JSON.parse(localStorage.getItem('user') || '{}') as UserInfo;
  if (user.token) {
    config.headers!['Authorization'] = user.token;
  }
  return config;
});

requests.interceptors.response.use(
  (resp) => {
    const { code, msg } = resp.data || {};
    if (code !== OK_CODE) {
      return Promise.reject(msg);
    }
    if (code === NO_PERMISSION) {
      router.push({
        name: 'Login',
      });
      return Promise.reject(msg);
    }
    return Promise.resolve(resp);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default requests;
