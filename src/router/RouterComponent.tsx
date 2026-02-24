import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';
import { ROUTE_NORMAL, ROUTE_REDIRECT } from './routes.type';
import type { RoutesConfig } from './routes.type';

const getRoutes = (routes: RoutesConfig) => {
  return routes.map(route => {
    if (route.type === ROUTE_NORMAL) {
      const { path, element } = route;
      return <Route key={path} path={path} element={element} />;
    } else if (route.type === ROUTE_REDIRECT) {
      const { path, redirectPath } = route;
      return <Route key={path} path={path} element={<Navigate to={redirectPath} replace />} />;
    } else {
      const allRoutesAreHandled: never = route;
      throw new Error(allRoutesAreHandled);
    }
  });
};

const RouterComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/index.html" element={<Navigate to="/" replace />} />
      {getRoutes(routes)}
    </Routes>
  </BrowserRouter>
);

export default RouterComponent;
