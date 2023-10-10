import HomePage from '../containers/HomePage/Loadable';
import ProductCategories from '../containers/ProductCategories/Loadable';
import Products from '../containers/Products/Loadable';
import NotFoundPage from '../containers/NotFoundPage/Loadable';
import Login from '../containers/Login/Loadable';
import Register from '../containers/Register/Loadable';

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
    path: '/product-categories',
    component: ProductCategories,
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
