import React, { Component } from 'react';
import { FormContext, FormValidation } from 'calidation';
import firebaseApi from '../integration/firebase/api';
import history from '../router/history';
import { paths } from '../router/routes';

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

  onSubmit({ fields, isValid }: FormContext) {
    if (isValid) {
      firebaseApi.submitContactForm({
        ...fields,
        date: new Date().toISOString(),
      });
      history.push(paths.contactMeReceipt);
    }
  }


  render() {
    return <div className="order">
      <h1>Contact Form</h1>
      <FormValidation onSubmit={this.onSubmit} config={formConfig}>
        {({ errors, fields, submitted }) => (
          <>
            <p>
              Xonik Devices is a one man operation. If you want to contact me, ask me any question
              or just chat about synths, fill in the form and I will try to get back to you as soon
              as possible.
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