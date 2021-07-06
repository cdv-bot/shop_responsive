import React from 'react';
import news from '../../assets/image/new.png';
import './itemProduct.scss';

function ItemProduct({ data }) {
  return (
    <>
      {data &&
        data.map((x, index) => {
          return (
            <div id='itemProduct' key={index}>
              <a href='/#' className='link_img'>
                <img src={x.img} alt='item' />
              </a>
              <a className='linkName' href='/#' title={x.title}>
                {x.title}
              </a>
              <p className='price'>{`${x.price}`}</p>
              <img src={news} className='news' alt='' />
            </div>
          );
        })}
    </>
  );
}

export default ItemProduct;
