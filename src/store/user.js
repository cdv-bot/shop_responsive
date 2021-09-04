import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    infoUser: (state, action) => {
      return action.payload;
    },
  },
});

const { reducer, actions } = user;
export const { infoUser } = actions;
export default reducer;
