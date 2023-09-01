import axios from 'axios';
import Qs from 'qs';

const REQUEST_TIME_OUT = 60000;

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIME_OUT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(
  async config => {
    const requestConfig = config;
    requestConfig.paramsSerializer = params => {
      return Qs.stringify(params, {
        arrayFormat: 'brackets',
        encode: false,
      });
    };

    return requestConfig;
  },
  err => {
    return Promise.reject(err);
  },
);

export {BASE_URL, client};
