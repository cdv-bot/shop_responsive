import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import menuMobile from './menuMobile';
import cart from './cart';
export default configureStore({
  reducer: {
    menuBar: menuMobile,
    cart,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
