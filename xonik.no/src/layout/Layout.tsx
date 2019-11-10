import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import Helmet from 'react-helmet';
import Footer from './Footer';
import Header from './Header';
import './Layout.scss';

type Props = RouteComponentProps<any>;

const Layout: React.FunctionComponent<Props> = props => {
  const { children } = props;

  return (
    <div className="layout">
      <Helmet defaultTitle="Xonik.no"/>
      <Header />
      <div className="layout__main">{children}</div>
      <Footer />
    </div>
  );
};

export default withRouter(Layout);
