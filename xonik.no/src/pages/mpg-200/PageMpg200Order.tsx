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
    return <div className="orderPage">
      <h1>MPG-200 Order Form</h1>
      <FormValidation onSubmit={this.onSubmit} config={formConfig}>
        {({ errors, fields, submitted }) => (
          <>
            <div>
              Please fill in the form below and I will send you a Paypal invoice
            </div>
            <h2>Personal details</h2>
            <div>
              <label>
                Name
                <input name="name"/>
                {submitted && errors.name && <span>{errors.name}</span>}
              </label>
            </div>
            <div>
              <label>
                Email
                <input type="text" name="email"/>
                {submitted && errors.email && <span>{errors.email}</span>}
              </label>
              * This is where your paypal invoice will be sent
            </div>
            <div>
              <label>
                Confirm email
                <input type="text" name="email2"/>
                {submitted && errors.email2 && <span>{errors.email2}</span>}
              </label>
            </div>
            <h2>Shipping address</h2>
            <div>
              <label>
                Street name and number
                <input type="text" name="address1"/>
                {submitted && errors.address1 && <span>{errors.address1}</span>}
              </label>
            </div>
            <div>
              <label>
                Extended address
                <input type="text" name="address2"/>
                {submitted && errors.address2 && <span>{errors.address2}</span>}
              </label>
            </div>
            <div>
              <label>
                Zip code
                <input type="text" name="zip"/>
                {submitted && errors.zip && <span>{errors.zip}</span>}
              </label>
            </div>
            <div>
              <label>
                City
                <input type="text" name="city"/>
                {submitted && errors.city && <span>{errors.city}</span>}
              </label>
            </div>
            <div>
              <label>
                Country
                <input type="" name="country"/>
                {submitted && errors.country && <span>{errors.country}</span>}
              </label>
            </div>
            <div>
              <label>
                Accept terms
                <input type="checkbox" name="terms"/>
                {submitted && errors.terms && <span>{errors.terms}</span>}
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