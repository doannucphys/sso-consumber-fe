import axios, { AxiosError, AxiosResponse } from 'axios';

const myAuthAxios = axios.create({
  baseURL: import.meta.env.VITE_API,
});

myAuthAxios.interceptors.request.use(
  (config) => {
    if (
      localStorage.getItem('token') &&
      localStorage.getItem('token') !== undefined
    ) {
      config.headers['Authorization'] =
        'Bearer ' + localStorage.getItem('token');
      config.headers['Content-Type'] = 'application/json';
      config.headers['Accept'] = 'application/json, multipart/form-data';
    } else {
      return Promise.reject('missing token');
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

myAuthAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response?.data);
    } else {
      return Promise.reject('Call api erorr');
    }
  },
  (error: AxiosError) => {
    if (error.response && error.response.status) {
      const errorData = error?.response?.data;
      return Promise.reject(errorData);
      // switch (error.response.status) {
      // case 401:
      //     return Promise.reject(error.response)
      //     break
      // case 400:
      //     return Promise.reject(error.response)
      //     break
      // default:
      //     return Promise.reject(error.response)
      //     break
      // }
    }
  },
);

export { myAuthAxios };
