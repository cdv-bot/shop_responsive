import React from 'react';
import './SliderMain.scss';
import Slider from 'react-slick';
import slider1 from '../../assets/image/slider1.jpg';
import slider2 from '../../assets/image/slider2.jpg';
import slider3 from '../../assets/image/slider3.jpg';

var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

function SliderMain(props) {
  return (
    <Slider {...settings}>
      <img src={slider1} alt='logo' className='imgSlider' />

      <img src={slider2} alt='logo' className='imgSlider2' />

      <img src={slider3} alt='logo' className='imgSlider3' />
    </Slider>
  );
}

export default SliderMain;
