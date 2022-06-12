import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import { RedirectUser } from '../helpers/functions';

const httpSvc = axios.create({
  baseURL: process.env.REACT_APP_API_URL + 'api/v1',
  timeout: 50000,
  timeoutErrorMessage: 'Server times out',
  headers: {
    'content-type': 'application/json',
  },
});

// Add a request interceptor
httpSvc.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
httpSvc.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response.status === StatusCodes.UNAUTHORIZED) {
      localStorage.removeItem('stack_8_token');
      localStorage.removeItem('stack_8_user');
      return <RedirectUser url="/login" />;
    } else if (err.response.status === StatusCodes.FORBIDDEN) {
      return <>Forbidden access</>;
    } else {
      return Promise.reject(err.response.data);
    }
  }
);

export const httpPost = async (url, data, is_strict = false) => {
  try {
    let response = await httpSvc.post(url, data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
