import React from 'react';
import news from '../../assets/image/new.png';
import itemProduct from '../../assets/image/tableProduct/itemProduct.jpg';
import './itemProductTablet.scss';
function ItemProductTablet(props) {
  return (
    <div id='ItemProductTablet'>
      <a href='/#' className='link_img'>
        <img src={itemProduct} alt='item' />
      </a>
      <div className='onSize'>
        <span className='plusSize'>+5 size</span>
        <div className='listSize'>
          <span>35</span>
          <span>35</span>
          <span>35</span>
          <span>35</span>
          <span>35</span>
          <span>35</span>
        </div>
      </div>
      <a className='linkName' href='/#'>
        Giày Thể Thao Nam Bitis Hunter Nameless Edition
      </a>
      <p className='price'>1,499,000 đ</p>
      <a href='/#' className='buyProduct'>
        Mua hàng
      </a>
      <img src={news} className='news' alt='' />
    </div>
  );
}

export default ItemProductTablet;
