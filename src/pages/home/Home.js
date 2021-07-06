import React from 'react';

import './home.scss';
import ChangeFree from '../../component/changeFree/ChangeFree';
import ProductList from '../../component/producList';
import Slider from '../../component/slider/SliderMain';
import TableProduct from '../../component/tableProduct/TableProduct';
import banner_betrai from '../../assets/image/banner-be-trai.jpg';
import banner_begai from '../../assets/image/banner-be-gai.jpg';
import New from '../../component/news/New';

function Home(props) {
  return (
    <div className='Main'>
      <Slider />
      <ChangeFree />
      <TableProduct />

      <ProductList name='NAM' apiQuery='productSlideNam' />
      <ProductList name='NỮ' apiQuery='productSlideNu' />
      <ProductList name='PHỤ KIỆN' apiQuery='productSlideAccessories' />

      <div className='div_img'>
        <img src={banner_betrai} alt='banner' className='img_banner' />
      </div>

      <ProductList name='BÉ TRAI' apiQuery='productSlideBoy' />

      <div className='div_img'>
        <img src={banner_begai} alt='banner' className='img_banner' />
      </div>

      <ProductList name='BÉ GÁI' apiQuery='productSlideGirl' />
      <New />
    </div>
  );
}

export default Home;
