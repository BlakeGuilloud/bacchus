import App from './App';
import { ButtonApp, Home } from './docs';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: '/button', component: ButtonApp },
  ],
};

export default routes;
