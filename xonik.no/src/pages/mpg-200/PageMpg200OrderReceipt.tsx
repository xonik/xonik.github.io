import React, { Component } from 'react';
import { paths } from '../../router/routes';

class PageContactReceipt extends Component {

  render() {
    return <div className="order">
      <h1>Order receipt</h1>
      <p>
        Thank you for your order! I will get back to you shortly.
      </p>
      <p>
        <a href={paths.root}>To frontpage</a>
      </p>
    </div>;
  };
}

export default PageContactReceipt;