import React, { Component } from 'react';
import { FormContext, FormValidation } from 'calidation';
import firebaseApi from '../../integration/firebase/api';
import './PageMpg200Order.scss';
import { paths } from '../../router/routes';
import history from '../../router/history';

const formConfig = {
  mpg200count: {
    isNumber: 'Number of MPG-200 kits must be a number'
  },
  enclosureCount: {
    isNumber: 'Number of enclosures must be a number'
  },
  name: {
    isRequired: 'Name is required!',
  },
  email: {
    isRequired: 'Name is required!',
    isEmail: 'Email is required',
  },
  email2: {
    isRequired: 'Please confirm email address',
    isEqual: ({ fields }: { fields: any }) => ({
      message: 'The two emails must match',
      value: fields.email,
      validateIf: fields.email.length > 0,
    }),
  },
  address1: {
    isRequired: 'Street address is required',
  },
  zip: {
    isRequired: 'Postal code is required',
  },
  city: {
    isRequired: 'Postal city is required',
  },
  country: {
    isRequired: 'Country is required',
  },
  comments: {
    isMaxLength: {
      message: 'Comment is too long',
      length: 4000,
    },
  },
  terms: {
    isRequired: 'You must approve of terms and conditions before submitting',
    isEqual: () => ({
      message: 'You must approve of terms and conditions before submitting',
      value: true,
    }),
  }
};

interface State {
  mpg200Count: number,
  enclosureCount: number,
}

class PageMpg200Order extends Component<any, State> {

  constructor(props: any) {
    super(props);

    this.state = {
      mpg200Count: 0,
      enclosureCount: 0,
    }
  }

  onSubmit({ fields, isValid }: FormContext) {
    if (isValid) {
      const {
        mpg200count,
        enclosureCount,
        ...passThroughFields
      } = fields;

      const order: any = {
        orderDate: new Date().toISOString(),
        ...passThroughFields,
        items: []
      };

      if(mpg200count > 0){
        order.items.push({name: 'MPG-200', count: mpg200count});
      }
      if(enclosureCount > 0){
        order.items.push({name: 'Enclosure', count: enclosureCount});
      }

      console.log('submitting', order);
      firebaseApi.submitOrder(order);
      history.push(paths.mpg200orderReceipt);
    }
  }


  render() {

    const options = [0,1,2,3,4,5,6,7,8,9,10];
    const sum = this.state.mpg200Count * 50 + this.state.enclosureCount * 10;

    return <div className="order">
      <h1>MPG-200 Order Form</h1>
      <p>
        If you've arrived here you probably know what the MPG-200 is all about.
        If not, <a href={paths.mpg200} title="Check out the MPG-200">check it out</a>
      </p>
      <p>
        intro text, one man operation
      </p>
      <FormValidation onSubmit={this.onSubmit} config={formConfig}>
        {({ errors, fields, submitted }) => (
          <>
            <div>
              Please fill in the form below and I will send you a Paypal invoice
            </div>
            <h2>Items</h2>
            <div className="order_form-input">
              <select name="mpg200count" onChange={e => this.setState({mpg200Count: parseInt(e.target.value)})}>
                {options.map(index => <option key={index} value={index}>{index}</option>)}
              </select>
              MPG-200 kits, €50 per kit
            </div>
            <div className="order_form-input">
              <select name="enclosureCount" onChange={e => this.setState({enclosureCount: parseInt(e.target.value)})}>
                {options.map(index => <option key={index} value={index}>{index}</option>)}
              </select>
              Laser cut MDF enclosures, €10 per enclosure
            </div>
            <p>
              <strong>Total: {sum} + shipping</strong>
            </p>
            <p>
              In addition, you will have to pay any customs fees, VAT and other fees applicable in your country.
            </p>
            <h2>Personal details</h2>
            <div className="order_form-input">
              <input name="name" placeholder="Name"/>
              {submitted && errors.name &&
              <span className="order_validation-error">{errors.name}</span>}
            </div>
            <div className="order_form-input">
              <input name="email" placeholder="Email"/>
              <div className="order_help-text">This is where your paypal invoice will be sent</div>
              {submitted && errors.email &&
              <span className="order_validation-error">{errors.email}</span>}
            </div>
            <div className="order_form-input">
              <input name="email2" placeholder="Confirm email"/>
              {submitted && errors.email2 &&
              <span className="order_validation-error">{errors.email2}</span>}
            </div>
            <h2>Shipping address</h2>
            <div className="order_form-input">
              <input name="address1" placeholder="Street name and number"/>
              {submitted && errors.address1 &&
              <span className="order_validation-error">{errors.address1}</span>}
            </div>
            <div className="order_form-input">
              <input name="address2" placeholder="Extended address"/>
              {submitted && errors.address2 &&
              <span className="order_validation-error">{errors.address2}</span>}
            </div>
            <div className="order_form-input">
              <input name="zip" placeholder="Postal code"/>
              {submitted && errors.zip &&
              <span className="order_validation-error">{errors.zip}</span>}
            </div>
            <div className="order_form-input">
              <input name="city" placeholder="Postal city"/>
              {submitted && errors.city &&
              <span className="order_validation-error">{errors.city}</span>}
            </div>
            <div className="order_form-input">
              <input name="country" placeholder="Country"/>
              {submitted && errors.country &&
              <span className="order_validation-error">{errors.country}</span>}
            </div>

            <h2>Additional</h2>
            <div className="order_form-input">
              <textarea name="comments" placeholder="comments" maxLength={4000}/>
            </div>
            <div className="order_form-input">
              <label>
                <input type="checkbox" name="terms"/> Accept terms
                {submitted && errors.terms &&
                <span className="order_validation-error">{errors.terms}</span>}
              </label>
            </div>
            <button>Submit order</button>
          </>
        )}
      </FormValidation>
    </div>;
  };
}

export default PageMpg200Order;