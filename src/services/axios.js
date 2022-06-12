import axios from 'axios';

const httpSvc = axios.create({
  baseURL: process.env.REACT_APP_API_URL + 'api/v1',
  timeout: 50000,
  timeoutErrorMessage: 'Server times out',
  headers: {
    'content-type': 'application/json',
  },
});

export const httpPost = async (url, data, is_strict = false) => {
  try {
    let response = await httpSvc.post(url, data);
    if (response.status === 200) {
      return response.data;
    } else {
      throw response.data;
    }
  } catch (error) {
    throw error;
  }
};
