import React, { Component } from 'react';

class PageContactReceipt extends Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return <div className="order">
      <h1>Contact form receipt</h1>
      <p>
        Thank you! I will get back to you shortly.
      </p>
    </div>;
  };
}

export default PageContactReceipt;