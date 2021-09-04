import { Button } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import news from '../../assets/image/new.png';
import { fetchUserById } from '../../store/cart';
import { formatMoneyPoint } from '../../utils/common';
import './itemProductTablet.scss';

function ItemProductTablet({ dataItem }) {
  const { img, numberSize, title, price, maSp, _id } = dataItem;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [sizes, setSizes] = useState({
    id: null,
    numSize: null,
  });
  const listSize = numberSize ? numberSize.slice(1, -1) : [];

  const onSize = (size, id) => {
    setSizes({
      id,
      numSize: size,
    });
  };

  const handleBuy = (id) => {
    if (id === sizes.id || listSize.length === 0) {
      dispatch(
        fetchUserById({
          id,
          numSize: listSize.length ? sizes.numSize : 0,
          ...dataItem,
        })
      );
    }
  };
  return (
    <div id='ItemProductTablet'>
      <Link
        to={{
          pathname: `/product/${maSp}`,
        }}
        className='link_img'>
        <img src={img} alt='item' />
      </Link>
      <div className='onSize'>
        <span className='plusSize'>{`+${listSize.length} size`}</span>
        <div className='listSize'>
          {listSize.map((x, index) => {
            return (
              <span
                key={index}
                className={classNames({
                  colorSize: sizes.id === _id && sizes.numSize === x,
                })}
                onClick={() => onSize(x, _id)}>
                {x}
              </span>
            );
          })}
        </div>
      </div>
      <a className='linkName' href='/#' title={title}>
        {title}
      </a>
      <p>{maSp}</p>
      <p className='price'>{formatMoneyPoint(price)} đ</p>
      <Button
        loading={loading}
        className='buyProduct'
        style={{ width: '100%', height: '50px' }}
        onClick={() => handleBuy(_id)}>
        Mua hàng
      </Button>
      <img src={news} className='news' alt='' />
    </div>
  );
}

export default ItemProductTablet;
