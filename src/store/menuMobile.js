import { createSlice } from '@reduxjs/toolkit';

const menuMobile = createSlice({
  name: 'actionMenu',
  initialState: false,
  reducers: {
    showMenu: (state) => {
      return !state;
    }
  }
});

const { reducer, actions } = menuMobile;
export const { showMenu } = actions;
export default reducer;