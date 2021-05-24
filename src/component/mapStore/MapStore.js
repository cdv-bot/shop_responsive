import React from 'react';
import './mapStore.scss';
import map from '../../assets/image/map.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
function MapStore(props) {
  return (
    <div id='MapStore'>
      <p className='text_store'>HỆ THỐNG CỬA HÀNG </p>
      <div className='list_map'>
        <img src={map} alt='map' className='img_map' />
        <div className='select'>
          <select name='cars' className='select_value'>
            <option value='volvo'>Volvo</option>
            <option value='saab'>Saab</option>
            <option value='mercedes'>Mercedes</option>
            <option value='audi'>Audi</option>
          </select>
          <div className='select_list'>
            <div className='select_item'>
              <FontAwesomeIcon icon={faMapMarkedAlt} className='icon_map' />
              <span>
                <p>CTASASA</p>
                <p>Địa chỉ: 84 Điện Biên, Phường Lê Lợi, TP Hưng Yên, Hưng Yên</p>
                <p>SĐT: 0221.6284.365</p>
              </span>
            </div>
            <div className='select_item'>
              <FontAwesomeIcon icon={faMapMarkedAlt} className='icon_map' />
              <span>
                <p>CTASASA</p>
                <p>Địa chỉ: 84 Điện Biên, Phường Lê Lợi, TP Hưng Yên, Hưng Yên</p>
                <p>SĐT: 0221.6284.365</p>
              </span>
            </div>
            <div className='select_item'>
              <FontAwesomeIcon icon={faMapMarkedAlt} className='icon_map' />
              <span>
                <p>CTASASA</p>
                <p>Địa chỉ: 84 Điện Biên, Phường Lê Lợi, TP Hưng Yên, Hưng Yên</p>
                <p>SĐT: 0221.6284.365</p>
              </span>
            </div>
            <div className='select_item'>
              <FontAwesomeIcon icon={faMapMarkedAlt} className='icon_map' />
              <span>
                <p>CTASASA</p>
                <p>Địa chỉ: 84 Điện Biên, Phường Lê Lợi, TP Hưng Yên, Hưng Yên</p>
                <p>SĐT: 0221.6284.365</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapStore;
