import React from 'react';
import { CheckOutLeft, CheckOutRight } from '../../component/checkout';
import './checkout.scss';

function Checkout(props) {
  return (
    <div id='Checkout'>
      <CheckOutLeft />
      <CheckOutRight />
    </div>
  );
}

export default Checkout;
