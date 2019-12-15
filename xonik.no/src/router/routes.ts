import { ROUTE_NORMAL, Routes } from './routes.type';
import Layout from '../layout/Layout';
import Frontpage from '../pages/Frontpage';
import PageMpg200 from '../pages/mpg-200/PageMpg200';
import PageMpg200Order from '../pages/mpg-200/PageMpg200Order';
import PageMpg200OrderReceipt from '../pages/mpg-200/PageMpg200OrderReceipt';
import PageMpg200BuildersGuide from '../pages/mpg-200/PageMpg200BuildersGuide';
import PageContactMe from '../pages/PageContactMe';
import PageContactReceipt from '../pages/PageContactReceipt';
import PageXM8 from '../pages/xm8/PageXM8';
import PagePg200 from '../pages/mpg-200/PagePg200';
import Page68b01 from '../pages/68b01/Page68b01';
import PageMachinebeats from '../pages/machinebeats/PageMachinebeats';

export const paths = {
  root: '/',
  xm8: '/xm8',
  pg200: '/mpg200/pg200',
  machinebeats: '/machinebeats',
  mpg200: '/mpg200',
  mpg200buildersGuide: '/mpg200/builders-guide',
  mpg200order: '/mpg200/order',
  mpg200orderReceipt: '/mpg200/order/receipt',
  keyboardController: '/68b01',
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
    path: paths.xm8,
    component: PageXM8,
    layout: Layout,
  },
  {
    type: ROUTE_NORMAL,
    path: paths.pg200,
    component: PagePg200,
    layout: Layout,
  },
  {
    type: ROUTE_NORMAL,
    path: paths.machinebeats,
    component: PageMachinebeats,
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
    path: paths.mpg200orderReceipt,
    component: PageMpg200OrderReceipt,
    layout: Layout,
  },
  {
    type: ROUTE_NORMAL,
    path: paths.keyboardController,
    component: Page68b01,
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