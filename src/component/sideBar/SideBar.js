import React from 'react';
import vn from '../../assets/image/vi.png';
import './sideBar.scss';
function SideBar(props) {
  return (
    <div className='SideBar'>
      <ul>
        <li>Hotline: 0966 158 666 (8h - 12h, 13h30 - 17h)</li>
        <li>Tìm cửa hàng</li>
        <li>Liên hệ hợp tác</li>
        <li>Mua Hàng Tại Amazon</li>
        <li>Kiểm tra đơn hàng </li>
        <li>
          <a href='/#' className='linkSide'>
            Đăng nhập
          </a>
          <a href='/#' className='linkSide'>
            Đăng ký
          </a>
        </li>
        <li>
          <img src={vn} />
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
