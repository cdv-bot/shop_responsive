import React, { useEffect, useState } from 'react';
import ItemProduct from '../itemProduct/ItemProduct';
import ItemProductTablet from '../itemProductTable';
import ProductListTablet from '../productListTablet/ProductListTablet';
import './productNam.scss';
function ProductNam(props) {
  const [checkPoint, setCheckPoint] = useState(null);
  useEffect(() => {
    window.onresize = () => {
      let width = window.screen.width;
      console.log(width);
      setCheckPoint(width);
    };
  }, []);
  return (
    <div className='productNam'>
      <p className='Name'>NAM</p>
      {checkPoint < 1024 ? (
        <div className='listItem'>
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
        </div>
      ) : (
        <>
          <ProductListTablet />
        </>
      )}
      <a href='/#' className='linkPlus'>
        XEM THÊM
      </a>
    </div>
  );
}

export default ProductNam;
