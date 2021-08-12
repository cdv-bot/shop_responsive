import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    infoUser: (state) => {
      return !state;
    },
  },
});

const { reducer, actions } = user;
export const { infoUser } = actions;
export default reducer;
