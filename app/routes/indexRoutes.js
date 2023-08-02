import HomePage from '../containers/HomePage/Loadable';
import ProductCategories from '../containers/ProductCategories/Loadable';
import NotFoundPage from '../containers/NotFoundPage/Loadable';

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/products',
    component: ProductCategories,
    exact: true,
  },
  {
    component: NotFoundPage,
  },
];


export default routes;
