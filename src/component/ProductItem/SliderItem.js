import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import './sliderItem.scss';

export function SliderItem({ dataImg, onImg }) {
  const [translate, setTranslate] = useState(0);
  const next = () => {
    if (0 > translate) {
      setTranslate(translate + 40);
    }
  };
  const previous = () => {
    const height = document.getElementById('sliderScroll').clientHeight - 400;
    if (Math.abs(translate) < height + 40) {
      setTranslate(translate - 40);
    }
  };
  return (
    <div className='slideItem'>
      <FontAwesomeIcon
        icon={faChevronUp}
        className='icon_arrow'
        onClick={previous}
      />
      <div className='sliderListImg'>
        <div
          id='sliderScroll'
          style={{
            transform: `translateY(${translate}px)`,
            transition: 'all 0.5s',
            cursor: 'pointer',
          }}>
          {dataImg &&
            dataImg.map((item, index) => {
              return (
                <img key={index} src={item} alt='img' onClick={() => onImg(item)} />
              );
            })}
        </div>
      </div>
      <FontAwesomeIcon icon={faChevronDown} className='icon_arrow' onClick={next} />
    </div>
  );
}
