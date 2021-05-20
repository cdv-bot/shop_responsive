import React from 'react';
import news from '../../assets/image/new.png';
import itemProduct from '../../assets/image/tableProduct/itemProduct.jpg';
import './itemProduct.scss';
function ItemProduct(props) {
  return (
    <div id='itemProduct'>
      <a href='/#' className='link_img'>
        <img src={itemProduct} alt='item' />
      </a>
      <a className='linkName' href='/#'>
        Giày Thể Thao Nam Bitis Hunter Nameless Edition
      </a>
      <p className='price'>1,499,000 đ</p>
      <img src={news} className='news' />
    </div>
  );
}

export default ItemProduct;
