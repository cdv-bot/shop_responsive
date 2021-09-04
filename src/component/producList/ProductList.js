import React from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import ItemProduct from '../itemProduct/ItemProduct';
import ProductListTablet from '../itemProduct/ProductListTablet';
import './productList.scss';
function ProductList({ name, apiQuery }) {
  const { data } = useSWR(`${process.env.REACT_APP_API}/${apiQuery}`);
  const checkName = (value) => {
    if (value === 'PHỤ KIỆN') {
      return 'phukien';
    }
    if (value === 'NAM') {
      return 'nam';
    }
    if (value === 'NỮ') {
      return 'nu';
    }
    if (value === 'BÉ TRAI') {
      return 'boy';
    }
    if (value === 'BÉ GÁI') {
      return 'girl';
    }
  };
  return (
    <div className='productList'>
      <div className='centerName'>
        <p className='Name'>{name}</p>
      </div>

      <div className='productListMobile'>
        <ItemProduct data={data} />
      </div>

      <div className='productListTablet'>
        <ProductListTablet data={data} />
      </div>

      <Link to={`/collections/${checkName(name)}`} className='linkPlus'>
        XEM THÊM
      </Link>
    </div>
  );
}

export default ProductList;
