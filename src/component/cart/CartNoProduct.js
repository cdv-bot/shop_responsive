import React from 'react';
import { Link } from 'react-router-dom';
import icon_empty from '../../assets/image/icon_empty_cart.png';
import './CartNoProduct.scss';
export function CartNoProduct(props) {
  return (
    <div id='empty'>
      <p className='gh'>GIỞ HÀNG CỦA BẠN</p>
      <img src={icon_empty} alt='empty' />
      <p>Không có sản phẩm nào trong giỏ hàng của bạn.</p>
      <div className='empty_bt'>
        <span>Tra cứu tình trạng đơn hàng</span>
        <button>
          <Link to='/' className='link'>
            Tiếp tục mua sắm
          </Link>
        </button>
      </div>
    </div>
  );
}
