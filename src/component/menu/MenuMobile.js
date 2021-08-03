import {
  faHeart,
  faSearch,
  faShoppingCart,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import hot from '../../assets/image/bg_hot.png';
import logo from '../../assets/image/logo.png';
import vi from '../../assets/image/vi.png';
import { deleteProduct } from '../../store/cart';
import { showMenu } from '../../store/menuMobile';
import { formatMoney, formatMoneyPoint } from '../../utils/common';
import iconMenu from './../../assets/image/icon-menu.svg';
import './MenuMobile.scss';

function MenuMobile({ scrollFix }) {
  const data = useSelector((state) => state.cart);
  const [menuHeight, setMenuHeight] = useState(false);
  const dispatch = useDispatch();
  const menuData = useSelector((state) => state.menuBar);
  const handleMenu = () => {
    let action = showMenu();
    dispatch(action);
  };
  const countCart = () => {
    return data.reduce((x, y) => {
      return x + y.count;
    }, 0);
  };
  const totalMoneys = () => {
    return data.reduce((x, y) => {
      return x + formatMoney(y.price) * y.count;
    }, 0);
  };

  const handleDelete = (id, size) => {
    dispatch(deleteProduct({ id, size }));
  };

  return (
    <div
      className={classNames('Menu', { scroll_fixed: scrollFix })}
      style={menuHeight ? { height: '120px' } : null}>
      <div
        className='Menu__top'
        style={menuHeight ? { gridTemplateRows: ' 60px' } : null}>
        <div className='Menu__top-hamburger'>
          {menuData ? (
            <FontAwesomeIcon
              icon={faTimes}
              style={{ fontSize: '2.5rem', marginLeft: '10px' }}
            />
          ) : (
            <img
              src={iconMenu}
              alt='iconMenu'
              className='Menu__top-icon'
              onClick={handleMenu}
            />
          )}
        </div>
        <img src={logo} alt='logo' className='Menu__top-logo' />
        <div className='Menu__top-tablet'>
          <ul>
            <li>
              <a herf='#' className='hoverLink'>
                Về BITI'S
              </a>
            </li>
            <li>
              <a herf='#'>NAM</a>
            </li>
            <li>
              <a herf='#'>NỮ</a>
            </li>
            <li>
              <a herf='#'>GOSTO</a>
            </li>
            <li>
              <a herf='#'>BÉ TRAI</a>
            </li>
            <li>
              <a herf='#'>SALES</a>
            </li>
            <li>
              <a herf='#'>TUYỂN DỤNG</a>
              <img src={hot} alt='hot' />
            </li>
          </ul>
        </div>
        <span className='Menu__top-cart'>
          <img src={vi} alt='vn' className='icon-joint vn' />
          <FontAwesomeIcon icon={faHeart} className='icon-joint' />
          <div className='hoverCart'>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className='icon-joint'
              style={{ fontSize: '2.4rem' }}
            />
            <div className='cart_list'>
              <ul>
                {data &&
                  data.map((item, index) => {
                    return (
                      <li key={index}>
                        <img src={item.img} alt={item.title} />
                        <div className='cart_title'>
                          <p>
                            <Link
                              to={{
                                pathname: `/product/${item._id}`,
                              }}
                              className='link_style'>
                              {item.title}
                            </Link>
                          </p>
                          <p>
                            {item?.numberSize[0]}, {item?.numSize}
                          </p>
                          <div className='size_price'>
                            <span> {item.count} </span>
                            <span>{item.price}</span>
                          </div>
                        </div>
                        <FontAwesomeIcon
                          icon={faTimes}
                          className='icon_product_delete'
                          onClick={() => handleDelete(item.id, item.numSize)}
                        />
                      </li>
                    );
                  })}
              </ul>
              <div className='total_money'>
                <div className='money'>
                  <span>Tổng tiền:</span>
                  <span>{formatMoneyPoint(totalMoneys()) || 0} đ</span>
                </div>
                <div className='bt_cart'>
                  <button>
                    <Link style={{ color: 'white' }} to='/cart'>
                      Xem giỏ hàng
                    </Link>
                  </button>
                  <button>Thanh toán</button>
                </div>
              </div>
            </div>
          </div>
          <div className='cart'>
            <span className='numberBuy'>{countCart()}</span>
          </div>
        </span>
        <div className='Menu__top-search'>
          <input placeholder='Nhập thông tin cần tìm kiếm...' />
          <span>
            <FontAwesomeIcon icon={faSearch} className='faSearch' />
          </span>
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;
