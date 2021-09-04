import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CheckOutLeft, CheckOutRight } from '../../component/checkout';
import './checkout.scss';

function Checkout(props) {
  const [moneys, setMoneys] = useState(0);
  const money = (e) => {
    setMoneys(e);
  };
  const data = useSelector((state) => state.cart);
  const history = useHistory();

  useEffect(() => {
    if (data.length === 0) {
      history.push('/');
    }
  }, [data]);
  return (
    <div id='Checkout'>
      <CheckOutLeft moneys={moneys} />
      <CheckOutRight money={money} />
    </div>
  );
}

export default Checkout;
