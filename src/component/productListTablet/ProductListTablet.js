import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import './productListTablet.scss';
import ItemProductTablet from '../itemProductTable';
import a from '../../assets/image/tableProduct/banner1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import nexts from '../../assets/image/nextSlider.png';

function ProductListTablet(props) {
  const slider = useRef();

  const [checkPoint, setCheckPoint] = useState(4);
  useEffect(() => {
    window.onresize = () => {
      let width = window.innerWidth;
      if (width === 1024) {
        setCheckPoint(4);
      } else if (width === 1200) {
        setCheckPoint(5);
      }
    };
  }, []);

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
    slidesToShow: checkPoint,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='sliderListTable'>
      <Slider {...settings} ref={slider}>
        <ItemProductTablet />
        <ItemProductTablet />
        <ItemProductTablet />
        <ItemProductTablet />
        <ItemProductTablet />
        <ItemProductTablet />
        <ItemProductTablet />
        <ItemProductTablet />
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
