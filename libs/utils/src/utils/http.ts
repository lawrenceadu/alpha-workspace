import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'; // prettier-ignore

// let store: any;
// let logout: any;

// // redux stuff
// export const injectStore = (_store: any) => {
//   store = _store;
// };

// export const injectLogout = (_logout: any) => {
//   logout = _logout;
// };

export const http = axios.create({
  timeout: 45000,
  baseURL: process.env['NX_BASE_API'],
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = (() => {
    // if (store) {
    //   return store.getState().user.token;
    // }
    return null;
  })();

  if (config.headers) {
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`;
    }
  }

  return config;
});

http.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError<string>) => {
    if (error.response?.status !== 500) {
      if (error.response?.status === 401) {
        // if (store && logout) {
        //   store.dispatch(logout());
        // }
      }

      return Promise.reject(error?.response?.data);
    }

    if (error.response?.status === 500) {
      return Promise.reject({ message: 'Internal server error' });
    }

    return;
  }
);

export default http;
