import React from 'react';
import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';

//import App from '././App'
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
//import './PaymentForm.css'


function Packages() {
  const stripe = Stripe('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');
  Stripe.setPublishableKey('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');
  Stripe.card.createToken({
    number: $('.card-number').val(),
    cvc: $('.card-cvc').val(),
    exp_month: $('.card-expiry-month').val(),
    exp_year: $('.card-expiry-year').val(),
    address_zip: $('.address_zip').val()
  }, stripeResponseHandler);


  const checkoutButton = document.querySelector('#checkout-button');
  
  checkoutButton.addEventListener('click', function () {
    stripe.redirectToCheckout({
      lineItems: [{
        // Define the product and price in the Dashboard first, and use the price
        // ID in your client-side code.
        price: '{PRICE_ID}',
        quantity: 1
      }],
      mode: 'payment',
      successUrl: 'https://www.example.com/success',
      cancelUrl: 'https://www.example.com/cancel'
    });
  });
  return (
    <div>
      {checkoutButton}
    </div>
  )
}

export default Packages




// const stripePromise = loadStripe('pk_test_51IoCj3KngNA5hdnVbCIm6rkP9Jlq4WZKqBopNdhi39UxjanE3PQqQ4jeV8aCl8g9j9NZNXYuFhZAWDylmfjyLTwZ006BaL84aI');

// function Packages() {
//   return (
//     <button role="link">
//       CHECKOUT
//     </button>
    
//   );
// }

// export default Packages;
//  ReactDOM.render(<Packages />, document.getElementById('root'));