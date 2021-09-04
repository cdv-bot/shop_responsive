import { useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { MenuBoy, MenuNam, MenuNu, MenuGosto, MenuGirl } from '../menuMobile';
import { MenuList } from '../menu';
import logo from '../../assets/image/logo.png';
import logo2 from '../../assets/image/Logo2.png';

import './MenuBar.scss';

export function MenuBar() {
  const [selectItem, setSelectItem] = useState(null);
  const data = useSelector((state) => state.menuBar);

  const handlerSelecter = (data) => {
    setSelectItem(data);
  };
  const handlerChangeRemote = () => {
    setSelectItem(null);
  };
  return (
    <div className={classNames('MenuBar tranform_left', { tranform: data })}>
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
        <div className={classNames('positonHome', { tranform_left: selectItem })}>
          <MenuList handlerSelecter={handlerSelecter} />
        </div>
        <div
          className={classNames('positon', {
            tranform: selectItem === 'NAM',
          })}>
          <MenuNam handlerChangeRemote={handlerChangeRemote} />
        </div>
        <div
          className={classNames('positon', {
            tranform: selectItem === 'NU',
          })}>
          <MenuNu handlerChangeRemote={handlerChangeRemote} />
        </div>
        <div
          className={classNames('positon', {
            tranform: selectItem === 'BOY',
          })}>
          <MenuBoy handlerChangeRemote={handlerChangeRemote} />
        </div>
        <div
          className={classNames('positon', {
            tranform: selectItem === 'GOSTO',
          })}>
          <MenuGosto handlerChangeRemote={handlerChangeRemote} />
        </div>
        <div
          className={classNames('positon', {
            tranform: selectItem === 'GIRL',
          })}>
          <MenuGirl handlerChangeRemote={handlerChangeRemote} />
        </div>
      </div>
    </div>
  );
}
