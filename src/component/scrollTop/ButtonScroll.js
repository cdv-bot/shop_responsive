import { faBell, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import './buttonScroll.scss';

function ButtonScroll({ scrollFix }) {
  const handlerScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className='onScroll'>
      <div
        className={classNames('fix_scroll icon_noti', { hide_scroll: !scrollFix })}>
        <FontAwesomeIcon icon={faBell} className='icon_scroll icon_bell' />
      </div>
      <div
        className={classNames('fix_scroll icon_top', { hide_scroll: !scrollFix })}
        onClick={handlerScroll}>
        <FontAwesomeIcon icon={faChevronUp} className='icon_scroll icon_chevr' />
      </div>
    </div>
  );
}

export default ButtonScroll;
