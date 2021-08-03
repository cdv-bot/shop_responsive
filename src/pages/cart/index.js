import { CartList, CartNoProduct } from '../../component/cart';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';
import './cart.scss';
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';

function Cart(props) {
  const dataCart = useSelector((state) => state.cart);
  return (
    <div id='cart'>
      <div className='cart_link'>
        <div className='cart_link-top'>
          <FontAwesomeIcon icon={faHome} className='icon_home' />
          <Link to='/' className='icon_home link_back'>
            Trang chủ
          </Link>
          <FontAwesomeIcon icon={faChevronRight} className='icon_home' />
          <Link className='icon_home link_back' to='/cart'>
            Giỏ hàng của bạn (7)
          </Link>
        </div>
      </div>
      {dataCart.length === 0 ? <CartNoProduct /> : <CartList />}
    </div>
  );
}

export default Cart;
