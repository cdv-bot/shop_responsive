import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  const token = window.localStorage.getItem('token');
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.common['token'] = `Bearer ${token}`;
  }
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    if (error.request?.status === 401) {
      window.localStorage.removeItem('id_user');
      window.location.replace('http://localhost:3000/');
    }

    if (error.request?.status === 403) {
      window.localStorage.removeItem('token');
    }

    throw error;
  }
);
export default axiosClient;
