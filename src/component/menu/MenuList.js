import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './MenuList.scss';
export function MenuList({ handlerSelecter }) {
  return (
    <>
      <ul id='ul_menuList'>
        <li>Về BITI'S</li>
        <li
          style={{ color: '#aa9e96', fontWeight: 'inherit' }}
          onClick={() => handlerSelecter('NAM')}>
          <span>NAM</span>
          <FontAwesomeIcon icon={faAngleDoubleRight} className='icon' />
        </li>
        <li onClick={() => handlerSelecter('NU')}>
          <span>NỮ</span>
          <FontAwesomeIcon icon={faAngleDoubleRight} className='icon' />
        </li>
        <li onClick={() => handlerSelecter('GOSTO')}>
          <span>GOSTO</span>
          <FontAwesomeIcon icon={faAngleDoubleRight} className='icon' />
        </li>
        <li onClick={() => handlerSelecter('BOY')}>
          <span>BÉ TRAI</span>
          <FontAwesomeIcon icon={faAngleDoubleRight} className='icon' />
        </li>
        <li onClick={() => handlerSelecter('GIRL')}>
          <span>BÉ GÁI</span>
          <FontAwesomeIcon icon={faAngleDoubleRight} className='icon' />
        </li>
        <li>SALE</li>
        <li>TUYỂN DỤNG</li>
      </ul>
    </>
  );
}
