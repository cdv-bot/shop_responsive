import React from 'react';
import './style.scss';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MenuNam(props) {
  return (
    <>
      <ul>
        <li>
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>NAM</span>
        </li>
        <li>Xem tất cả "NAM"</li>
        <li>Hunter</li>
        <li>Sandal</li>
        <li>Giày Đá Banh</li>
        <li>Giày Chạy Bộ</li>
        <li>Giày Tây</li>
        <li>Dép</li>
      </ul>
    </>
  );
}

export default MenuNam;
