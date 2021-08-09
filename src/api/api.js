import useSWR from 'swr';
import queryString from 'query-string';
import axiosClient from './axiosClient';

const policyApi = {
  getProductItem: (id) => {
    return axiosClient.get(`http://localhost:3001/product/${id}`);
  },
  getDistrict: () => {
    return axiosClient.post(
      'https://gw-gddt.baohiemxahoi.gov.vn/api/getDmtinhthanh'
    );
  },
  postUserId: (data) => {
    return axiosClient.post('http://localhost:3001/user', data);
  },
  addProduct: (data) => {
    return axiosClient.post('http://localhost:3001/productlist', data);
  },
  deleteProduct: (data) => {
    return axiosClient.post('http://localhost:3001/productlist/delete', data);
  },
  editProduct: (data) => {
    return axiosClient.post('http://localhost:3001/productlist/edit', data);
  },
  orderProduct: (data) => {
    return axiosClient.post('http://localhost:3001/order', data);
  },
};

export default policyApi;
