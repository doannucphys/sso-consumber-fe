import { myAuthAxios } from '@libs/api';
import { apiUri } from '@api/const';
import { AxiosResponse } from 'axios';

export const logout = async () => {
  return new Promise((resolve, reject) => {
    myAuthAxios({
      url: apiUri.LOGOUT,
      method: 'post',
    })
      .then((data: AxiosResponse) => {
        if (data) {
          localStorage.removeItem('token');
          return resolve(data);
        }
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export const getPrivateData = async () => {
  return new Promise((resolve, reject) => {
    myAuthAxios({
      url: apiUri.GET_PRIVATE,
      method: 'Get',
    })
      .then((res) => {
        return resolve(res);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};
