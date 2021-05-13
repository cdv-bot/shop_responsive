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
          <span>NỮ</span>
        </li>
        <li>Xem tất cả "NỮ"</li>
        <li>Hunter</li>
        <li>Sandal</li>
        <li>Giày Búp Bê</li>
        <li>Giày Thời trang</li>
        <li>Giày Chạy Bộ</li>
        <li>Giày Thể Thao</li>
        <li>Dép</li>
        <li>Túi Xách</li>
      </ul>
    </>
  );
}

export default MenuNam;
