import { ROUTE_NORMAL, Routes } from './routes.type';
import Layout from '../layout/Layout';
import Frontpage from '../pages/Frontpage';
import PageMpg200 from '../pages/mpg-200/PageMpg200';
import PageMpg200Order from '../pages/mpg-200/PageMpg200Order';
import PageMpg200BuildersGuide from '../pages/mpg-200/PageMpg200BuildersGuide';
import PageContactMe from '../pages/PageContactMe';
import PageContactReceipt from '../pages/PageContactReceipt';

export const paths = {
  root: '/',
  mpg200: '/mpg200',
  mpg200buildersGuide: '/mpg200/builders-guide',
  mpg200order: '/mpg200/order',
  contactMe: '/contact-me',
  contactMeReceipt: '/contact-me/receipt',
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
  {
    type: ROUTE_NORMAL,
    path: paths.mpg200order,
    component: PageMpg200Order,
    layout: Layout,
  },
  {
    type: ROUTE_NORMAL,
    path: paths.contactMe,
    component: PageContactMe,
    layout: Layout,
  },
  {
    type: ROUTE_NORMAL,
    path: paths.contactMeReceipt,
    component: PageContactReceipt,
    layout: Layout,
  },
];