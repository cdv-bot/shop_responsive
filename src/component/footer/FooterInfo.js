import { useState } from 'react';
import classNames from 'classnames';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/image/logo.png';
import './footerInfo.scss';

export function FooterInfo(props) {
  const [hasInfo, setHasInfo] = useState({
    help: false,
    infomation: false,
    backHome: false,
  });
  const handlerChageInfo = (data) => {
    setHasInfo({
      ...hasInfo,
      [data]: !hasInfo[data],
    });
  };
  return (
    <div id='Footer_info'>
      <div className='infomation_border'>
        <div className='itemInfo'>
          <div className='title' onClick={() => handlerChageInfo('help')}>
            <span>Trợ Giúp</span>
            {hasInfo?.help ? (
              <FontAwesomeIcon icon={faMinusCircle} />
            ) : (
              <FontAwesomeIcon icon={faPlusCircle} />
            )}
          </div>
          <ul className={classNames({ showList: hasInfo?.help })}>
            <li>Trạng thái đơn hàng</li>
            <li>Hình thức giao hàng </li>
            <li>Hình thức thanh toán</li>
            <li>Chính sách đổi trả</li>
            <li>Chính sách bảo hành</li>
            <li>Chính sách khách hàng thân thiết</li>
          </ul>
        </div>
        <div className='itemInfo'>
          <div className='title' onClick={() => handlerChageInfo('infomation')}>
            <span>Thông tin</span>
            {hasInfo?.infomation ? (
              <FontAwesomeIcon icon={faMinusCircle} />
            ) : (
              <FontAwesomeIcon icon={faPlusCircle} />
            )}
          </div>
          <ul className={classNames({ showList: hasInfo?.infomation })}>
            <li>Tuyển dụng</li>
            <li>Hệ thống cửa hàng</li>
            <li>Liên hệ hợp tác</li>
            <li>Q&A</li>
          </ul>
        </div>
        <div className='itemInfo'>
          <div className='title' onClick={() => handlerChageInfo('backHome')}>
            <span>Về Bitis</span>
            {hasInfo?.backHome ? (
              <FontAwesomeIcon icon={faMinusCircle} />
            ) : (
              <FontAwesomeIcon icon={faPlusCircle} />
            )}
          </div>
          <ul className={classNames({ showList: hasInfo?.backHome })}>
            <li>Về Bitis</li>
            <li>Câu chuyện Bitis</li>
            <li>Bước tiến phát triển</li>
            <li>Hoạt động</li>
            <li>Liên hệ</li>
          </ul>
        </div>
        <div className='infomation_text'>
          <img src={logo} alt='logo' className='img_infomation' />
          <p>CÔNG TY TNHH SẢN XUẤT HÀNG TIÊU DÙNG BÌNH TIẾN</p>
          <p>
            <b>Địa chỉ:</b> 22 Lý Chiếu Hoàng, Phường 10, Quận 6, TP HCM
          </p>
          <p>
            <b>Sdt:</b> 0382686620
          </p>
          <p>
            <b>Email:</b>Kutelieulinh@gmail.com
          </p>
          <p>
            <b>Hotline:</b> 19008198
          </p>
          <p>
            Thời gian tư vấn: Từ 7h30 đến 12h15 đến 21h30 các ngày trong tuần(Trừ
            ngày Lễ, Tết)
          </p>
        </div>
      </div>
    </div>
  );
}
