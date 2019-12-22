export const ROUTE_NORMAL: 'normal' = 'normal';
export const ROUTE_REDIRECT: 'redirect' = 'redirect';

interface Route {
  type: typeof ROUTE_NORMAL;
  path: string;
  component: any;
  layout: any;
}

interface RedirectRoute {
  type: typeof ROUTE_REDIRECT
  path: string;
  redirectPath: string;
}

export type Routes = (Route | RedirectRoute)[];
