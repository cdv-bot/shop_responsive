import React from 'react';
import './tableProduct.scss';
import banner1 from '../../assets/image/tableProduct/banner1.png';
import banner2_top from '../../assets/image/tableProduct/banner2_top.png';
import banner2_bottom1 from '../../assets/image/tableProduct/banner2_bottom1.png';
import banner2_bottom2 from '../../assets/image/tableProduct/banner2_bottom2.png';
import banner3_top from '../../assets/image/tableProduct/banner3_top.png';
import banner3_bottom1 from '../../assets/image/tableProduct/banner3_bottom1.png';
import banner3_bottom2 from '../../assets/image/tableProduct/banner3_bottom2.png';
function TableProduct(props) {
  return (
    <div id='TableProduct'>
      <img src={banner1} alt='banner1' className='banner_left' />
      <div className='banner2'>
        <img src={banner2_top} alt='banner2_top ' className='banner2_top' />
        <div className='banner2_bottom'>
          <img src={banner2_bottom1} alt='bn' className='banner2_bottom1' />
          <img src={banner2_bottom2} alt='bn' className='banner2_bottom2' />
        </div>
      </div>
      <div className='banner2'>
        <img src={banner3_top} alt='banner3_top ' className='banner2_top' />
        <div className='banner2_bottom'>
          <img
            src={banner3_bottom1}
            alt='banner3_bottom1'
            className='banner2_bottom1'
          />
          <img
            src={banner3_bottom2}
            alt='banner3_bottom2'
            className='banner2_bottom2'
          />
        </div>
      </div>
    </div>
  );
}

export default TableProduct;
