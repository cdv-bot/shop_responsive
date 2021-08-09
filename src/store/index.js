import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import menuMobile from './menuMobile';
import cart from './cart';
import order from './order';
export default configureStore({
  reducer: {
    menuBar: menuMobile,
    cart,
    order,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
