import useSWR from 'swr';
import queryString from 'query-string';
import axiosClient from './axiosClient';

const policyApi = {
  getProductItem: (id) => {
    return axiosClient.get(`/product/${id}`);
  },
  getDistrict: () => {
    return axiosClient.post(
      'https://gw-gddt.baohiemxahoi.gov.vn/api/getDmtinhthanh'
    );
  },
  postUserId: (data) => {
    return axiosClient.post('/user', data);
  },
  addProduct: (data) => {
    return axiosClient.post('/productlist', data);
  },
  deleteProduct: (data) => {
    return axiosClient.post('/productlist/delete', data);
  },
  editProduct: (data) => {
    return axiosClient.post('/productlist/edit', data);
  },
  orderProduct: (data) => {
    return axiosClient.post('/order', data);
  },
  login: (data) => {
    return axiosClient.post('/user/login', data);
  },
  checkToken: () => {
    return axiosClient.post('/user/posttoken');
  },
  postComment: (data) => {
    return axiosClient.post('/comment', data);
  },
  getComment: (data) => {
    return axiosClient.get(`/comment/${data}`);
  },
  logup: (data) => {
    return axiosClient.post(`/user/logup`, data);
  },
  getBuy: () => {
    return axiosClient.get('/user/listbuyproduct');
  },
  getDoneBuy: (data) => {
    return axiosClient.get(`/user/verybuy?id=${data}`);
  },
  getListOrder: (data) => {
    return axiosClient.post(`/listorder`, data);
  },
  getListAdmin: () => {
    return axiosClient.get(`/listadmin`);
  },
  upOrder: (data) => {
    return axiosClient.post(`/uporder`, data);
  },
  cancelOrder: (data) => {
    return axiosClient.post(`/canceladmin`, data);
  },
};

export default policyApi;
