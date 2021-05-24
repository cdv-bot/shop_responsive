import React, { useRef } from 'react';
import Slider from 'react-slick';
import slider_new from '../../assets/image/slider_new.jpg';
import slider_new1 from '../../assets/image/slider1.jpg';
import twitter from '../../assets/image/twitter.svg';
import facebook from '../../assets/image/facebook.svg';
import pinterest from '../../assets/image/pinterest.svg';
import googlePlus from '../../assets/image/googlePlus.svg';
import './new.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

function New(props) {
  const slider = useRef();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id='New'>
      <p className='New_text'>TIN TỨC BITI'S</p>
      <div className='new_list'>
        <div className='div_slider'>
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={previous}
            className='postion_icon'
          />
          <Slider {...settings} ref={slider}>
            <img src={slider_new} alt='slider' className='img_width' />
            <img src={slider_new1} alt='slider' className='img_width' />
            <img src={slider_new} alt='slider' className='img_width' />
            <img src={slider_new} alt='slider' className='img_width' />
          </Slider>
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={next}
            className='postion_icon'
          />
        </div>
        <div className='new_sale'>
          <div className='item_new'>
            <div className='hover'>
              <img src={slider_new} alt='new1' className='img_item_new' />
              <div className='hover_background'>
                <span>
                  <FontAwesomeIcon icon={faPlusCircle} className='icon_logo' />
                </span>
                <p className='share_text'>Share now</p>
                <span>
                  <img src={twitter} alt='twitter' className='logo_inter' />
                  <img src={facebook} alt='facebook' className='logo_inter' />
                  <img src={pinterest} alt='pinterest' className='logo_inter' />
                  <img src={googlePlus} alt='googlePlus' className='logo_inter' />
                </span>
              </div>
            </div>
            <div className='text_new'>
              <p>SĂN BITI’S – TRÚNG VINFAST 10/12/2020 - 10/01/2021</p>
              <p>
                Tên chương trình khuyến mãi:"SĂN BITI’S – TRÚNG VINFAST” Hàng hoá,
                dịch vụ khuyến mãi: Tất cả sản phẩm giày, dép mang thương hiệu Biti’s
                (Danh mục đính kèm) Thời gian khuyến mãi: Từ ngày 10/12/2020...
              </p>
            </div>
          </div>
          <div className='item_new'>
            <img src={slider_new} alt='new1' className='img_item_new' />
            <div className='text_new'>
              <p>SĂN BITI’S – TRÚNG VINFAST 10/12/2020 - 10/01/2021</p>
              <p>
                Tên chương trình khuyến mãi:"SĂN BITI’S – TRÚNG VINFAST” Hàng hoá,
                dịch vụ khuyến mãi: Tất cả sản phẩm giày, dép mang thương hiệu Biti’s
                (Danh mục đính kèm) Thời gian khuyến mãi: Từ ngày 10/12/2020...
              </p>
            </div>
          </div>
          <div className='item_new'>
            <img src={slider_new} alt='new1' className='img_item_new' />
            <div className='text_new'>
              <p>SĂN BITI’S – TRÚNG VINFAST 10/12/2020 - 10/01/2021</p>
              <p>
                Tên chương trình khuyến mãi:"SĂN BITI’S – TRÚNG VINFAST” Hàng hoá,
                dịch vụ khuyến mãi: Tất cả sản phẩm giày, dép mang thương hiệu Biti’s
                (Danh mục đính kèm) Thời gian khuyến mãi: Từ ngày 10/12/2020...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
