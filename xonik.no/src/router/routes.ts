import { ROUTE_NORMAL, Routes } from './routes.type';
import Layout from '../layout/Layout';
import Frontpage from '../pages/Frontpage';
import PageMpg200 from '../pages/mpg-200/PageMpg200';

export const paths = {
  root: '/',
  mpg200: '/mpg200'
};

export const routes: Routes = [
  {
    type: ROUTE_NORMAL,
    path: paths.root,
    component: Frontpage,
    layout: Layout,
  },
  {
    type: ROUTE_NORMAL,
    path: paths.mpg200,
    component: PageMpg200,
    layout: Layout,
  },
];