import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import Helmet from 'react-helmet';
import Footer from './Footer';
import Header from './Header';
import './Layout.scss';
import { paths } from '../router/routes';
import { Link } from 'react-router-dom';

type Props = RouteComponentProps<any>;

const Layout: React.FunctionComponent<Props> = props => {
  const { children } = props;

  return (
    <div className="layout">
      <Helmet defaultTitle="Xonik.no"/>
      <Header />
      <div>
        <Link to={paths.root}><img src="/images/xonik-logo.png" className="logo-image" alt="Xonik logo"/></Link>
        <div className="layout__main">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(Layout);
