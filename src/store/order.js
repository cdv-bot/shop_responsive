import { createSlice } from '@reduxjs/toolkit';
import { notification } from 'antd';
import 'antd/dist/antd.css';
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

export const orderApi = createAsyncThunk('users/order', async (data) => {
  const userId = window.localStorage.getItem('id_user');
  const response = await api.orderProduct({
    userId,
    data,
  });
  return response;
});

const order = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {},
  extraReducers: {
    [orderApi.fulfilled]: (state, action) => {
      notification.success({
        message: 'Đã đặt hàng thành công.',
        description: 'Chúng tôi sẽ liên hệ bạn sớm nhất.',
      });
      window.location.replace('http://localhost:3000/');
      return action.payload.data;
    },
  },
});

const { reducer } = order;
export default reducer;
