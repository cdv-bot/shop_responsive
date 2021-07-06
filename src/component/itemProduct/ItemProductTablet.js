import React from 'react';
import { Link } from 'react-router-dom';
import news from '../../assets/image/new.png';
import { removeAccents } from '../../utils/common';
import './itemProductTablet.scss';
function ItemProductTablet({ img, numberSize, title, price, maSp }) {
  const listSize = numberSize.slice(1, -1);

  return (
    <div id='ItemProductTablet'>
      <Link
        to={{
          pathname: `/product/${removeAccents(title)}`,
          query: { thing: 'asdf', another1: 'stuff' },
        }}
        className='link_img'>
        <img src={img} alt='item' />
      </Link>
      <div className='onSize'>
        <span className='plusSize'>{`+${listSize.length} size`}</span>
        <div className='listSize'>
          {listSize.map((x, index) => {
            return <span key={index}>{x}</span>;
          })}
        </div>
      </div>
      <a className='linkName' href='/#' title={title}>
        {title}
      </a>
      <p>{maSp}</p>
      <p className='price'>{price}</p>
      <a href='/#' className='buyProduct'>
        Mua hàng
      </a>
      <img src={news} className='news' alt='' />
    </div>
  );
}

export default ItemProductTablet;
