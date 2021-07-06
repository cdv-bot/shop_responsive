import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import './sliderItem.scss';

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 3,
  vertical: true,
};
export function SliderItem(props) {
  const sliderRef = useRef();
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className='slideItem'>
      <FontAwesomeIcon
        icon={faChevronUp}
        className='icon_arrow'
        onClick={previous}
      />
      <div className='sliderListImg'>
        <Slider {...settings} ref={sliderRef}>
          <img
            alt=''
            src='https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/208936043_4306352496115631_4385167375085645274_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=730e14&_nc_ohc=nOVrGkGi6SIAX9o0xmi&_nc_ht=scontent.fhan2-4.fna&oh=4251147e0e43ef8f52cf289d91736d25&oe=60DF69C0'
          />
          <img
            alt=''
            src='https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/208936043_4306352496115631_4385167375085645274_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=730e14&_nc_ohc=nOVrGkGi6SIAX9o0xmi&_nc_ht=scontent.fhan2-4.fna&oh=4251147e0e43ef8f52cf289d91736d25&oe=60DF69C0'
          />
          <img
            alt=''
            src='https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/208936043_4306352496115631_4385167375085645274_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=730e14&_nc_ohc=nOVrGkGi6SIAX9o0xmi&_nc_ht=scontent.fhan2-4.fna&oh=4251147e0e43ef8f52cf289d91736d25&oe=60DF69C0'
          />{' '}
          <img
            alt=''
            src='https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/208936043_4306352496115631_4385167375085645274_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=730e14&_nc_ohc=nOVrGkGi6SIAX9o0xmi&_nc_ht=scontent.fhan2-4.fna&oh=4251147e0e43ef8f52cf289d91736d25&oe=60DF69C0'
          />
          <img
            alt=''
            src='https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/208936043_4306352496115631_4385167375085645274_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=730e14&_nc_ohc=nOVrGkGi6SIAX9o0xmi&_nc_ht=scontent.fhan2-4.fna&oh=4251147e0e43ef8f52cf289d91736d25&oe=60DF69C0'
          />
          <img
            alt=''
            src='https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/208936043_4306352496115631_4385167375085645274_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=730e14&_nc_ohc=nOVrGkGi6SIAX9o0xmi&_nc_ht=scontent.fhan2-4.fna&oh=4251147e0e43ef8f52cf289d91736d25&oe=60DF69C0'
          />{' '}
          <img
            alt=''
            src='https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/208936043_4306352496115631_4385167375085645274_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=730e14&_nc_ohc=nOVrGkGi6SIAX9o0xmi&_nc_ht=scontent.fhan2-4.fna&oh=4251147e0e43ef8f52cf289d91736d25&oe=60DF69C0'
          />
          <img
            alt=''
            src='https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/208936043_4306352496115631_4385167375085645274_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=730e14&_nc_ohc=nOVrGkGi6SIAX9o0xmi&_nc_ht=scontent.fhan2-4.fna&oh=4251147e0e43ef8f52cf289d91736d25&oe=60DF69C0'
          />
        </Slider>
      </div>
      <FontAwesomeIcon icon={faChevronDown} className='icon_arrow' onClick={next} />
    </div>
  );
}
