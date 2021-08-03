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

const cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProductApi: (state, actions) => {
      return actions.payload;
    },

    editProduct: (state, actions) => {
      const index = actions.payload.index;
      state[index] = {
        ...state[index],
        count: actions.payload.count,
      };
    },
  },
  extraReducers: {
    [fetchUserById.fulfilled]: (state, action) => {
      notification.success({
        message: 'Đã thêm thành công.',
        description: '',
      });
      return action.payload.dataItem;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      notification.success({
        message: 'Đã xóa thành công.',
        description: '',
      });
      return action.payload.data;
    },
  },
});

const { reducer, actions } = cart;
export const { addProduct, editProduct, addProductApi } = actions;
export default reducer;
