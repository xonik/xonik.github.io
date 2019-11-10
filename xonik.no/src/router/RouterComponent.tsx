import * as React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';
import { routes } from './routes';
import {
  ROUTE_NORMAL,
  ROUTE_REDIRECT
} from './routes.type';
import { Routes } from './routes.type';

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
  <Router history={history}>
    <Switch>
      <Redirect exact from="/index.html" to="/" />
      {getRoutes(routes)}
    </Switch>
  </Router>
);

export default RouterComponent;
