import React from 'react';

import './MenuBar.scss';
import logo from '../../assets/image/logo.png';
import logo2 from '../../assets/image/Logo2.png';

import MenuList from './MenuList';
import MenuNam from '../menuMobile.js/MenuNam';
import MenuNu from '../menuMobile.js/MenuNu';
function MenuBar(props) {
  return (
    <div className='MenuBar'>
      <img src={logo} alt='logo' />
      <div className='MenuBar__login'>
        <ul>
          <li>
            <img src={logo2} alt='logo' />
          </li>
          <li>ĐĂNG NHẬP</li>
          <li>ĐĂNG KÝ</li>
        </ul>
      </div>
      <div className='MenuBar__list'>
        {/* <MenuList /> */}
        {/* <MenuNam /> */}
        <MenuNu />
      </div>
    </div>
  );
}

export default MenuBar;
