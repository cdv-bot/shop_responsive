import React from 'react';
import dangky from '../../assets/image/dadangky.png';
import './footer_bottom.scss';
export function FooterBottom(props) {
  return (
    <div id='Footer_bottom'>
      <div className='Footer_bottom-list'>
        <ul>
          <li>Điều khoán</li>
          <li>Chính Sách Bảo Mật</li>
          <li>Hứng dẫn sử dụng</li>
        </ul>
        <div className='hasDK'>
          <img src={dangky} alt='dangki' />
        </div>
        <p className='text_day'>
          Giấy CNĐKDN: 0301340497 được cấp ngày 20/01/1992, được sửa đổi lần thứ 20
          ngày 28/12/2015 bởi Sở Kế hoạch và Đầu tư TPHCM
        </p>
      </div>
      <p className='Footer_bottom-copy'>
        Copyright Bitis.com.vn. Powered by Haravan Enterprise.
      </p>
    </div>
  );
}
