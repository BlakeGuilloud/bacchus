import App from './App';
import {
  ButtonApp,
  ColorsApp,
  FormsApp,
  Home,
  LabelApp,
  NotFound,
} from './docs';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: '/buttons', component: ButtonApp },
    { path: '/colors', component: ColorsApp },
    { path: '/forms', component: FormsApp },
    { path: '/labels', component: LabelApp },
    { path: '*', component: NotFound },
  ],
};

export default routes;
