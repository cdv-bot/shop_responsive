import React from 'react';
import { SliderItem } from '../../component/ProductItem';
import imgs from '../../assets/image/slider_new.jpg';
import './InfoItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';

function InfoItem(props) {
  console.log(props.query);
  return (
    <div className='Info'>
      <div className='Info_img'>
        <div className='slider_img'>
          <div className="slider">
            <SliderItem />
          </div>
          <div className='innerImg'>
            <InnerImageZoom
              src='https://product.hstatic.net/1000230642/product/dsmh06100kem-1_cb2338cb769648738a167141e82c1e89_1024x1024.jpg'
              zoomSrc='https://product.hstatic.net/1000230642/product/dsmh06100kem-1_cb2338cb769648738a167141e82c1e89_1024x1024.jpg'
            />
          </div>
        </div>
        <div className='Info_comment'>
          <div className='text'>
            <span>Chưa có mô tả cho sản phẩm này</span>
          </div>
          <div className='comment_text'>
            <p>Đánh giá sản phẩm</p>
            <div className='icon_star'>
              <FontAwesomeIcon icon={faStar} className='icon_item' />
              <FontAwesomeIcon icon={faStar} className='icon_item' />
              <FontAwesomeIcon icon={faStar} className='icon_item' />
              <FontAwesomeIcon icon={faStar} className='icon_item' />
              <FontAwesomeIcon icon={faStar} className='icon_item' />
            </div>
          </div>
          <div className='write_comment'>
            <button>Viết đánh giá</button>
          </div>
        </div>
      </div>
      <div className='content'>
        <p className='title'>
          Giày Thể Thao Nam Biti's Hunter Nameless Edition x Công Trí - No.2
          DSMH06100KEM
        </p>
        <p className='ma_sp'>
          <span>Mã sản phẩm:</span> <span>DSG13666TRG28</span>
        </p>
        <div className='moeny_span'>
          <span>370.000 đ</span>
          <span>*Đã bao gồm VAT</span>
        </div>
        <div className='content_color'>
          <span>Màu sắc:</span>
          <span className='img'>
            <img src={imgs} alt='img' />
            <span>Trắng</span>
          </span>
        </div>
        <div className='content_size'>
          <span>Kích thước:</span>
          <div className='list_size'>
            <span>28</span>
            <span>28</span>
            <span>28</span>
            <span>28</span>
          </div>
        </div>
        <div className='content_total'>
          <span>Còn sản phẩm:</span>
          <span>
            <b>94</b> sản phẩm
          </span>
        </div>
        <div className='content_link'>
          <button>MUA NGAY</button>
          <button>🖤 Thêm vào yêu thích</button>
        </div>
        <div className='content_contact'>
          <span>Tư vấn: 0382686620</span>
          <span>
            <img
              src='//theme.hstatic.net/1000230642/1000679613/14/zalopay.png?v=1148'
              alt='zalo'
            />
            <img
              src='//theme.hstatic.net/1000230642/1000679613/14/visa.png?v=1148'
              alt='visa'
            />
            <img
              src='//theme.hstatic.net/1000230642/1000679613/14/mastercard.png?v=1148'
              alt='master'
            />
            <img
              src='//theme.hstatic.net/1000230642/1000679613/14/cod.png?v=1148'
              alt='money'
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default InfoItem;
