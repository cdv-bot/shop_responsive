import React from 'react';
import ChangeFree from '../../component/changeFree/ChangeFree';
import ProductNam from '../../component/productNam';
import Slider from '../../component/slider/SliderMain';
import TableProduct from '../../component/tableProduct/TableProduct';
import './home.scss';
function Home(props) {
  return (
    <div className='Main'>
      <Slider />
      <ChangeFree />
      <TableProduct />
      <ProductNam />
    </div>
  );
}

export default Home;
