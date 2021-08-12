import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import vn from '../../assets/image/vi.png';
import './sideBar.scss';
import jwtDecode from 'jwt-decode';
function SideBar(props) {
  const [dataList, setDataList] = useState(null);
  const token = window.localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      const data = jwtDecode(token);
      setDataList(data.userList?.name);
      console.log(data);
    }
  }, [token]);
  const handlerLogout = () => {
    localStorage.removeItem('token');
    setDataList(null);
  };
  return (
    <div className='SideBar'>
      <ul>
        <li>Hotline: 0966 158 666 (8h - 12h, 13h30 - 17h)</li>
        <li>Tìm cửa hàng</li>
        <li>Liên hệ hợp tác</li>
        <li>Mua Hàng Tại Amazon</li>
        <li>Kiểm tra đơn hàng </li>
        {dataList ? (
          <li>
            <span className='linkSide'>Chào mừng {dataList.toUpperCase()}</span>
            <span className='linkSide' onClick={handlerLogout}>
              Đăng xuất
            </span>
          </li>
        ) : (
          <li>
            <Link to='/login' className='linkSide'>
              Đăng nhập
            </Link>
            <Link to='/#' className='linkSide'>
              Đăng ký
            </Link>
          </li>
        )}

        <li>
          <img src={vn} />
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
