import React, { Component } from 'react';
import { FormContext, FormValidation } from 'calidation';
import firebaseApi from '../integration/firebase/api';

const formConfig = {
  name: {
    isRequired: 'Name is required!',
  },
  email: {
    isRequired: 'Name is required!',
    isEmail: 'Email is required',
  },
  comments: {
    isMaxLength: {
      message: 'Comment is too long',
      length: 4000,
    },
  },
};

class PageContactMe extends Component {

  constructor(props: any) {
    super(props);
  }

  onSubmit({ fields, isValid }: FormContext) {
    if (isValid) {
      firebaseApi.submitContactForm(fields);
    }
  }


  render() {
    return <div className="order">
      <h1>Contact Form</h1>
      <FormValidation onSubmit={this.onSubmit} config={formConfig}>
        {({ errors, fields, submitted }) => (
          <>
            <p>
              I am a one man operation and will try to get back to you as soon as possible.
            </p>
            <div className="order_form-input">
              <input name="name" placeholder="Name"/>
              {submitted && errors.name &&
              <span className="order_validation-error">{errors.name}</span>}
            </div>
            <div className="order_form-input">
              <input name="email" placeholder="Email"/>
              {submitted && errors.email &&
              <span className="order_validation-error">{errors.email}</span>}
            </div>
            <div className="order_form-input">
              <textarea name="comments" placeholder="comments" maxLength={4000}/>
            </div>
            <button>Submit</button>
          </>
        )}
      </FormValidation>
    </div>;
  };
}

export default PageContactMe;