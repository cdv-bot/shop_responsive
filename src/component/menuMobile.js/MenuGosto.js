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
          <span>GOSTO</span>
        </li>
        <li>Xem tất cả "GOSTO"</li>
        <li>Giày cao gót</li>
        <li>Sandal</li>
        <li>Dép</li>
        <li>Túi xách - Ví</li>
      </ul>
    </>
  );
}

export default MenuGosto;
