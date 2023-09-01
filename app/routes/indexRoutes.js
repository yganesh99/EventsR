import HomePage from '../containers/HomePage/Loadable';
import ProductCategories from '../containers/ProductCategories/Loadable';
import Products from '../containers/Products/Loadable';
import NotFoundPage from '../containers/NotFoundPage/Loadable';

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
