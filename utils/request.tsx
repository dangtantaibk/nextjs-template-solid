import axios from 'axios';
import { AUTH_DOMAIN, ECODE } from 'constant';

const axiosInstance = axios.create({
  baseURL: `https://banhtrungthu24h.com/`,
  timeout: 10000,
  withCredentials: true,
});

const addAuthorizationHeader = (config) => {
  const token = localStorage.getItem('auth');
  config.headers = {
    ...config.headers,
    'Content-Type': 'application/json;charset=UTF-8;',
  };
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
};

const handleErrorResponse = (error) => {
  if (typeof window !== "undefined") {
    if (error.response?.data?.code === ECODE.SESSION_INVALID) {
      window.location.href = `https://${AUTH_DOMAIN[location.host]}/login/?refType=DMS_ADMIN&redirect_url=${encodeURI(location.href)}`;
    } else if (error.response?.data?.code === ECODE.PERMISSION_DENIED) {
      if (window.location.href !== '/403') {
        window.location.href = `/403?redirect_url=${encodeURI(location.href)}`;
      }
    }
    return Promise.reject(error);
  }
};

axiosInstance.interceptors.request.use(addAuthorizationHeader);
axiosInstance.interceptors.response.use((response) => response, handleErrorResponse);

export default axiosInstance;