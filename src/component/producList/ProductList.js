import React from 'react';
import ItemProduct from '../itemProduct/ItemProduct';
import ProductListTablet from '../itemProduct/ProductListTablet';
import './productList.scss';
function ProductList({ name }) {
  return (
    <div className='productList'>
      <div className='centerName'>
        <p className='Name'>{name}</p>
      </div>

      <div className='productListMobile'>
        <ItemProduct />
      </div>

      <div className='productListTablet'>
        <ProductListTablet />
      </div>

      <a href='/#' className='linkPlus'>
        XEM THÊM
      </a>
    </div>
  );
}

export default ProductList;
