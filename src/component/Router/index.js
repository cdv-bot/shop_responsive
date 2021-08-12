import Admin from '../../pages/admin';
import Cart from '../../pages/cart';
import Checkout from '../../pages/checkout';
import Collections from '../../pages/collections.js';

import Home from '../../pages/home';
import InfoItem from '../../pages/InfoItem';
import Login from '../../pages/Login/Login';
import NotFound from '../../pages/NotFound';
import Registration from '../../pages/registration/Registration';
const Page = [
  {
    path: '/',
    exact: true,
    main: Home,
  },
  {
    path: '/product/:slug',
    exact: true,
    main: InfoItem,
  },
  {
    path: '/cart',
    exact: true,
    main: Cart,
  },
  {
    path: '/checkout',
    exact: true,
    main: Checkout,
  },
  {
    path: '/collections/:name',
    exact: true,
    main: Collections,
  },
  {
    path: '/login',
    exact: true,
    main: Login,
  },
  {
    path: '/logup',
    exact: true,
    main: Registration,
  },
  {
    path: '/admin',
    exact: true,
    main: Admin,
  },
  {
    path: '*',
    exact: true,
    main: NotFound,
  },
];

export default Page;
