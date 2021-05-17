import React from 'react';
import ChangeFree from '../../component/changeFree/ChangeFree';
import Slider from '../../component/slider/SliderMain';
import './home.scss';
function Home(props) {
  return (
    <div className='Main'>
      <Slider />
      <ChangeFree />
    </div>
  );
}

export default Home;
