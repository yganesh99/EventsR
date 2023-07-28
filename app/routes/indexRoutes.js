import HomePage from '../containers/HomePage/Loadable';
import NotFoundPage from '../containers/NotFoundPage/Loadable';

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    component: NotFoundPage,
  },
];


export default routes;
