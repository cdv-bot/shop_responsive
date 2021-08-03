import Cart from '../../pages/cart';
import Checkout from '../../pages/checkout';

import Home from '../../pages/home';
import InfoItem from '../../pages/InfoItem';
import NotFound from '../../pages/NotFound';
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
    path: '*',
    exact: true,
    main: NotFound,
  },
];

export default Page;
