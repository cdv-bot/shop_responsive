import { createSlice } from '@reduxjs/toolkit';
import { notification } from 'antd';
import 'antd/dist/antd.css';
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

export const fetchUserById = createAsyncThunk('users/fetchById', async (data) => {
  const userId = window.localStorage.getItem('id_user');
  const response = await api.addProduct({
    userId,
    listProduct: data,
  });
  return response;
});

export const deleteProduct = createAsyncThunk(
  'users/deleteProduct',
  async (data) => {
    const userId = window.localStorage.getItem('id_user');
    const response = await api.deleteProduct({
      userId,
      data,
    });
    return response;
  }
);

export const editProduct = createAsyncThunk('users/edit', async (data) => {
  const userId = window.localStorage.getItem('id_user');
  const response = await api.editProduct({
    userId,
    data,
  });
  return response;
});
const cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProductApi: (state, actions) => {
      return actions.payload;
    },
  },
  extraReducers: {
    [fetchUserById.fulfilled]: (state, action) => {
      notification.success({
        message: 'Đã thêm thành công.',
        description: '',
        placement: 'topLeft',
      });
      return action.payload.dataItem;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      notification.success({
        message: 'Đã xóa thành công.',
        description: '',
        placement: 'topLeft',
      });
      return action.payload.data;
    },
    [editProduct.fulfilled]: (state, action) => {
      return action.payload.data;
    },
  },
});

const { reducer, actions } = cart;
export const { addProductApi } = actions;
export default reducer;
