import { faHeart, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import hot from '../../assets/image/bg_hot.png';
import logo from '../../assets/image/logo.png';
import vi from '../../assets/image/vi.png';
import { deleteProduct } from '../../store/cart';
import { showMenu } from '../../store/menuMobile';
import { formatMoneyPoint } from '../../utils/common';
import iconMenu from './../../assets/image/icon-menu.svg';
import './MenuMobile.scss';
import Search from './Search';

export function MenuMobile({ scrollFix }) {
  const data = useSelector((state) => state.cart);
  const [menuHeight, setMenuHeight] = useState(false);
  const dispatch = useDispatch();
  const Location = useLocation();
  const [action, setAction] = useState(null);
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
      return x + y.price * y.count;
    }, 0);
  };

  const handleDelete = (id, size) => {
    dispatch(deleteProduct({ id, size }));
  };
  useEffect(() => {
    setAction(Location.pathname);
  }, [Location]);
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
              <Link to='/' className='hoverLink'>
                Về BITI'S
              </Link>
            </li>
            <li
              className={classNames({ action_link: action === '/collections/nam' })}>
              <NavLink exact to='/collections/nam'>
                NAM
              </NavLink>
            </li>
            <li
              className={classNames({ action_link: action === '/collections/nu' })}>
              <Link exact to='/collections/nu'>
                NỮ
              </Link>
            </li>
            <li
              className={classNames({
                action_link: action === '/collections/phukien',
              })}>
              <Link exact to='/collections/phukien'>
                GOSTO
              </Link>
            </li>
            <li
              className={classNames({ action_link: action === '/collections/boy' })}>
              <Link exact to='/collections/boy'>
                BÉ TRAI
              </Link>
            </li>
            <li
              className={classNames({
                action_link: action === '/collections/girl',
              })}>
              <Link exact to='/collections/girl'>
                BÉ NỮ
              </Link>
            </li>
            <li>
              <Link exact to='/'>
                TUYỂN DỤNG
              </Link>
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
                                pathname: `/product/${item.maSp}`,
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
                            <span>{formatMoneyPoint(item.price)} đ</span>
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
                  <button>
                    <Link style={{ color: 'white' }} to='/checkout'>
                      Thanh toán
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='cart'>
            <span className='numberBuy'>{countCart()}</span>
          </div>
        </span>

        <Search />
      </div>
    </div>
  );
}
