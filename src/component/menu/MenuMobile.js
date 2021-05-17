import {
  faHeart,
  faSearch,
  faShoppingCart,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/image/logo.png';
import vi from '../../assets/image/vi.png';
import { showMenu } from '../../store/menuMobile';
import iconMenu from './../../assets/image/icon-menu.svg';
import './MenuMobile.scss';

function MenuMobile(props) {
  const [scrollFix, setScrollFix] = useState(false);
  const [menuHeight, setMenuHeight] = useState(false);

  const dispatch = useDispatch();
  const menuData = useSelector((state) => state.menuBar);
  const handleMenu = () => {
    let action = showMenu();
    dispatch(action);
  };

  useEffect(() => {
    let viewport = window.innerWidth;
    window.onscroll = () => {
      if (window.pageYOffset > 130) {
        setScrollFix(true);
        if (viewport === 1024) {
          setMenuHeight(true);
        }
      }
      if (window.pageYOffset < 20) {
        setScrollFix(false);
        if (viewport === 1024) {
          setMenuHeight(false);
        }
      }
    };
  }, []);

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
                Về BIT'S
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
            </li>
          </ul>
        </div>
        <span className='Menu__top-cart'>
          <img src={vi} alt='vn' className='icon-joint vn' />
          <FontAwesomeIcon icon={faHeart} className='icon-joint' />
          <FontAwesomeIcon
            icon={faShoppingCart}
            className='icon-joint'
            style={{ fontSize: '2.4rem' }}
          />
          <span className='numberBuy'>12</span>
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
