import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import menuMobile from './menuMobile';
import cart from './cart';
import order from './order';
import user from './user';
export default configureStore({
  reducer: {
    menuBar: menuMobile,
    cart,
    order,
    user,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
