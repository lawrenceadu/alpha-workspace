import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'; // prettier-ignore

let store: { token?: string; [x: string]: unknown };
let logout: () => void;

export const injectStore = (_store: typeof store) => {
  store = _store;
};

export const injectLogout = (_logout: typeof logout) => {
  logout = _logout;
};

export const http = axios.create({
  timeout: 45000,
  baseURL: process.env['NX_BASE_API'],
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (config.headers) {
    if (store?.token) {
      config.headers['authorization'] = `Bearer ${store.token}`;
    }
  }

  return config;
});

http.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError<string>) => {
    if (error.response?.status !== 500) {
      if (error.response?.status === 401) {
        if (store && logout) {
          logout();
        }
      }

      return Promise.reject(error?.response?.data);
    }

    if (error.response?.status === 500) {
      return Promise.reject({ message: 'Internal server error' });
    }

    return;
  }
);

export default Object.assign(http, { injectStore, injectLogout });
