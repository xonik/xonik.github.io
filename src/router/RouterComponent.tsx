import * as React from 'react';
import { routes } from './routes';
import {
  ROUTE_NORMAL,
  ROUTE_REDIRECT
} from './routes.type';
import { Routes } from './routes.type';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';

const getRoutes = (routes: Routes) => {
  return routes.map(route => {
    if (route.type === ROUTE_NORMAL) {
      const {
        path,
        component: Component,
        layout: Layout,
      } = route;
      return (
        <Route
          exact
          key={path}
          path={path}
          render={props =>
            <Layout>
              <Component {...props} />
            </Layout>
          }
        />
      );
    } else if (route.type === ROUTE_REDIRECT) {
      const { path, redirectPath } = route;
      return <Redirect exact from={path} to={redirectPath} />
    } else {
      const allRoutesAreHandled: never = route;
      throw new Error(allRoutesAreHandled);
    }
  });
};

const RouterComponent = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Redirect exact from="/index.html" to="/" />
      {getRoutes(routes)}
    </Switch>
  </BrowserRouter>
);

export default RouterComponent;
