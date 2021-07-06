import { configureStore } from '@reduxjs/toolkit'
import menuMobile from '../store/menuMobile';

export default configureStore({
  reducer: {
    menuBar: menuMobile
  },
});