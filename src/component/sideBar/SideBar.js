import { Link } from 'react-router-dom';
import vn from '../../assets/image/vi.png';
import './sideBar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { infoUser } from '../../store/user';

function SideBar(props) {
  const dispatch = useDispatch();
  const dataInfo = useSelector((state) => state.user);
  const handlerLogout = () => {
    localStorage.removeItem('token');
    dispatch(infoUser(null));
  };

  return (
    <div className='SideBar'>
      <ul>
        <li>Hotline: 0966 158 666 (8h - 12h, 13h30 - 17h)</li>
        <li>Tìm cửa hàng</li>
        <li>Liên hệ hợp tác</li>
        <li>Mua Hàng Tại Amazon</li>
        <li>
          {dataInfo?.role === 'admin' ? (
            <Link style={{ color: 'white' }} to='/admin'>
              Kiểm tra tổng đơn
            </Link>
          ) : (
            <Link style={{ color: 'white' }} to='/order'>
              Kiểm tra đơn hàng
            </Link>
          )}
        </li>
        {dataInfo ? (
          <li>
            <span className='linkSide'>
              Chào mừng {dataInfo.name && dataInfo?.name.toUpperCase()}
            </span>
            <span className='linkSide' onClick={handlerLogout}>
              Đăng xuất
            </span>
          </li>
        ) : (
          <li>
            <Link to='/login' className='linkSide'>
              Đăng nhập
            </Link>
            <Link to='/logup' className='linkSide'>
              Đăng ký
            </Link>
          </li>
        )}

        <li>
          <img src={vn} alt='logo' />
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
