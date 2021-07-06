import React from 'react';
import { SliderItem } from '../../component/ProductItem';
import './InfoItem.scss';

function InfoItem(props) {
  console.log(props.query);
  return (
    <div className='Info'>
      <div className='Info_img'>
        <div className='slider_img'>
          <SliderItem />
          <img
            alt='img'
            style={{ width: '100%' }}
            src='https://product.hstatic.net/1000230642/product/dsmh06100kem-1_cb2338cb769648738a167141e82c1e89_1024x1024.jpg'
          />
        </div>
      </div>
      <div>
        <p>
          Giày Thể Thao Nam Biti's Hunter Nameless Edition x Công Trí - No.2
          DSMH06100KEM
        </p>
      </div>
    </div>
  );
}

export default InfoItem;
