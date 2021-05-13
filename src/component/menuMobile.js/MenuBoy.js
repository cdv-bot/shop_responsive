import React from 'react';
import './style.scss';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MenuGosto(props) {
  return (
    <>
      <ul>
        <li>
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>BÉ TRAI</span>
        </li>
        <li>Xem tất cả "BÉ TRAI"</li>
        <li>Sandal</li>
        <li>Giày Thể Thao</li>
        <li>Dép</li>
      </ul>
    </>
  );
}

export default MenuGosto;