import { ROUTE_NORMAL, Routes } from './routes.type';
import Layout from '../layout/Layout';
import Frontpage from '../pages/Frontpage';
import PageMpg200 from '../pages/mpg-200/PageMpg200';
import PageMpg200BuildersGuide from '../pages/mpg-200/PageMpg200BuildersGuide';

export const paths = {
  root: '/',
  mpg200: '/mpg200',
  mpg200buildersGuide: '/mpg200/builders-guide'
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
  {
    type: ROUTE_NORMAL,
    path: paths.mpg200buildersGuide,
    component: PageMpg200BuildersGuide,
    layout: Layout,
  },
];