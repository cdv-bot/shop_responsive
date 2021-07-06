import React, { useRef } from 'react';
import Slider from 'react-slick';
import nexts from '../../assets/image/nextSlider.png';
import ItemProductTablet from './ItemProductTablet';
import './productListTablet.scss';

function ProductListTablet({ data }) {
  const slider = useRef();

  const previous = () => {
    slider.current.slickPrev();
  };
  const next = () => {
    slider.current.slickNext();
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className='sliderListTable'>
      <Slider {...settings} ref={slider}>
        {data &&
          data.map((x, index) => {
            return <ItemProductTablet {...x} key={index} />;
          })}
      </Slider>
      <div>
        <div onClick={previous} className='previous sliderClick'>
          <img src={nexts} alt='previous' className='iconPrevious' />
        </div>
        <div onClick={next} className='next sliderClick'>
          <img src={nexts} alt='next' className='iconNext' />
        </div>
      </div>
    </div>
  );
}

export default ProductListTablet;
