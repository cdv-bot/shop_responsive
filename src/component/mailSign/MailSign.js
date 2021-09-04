import './mailSign.scss';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MailSign(props) {
  return (
    <div id='MailSign'>
      <p>ĐĂNG KÝ EMAIL ĐỂ NHẬN THÊM NHIỀU THÔNG TIN MỚI TỪ BITI’S</p>
      <div className='text_mail'>
        <input
          type='text'
          className='input_search'
          placeholder='Nhập E-mail của bạn...'
        />
        <button className='bt_sign'>
          <FontAwesomeIcon icon={faLocationArrow} /> ĐĂNG KÝ
        </button>
      </div>
    </div>
  );
}

export default MailSign;
