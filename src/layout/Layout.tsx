import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from './Footer';
import Header from './Header';
import './Layout.scss';
import { paths } from '../router/routes';
import { Link } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({ children }) => {
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

export default Layout;
