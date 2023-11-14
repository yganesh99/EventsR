import HomePage from '../containers/HomePage/Loadable';
import ProductTypes from '../containers/ProductTypes/Loadable';
import Products from '../containers/Products/Loadable';
import NotFoundPage from '../containers/NotFoundPage/Loadable';
import Login from '../containers/Login/Loadable';
import Register from '../containers/Register/Loadable';
import MyAccount from '../containers/MyAccount/Loadable';
import MyProfile from '../containers/MyProfile/Loadable';
import MyOrders from '../containers/MyOrders/Loadable';

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
  },
  {
    path: '/my-account',
    component: MyAccount,
    exact: true,
  },
  {
    path: '/my-profile',
    component: MyProfile,
    exact: true,
  },
  {
    path: '/my-orders',
    component: MyOrders,
    exact: true,
  },
  {
    path: '/product-types',
    component: ProductTypes,
    exact: true,
  },
  {
    path: '/products',
    component: Products,
    exact: true,
  },
  {
    component: NotFoundPage,
  },
];

export default routes;
