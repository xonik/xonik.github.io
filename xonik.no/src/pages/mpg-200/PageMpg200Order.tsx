import React, { ChangeEvent, Component } from 'react';
import { FormContext, FormValidation } from 'calidation';
import './PageMpg200Order.scss';

const formConfig = {
  name: {
    isRequired: 'Name is required!',
  },
  email: {
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
  terms: {
    isRequired: 'You must approve of terms and conditions before submitting',
    isEqual: () => ({
      message: 'You must approve of terms and conditions before submitting',
      value: true,
    }),
  }
};

class PageMpg200Order extends Component {

  constructor(props: any) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  onSubmit({ fields, isValid }: FormContext) {
    if (isValid) {
      console.log('submitting', fields);
    }
  }

  handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return <div className="order">
      <h1>MPG-200 Order Form</h1>
      <FormValidation onSubmit={this.onSubmit} config={formConfig}>
        {({ errors, fields, submitted }) => (
          <>
            <div>
              Please fill in the form below and I will send you a Paypal invoice
            </div>
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
            <div className="order_form-input">
              <label>
                <input type="checkbox" name="terms"/> Accept terms
                {submitted && errors.terms &&
                <span className="order_validation-error">{errors.terms}</span>}
              </label>
            </div>
            <button>Order</button>
          </>
        )}
      </FormValidation>
    </div>;
  };
}

export default PageMpg200Order;