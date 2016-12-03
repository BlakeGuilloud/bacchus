import App from './App';
import { Bacchus } from './docs';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Bacchus },
  // childRoutes: [],
};

export default routes;
