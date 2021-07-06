import { faBell, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import './buttonScroll.scss';

function ButtonScroll(props) {
  const [scrollY, setScrollY] = useState();

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 10) {
        setScrollY(false);
      } else {
        setScrollY(true);
      }
    };
  }, []);

  const handlerScroll = () => {
    console.log('Á');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className='onScroll'>
      <div className={classNames('fix_scroll icon_noti', { hide_scroll: scrollY })}>
        <FontAwesomeIcon icon={faBell} className='icon_scroll icon_bell' />
      </div>
      <div
        className={classNames('fix_scroll icon_top', { hide_scroll: scrollY })}
        onClick={handlerScroll}>
        <FontAwesomeIcon icon={faChevronUp} className='icon_scroll icon_chevr' />
      </div>
    </div>
  );
}

export default ButtonScroll;
