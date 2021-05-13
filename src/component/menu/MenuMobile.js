import React from 'react';

import './MenuMobile.scss';
import iconMenu from './../../assets/image/icon-menu.svg';
import logo from '../../assets/image/logo.png';
import vi from '../../assets/image/vi.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faSearch,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

function MenuMobile(props) {
  return (
    <div className='Menu'>
      <div className='Menu__top'>
        <img src={iconMenu} alt='iconMenu' className='Menu__top-icon' />
        <img src={logo} alt='logo' className='Menu__top-logo' />
        <span className='Menu__top-cart'>
          <img src={vi} alt='vn' className='icon-joint' />
          <FontAwesomeIcon icon={faHeart} className='icon-joint' />
          <FontAwesomeIcon
            icon={faShoppingCart}
            className='icon-joint'
            style={{ fontSize: '2.4rem' }}
          />
          <span className='numberBuy'>12</span>
        </span>
      </div>
      <div className='Menu__search'>
        <input placeholder='Nhập thông tin cần tìm kiếm...' />
        <span>
          <FontAwesomeIcon icon={faSearch} className='faSearch' />
        </span>
      </div>
    </div>
  );
}

export default MenuMobile;
