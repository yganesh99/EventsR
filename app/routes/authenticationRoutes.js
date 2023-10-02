import LoginPage from '../containers/LoginPage/Loadable';
import RegisterPage from '../containers/RegisterPage/Loadable';

const routes = [
  {
    path: '/',
    component: HomePage,
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
