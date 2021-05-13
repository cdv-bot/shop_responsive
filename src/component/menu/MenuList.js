import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
function MenuList(props) {
  return (
    <>
      <ul>
        <li>Về BITI'S</li>
        <li>
          <span>NAM</span>
          <FontAwesomeIcon icon={faAngleDoubleRight} className='icon' />
        </li>
        <li>
          <span>NỮ</span>
          <FontAwesomeIcon icon={faAngleDoubleRight} className='icon' />
        </li>
        <li>
          <span>GOSTO</span>
          <FontAwesomeIcon icon={faAngleDoubleRight} className='icon' />
        </li>
        <li>
          <span>BÉ TRAI</span>
          <FontAwesomeIcon icon={faAngleDoubleRight} className='icon' />
        </li>
        <li>
          <span>BÉ GÁI</span>
          <FontAwesomeIcon icon={faAngleDoubleRight} className='icon' />
        </li>
        <li>SALE</li>
        <li>TUYỂN DỤNG</li>
      </ul>
    </>
  );
}

export default MenuList;
