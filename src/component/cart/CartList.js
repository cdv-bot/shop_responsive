import { deleteProduct, editProduct } from '../../store/cart';
import { formatMoney, formatMoneyPoint } from '../../utils/common';
import { useDispatch, useSelector } from 'react-redux';
import {
  faLongArrowAltLeft,
  faSortDown,
  faSortUp,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export function CartList(props) {
  const dataCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleCount = (count, index) => {
    if (count > 0) {
      dispatch(
        editProduct({
          count,
          index,
        })
      );
    }
  };
  const handlDelete = (id, size, title) => {
    dispatch(deleteProduct({ id, size }));
  };

  const totalMoney = () => {
    return dataCart.reduce((x, y) => {
      return x + y?.price * y?.count;
    }, 0);
  };
  return (
    <>
      <div className='cart_list'>
        <div className='cart_item'>
          <p>{dataCart.length > 0 ? 'GIỎ HÀNG CỦA BẢN' : 'CHƯA CÓ SẢN PHẨM NÀO'}</p>

          <div className='cart_item-list'>
            <span></span>
            <span>Tên sản phẩm</span>
            <span>Số lượng</span>
            <span>Giá</span>
            <span>Thành tiền</span>
          </div>
          {dataCart &&
            dataCart.map((item, index) => {
              return (
                <ul className='cart_item-ul' key={index}>
                  <li>
                    <img src={item?.img} alt={item?.img} />
                  </li>
                  <li>
                    <p>{item?.title}</p>
                    <div className='list_color'>
                      <span className='color'>Màu : {item?.numberSize[0]}</span>
                      <span className='color'>
                        Size: <span className='style_size'>{item?.numSize}</span>
                      </span>
                      <span
                        className='color style_delete'
                        onClick={() =>
                          handlDelete(item?.id, item?.numSize, item?.title)
                        }>
                        <FontAwesomeIcon icon={faTrash} className='style_delete' />{' '}
                        Xóa
                      </span>
                    </div>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className='icon_count'
                      icon={faSortUp}
                      onClick={() => handleCount(item?.count + 1, index)}
                    />
                    <span>{item?.count}</span>
                    <FontAwesomeIcon
                      className='icon_count'
                      icon={faSortDown}
                      onClick={() => handleCount(item?.count - 1, index)}
                    />
                  </li>
                  <li>
                    <span>{formatMoneyPoint(item?.price)} đ</span>
                  </li>
                  <li>
                    <span>{formatMoneyPoint(item?.price * item?.count)} ₫</span>
                  </li>
                </ul>
              );
            })}
        </div>
      </div>
      <div className='cart_pay'>
        <div className='cart_pay-item'>
          <FontAwesomeIcon icon={faLongArrowAltLeft} />
          <span>Tiếp tục mua hàng</span>
        </div>
        <div className='cart_pay-bt'>
          <p className='tt'>
            Tạm tính: <span>{`${formatMoneyPoint(totalMoney()) || 0} ₫`}</span>
          </p>
          <div className='bt'>
            <button>
              <Link to='/checkout' style={{ color: 'white' }}>
                Thanh toán ngay
                <br />
                (áp dụng cho Việt Nam)
              </Link>
            </button>
            {/* <button>
              ĐẶT HÀNG QUỐC TẾ <br />
              (cho các quốc gia khác)
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
