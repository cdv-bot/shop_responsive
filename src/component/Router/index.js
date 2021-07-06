import { lazy } from 'react';
import Home from '../../pages/home';
import InfoItem from '../../pages/InfoItem.js';
import NotFound from '../../pages/NotFound.js';
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
    path: '*',
    exact: true,
    main: NotFound,
  },
];

export default Page;
