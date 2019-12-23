import React, { Component } from 'react';
import { paths } from '../router/routes';
import { Link } from 'react-router-dom';

class PageContactReceipt extends Component {

  render() {
    return <div className="order">
      <h1>Contact form receipt</h1>
      <p>
        Thank you! I will get back to you shortly.
      </p>
      <p>
        <Link to={paths.root}>To frontpage</Link>
      </p>
    </div>;
  };
}

export default PageContactReceipt;