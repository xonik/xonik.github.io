import React, { Component } from 'react';
import { FormContext, FormValidation } from 'calidation';
import firebaseApi from '../../integration/firebase/api';
import './PageMpg200Order.scss';
import { paths } from '../../router/routes';
import history from '../../router/history';
import { Link } from 'react-router-dom';

const mpg200Price = 50;
const enclosurePrice = 10;
const cablePrice = 0.5;

const formConfig = {
  mpg200count: {
    isNumber: 'Number of MPG-200 kits must be a number'
  },
  enclosureCount: {
    isNumber: 'Number of enclosures must be a number'
  },
  cableLength: {
    isRequired: 'Please select cable length'
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
  cableLength: number,
  showTerms: boolean
}

const getCablePrice = (multiplier: number) => {
  return (cablePrice*multiplier).toFixed(2)
};

const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cableLengths = [{
  length: '30 cm',
  price: 'included',
}, {
  length: '40 cm',
  price: `+€${getCablePrice(1)}`,
}, {
  length: '50 cm',
  price: `+€${getCablePrice(2)}`,
}, {
  length: '60 cm',
  price: `+€${getCablePrice(3)}`,
}, {
  length: '70 cm',
  price: `+€${getCablePrice(4)}`,
}, {
  length: '80 cm',
  price: `+€${getCablePrice(5)}`,
}, {
  length: '90 cm',
  price: `+€${getCablePrice(6)}`,
}, {
  length: '100 cm',
  price: `+€${getCablePrice(7)}`,
}];

class PageMpg200Order extends Component<any, State> {

  constructor(props: any) {
    super(props);

    this.state = {
      mpg200Count: 0,
      enclosureCount: 0,
      cableLength: 0,
      showTerms: false,
    };
  }

  getTotal = (mpg200Count: number, enclosureCount: number, cableLength: number) => {
    return mpg200Count * mpg200Price + enclosureCount * enclosurePrice + mpg200Count * cableLength * cablePrice;
  };

  onSubmit = ({ fields, isValid, errors }: FormContext) => {
    if (isValid) {
      const {
        mpg200count,
        enclosureCount,
        cableLength,
        ...passThroughFields
      } = fields;

      const order: any = {
        orderDate: new Date().toISOString(),
        ...passThroughFields,
        items: [],
        total: this.getTotal(mpg200count, enclosureCount, cableLength)
      };
      if (mpg200count > 0) {
        const cable = cableLengths[cableLength];
        order.items.push({ name: 'MPG-200', count: mpg200count, pricePerItem: mpg200Price });
        order.items.push({ name: `Cable - ${cable.length}`, count: mpg200count, pricePerItem: cable.price});
      }
      if (enclosureCount > 0) {
        order.items.push({ name: 'Enclosure', count: enclosureCount, pricePerItem: enclosurePrice });
      }

      console.log('submitting', order);
      firebaseApi.submitOrder(order);
      history.push(paths.mpg200orderReceipt);
    } else {
      console.log("not valid", errors, fields)
    }
  };


  render() {
    const sum = this.getTotal(this.state.mpg200Count, this.state.enclosureCount, this.state.cableLength);

    return <div className="order">
      <h1>MPG-200 Order Form</h1>
      <h1>Orders are not possible at the moment, will be back soon</h1>
      <p>
        If you've arrived here you probably know what the MPG-200 is all about.
        If not, <Link to={paths.mpg200} title="Check out the MPG-200">check it out</Link>
      </p>
      <FormValidation onSubmit={this.onSubmit} config={formConfig}>
        {({ errors, fields, submitted }) => (
          <>
            <p>
              Please fill in the form below and I will send you a Paypal invoice.
            </p>
            <p>
              <b>NB: Do not purchase this (or any other) kit if you're not willing to debug it if it does not work
              on first power up. The kit has been proven to work and the microcontroller is tested before
              it is shipped, but you may unintentionally mess up something during assembly. I WILL try to help
              you but I will not give you a refund if it doesn't work and you're not willing to try to fix it with me.
              </b>
            </p>
            <p>
              Use the <Link to={paths.contactMe}>contact form</Link> if you have any questions or
              want to get in touch with me.
            </p>
            <h2>Items</h2>
            <div className="order_form-input">
              <select name="mpg200count"
                      onChange={e => this.setState({ mpg200Count: parseInt(e.target.value) })}>
                {options.map(index => <option key={index} value={index}>{index}</option>)}
              </select>
              MPG-200 kits, €{mpg200Price} per kit
            </div>
            <div className="order_form-input">
              <select disabled name="enclosureCount"
                      onChange={e => this.setState({ enclosureCount: parseInt(e.target.value) })}>
                {options.map(index => <option key={index} value={index}>{index}</option>)}
              </select>
              Laser cut MDF enclosures, €{enclosurePrice} per enclosure<br/><br/>
                The enclosures are unfortunately sold out at the moment. I'm considering making a new batch in August 2021
            </div>
            <div>
              Cable length
            </div>
            <div className="order_form-input">
              <select name="cableLength"
                      onChange={e => this.setState({ cableLength: parseInt(e.target.value) })}>
                <option key="not-selected" value="not-selected">Select length</option>
                {cableLengths.map(({ length, price }, index) => <option key={index}
                                                                        value={index}>{length}: {price}</option>)}
              </select>
              {submitted && errors.cableLength &&<span className="order_validation-error">{errors.cableLength}</span>}
            </div>
            <div>
              30 cm is included, €{cablePrice} per additional 10 cm. Same lengths for all ordered kits,
              leave me a comment if you want other combinations.
            </div>
            <p>
              <strong>Total: {sum} + shipping</strong>
            </p>
            <p>
              In addition, you will have to pay any customs fees, VAT and other fees applicable in
              your country.
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
            <p>
              <a className="order_toggle-terms" href="" onClick={(event) => {
                event.preventDefault();
                this.setState({ showTerms: !this.state.showTerms });
              }}>{this.state.showTerms ? 'Hide terms & conditions' : 'Show terms & conditions'}</a>
            </p>
            {this.state.showTerms && <div>
              <h2>Terms & conditions</h2>
              <p>
                All sales are final, but please contact me if anything is wrong.
              </p>
              <p>
                The MPG-200 costs EUR {mpg200Price} + postage. Postage is EUR 7 throughout Europe and EUR 8.5 to the rest
                of the world, untracked. Multiple MPG-200 may be shipped together for the same price, though I
                will have to check how many.
              </p>
              <p>
                Some countries may require tracked/registered mail at my discretion unless you chose to accept
                the risk yourself. Registered mail is about EUR 28. I will of course inform you of this before
                accepting your order.
              </p>
              <p>
                While the device has been thoroughly tested, I cannot be held responsible for the
                destruction of anything connected to the device through the Midi or PG-200 ports (i.e. your
                synth or other equipment). It is highly unlikely that anything will happen though.
              </p>
              <p>
                Since this is a DIY kit, stuff may break during assembly if you are not careful.
                Replacement parts are not covered by the purchase sum, and there is no warranty on
                the finished product. This said, tell me if something is wrong and I'll do my best
                to help you out.
              </p>
              <p>
                Since this is a DIY kit that you as the user is assembling yourself, it may not work immediately -
                Parts may have been placed the wrong way around or in the wrong spot etc.
                I will try my best to work with you to figure out what has been done and to get the kit working.
                I will NOT offer a refund unless you spend time with me trying to debug the problem. All controllers
                are tested before shipping and the kit itself has a great track record, no one that has tried building
                it has failed to get it working in the end, so giving up after the first time is not something that
                I accepts as a "device not working" refund demand. I really regret having to say this, but people actually
                do this.
              </p>
            </div>
            }
            <div className="order_form-input">
              <label>
                <input type="checkbox" name="terms"/>Accept terms & conditions
                {submitted && errors.terms &&
                <span className="order_validation-error">{errors.terms}</span>}
              </label>
            </div>
            {/*<button>Submit order</button>*/}
          </>
        )}
      </FormValidation>
    </div>;
  };
}

export default PageMpg200Order;