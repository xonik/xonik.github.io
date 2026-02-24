import type { ReactNode } from 'react';

export const ROUTE_NORMAL: 'normal' = 'normal';
export const ROUTE_REDIRECT: 'redirect' = 'redirect';

interface RouteConfig {
  type: typeof ROUTE_NORMAL;
  path: string;
  element: ReactNode;
}

interface RedirectRoute {
  type: typeof ROUTE_REDIRECT;
  path: string;
  redirectPath: string;
}

export type RoutesConfig = (RouteConfig | RedirectRoute)[];
