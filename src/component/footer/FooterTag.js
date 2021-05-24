import React from 'react';
import './footerTag.scss';

import slider from '../../assets/image/footer_banner.jpg';
function FooterTag(props) {
  return (
    <div id='FooterTag'>
      <p className='hashTag'>
        HASHTAG <a href='/#'>BITIS</a> ĐỂ CÓ CƠ HỘi XUẤT HIỆN TRÊN WEBSITE CỦA CHÚNG
        TÔI
      </p>
      <div className='footer_list'>
        <span>
          <img src={slider} alt='slider' />
        </span>
        <span>
          <img src={slider} alt='slider' />
        </span>
        <span>
          <img src={slider} alt='slider' />
        </span>
        <span>
          <img src={slider} alt='slider' />
        </span>
        <span>
          <img src={slider} alt='slider' />
        </span>
        <span>
          <img src={slider} alt='slider' />
        </span>
        <span>
          <img src={slider} alt='slider' />
        </span>
        <span>
          <img src={slider} alt='slider' />
        </span>
      </div>
    </div>
  );
}

export default FooterTag;
