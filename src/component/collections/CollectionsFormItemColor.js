import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import './CollectionsFormItemColor.scss';
import React, { useEffect, useState } from 'react';

export function CollectionsFormItemColor({ queryList, onChange }) {
  const [checkColor, setCheckColor] = useState('Trắng');
  const color = [
    {
      name: 'Đen',
      color: '#000000',
    },
    {
      name: 'Trắng',
      color: '#FFFFFF',
    },
    {
      name: 'Xanh',
      color: '#0000FF',
    },
    {
      name: 'Vàng',
      color: '#FFFF00',
    },
    {
      name: 'Đỏ',
      color: 'red',
    },
    {
      name: 'Nâu',
      color: '#A52A2A',
    },
    {
      name: 'Cam',
      color: '#FFA500',
    },
    {
      name: 'Xám',
      color: '#eee',
    },
    {
      name: 'Xanh Dương',
      color: '#00BFFF',
    },
    {
      name: 'Đồng',
      color: '#CDCD00',
    },
  ];
  const handlColor = (e) => {
    if (checkColor === e) {
      setCheckColor(null);
    } else {
      setCheckColor(e);
    }
  };

  useEffect(() => {
    queryList();
    onChange(checkColor);
  }, [checkColor]);

  return (
    <div className='fullColor'>
      {color.map(({ name, color }, index) => (
        <div style={{ position: 'relative' }} onClick={() => handlColor(name)}>
          <p style={{ backgroundColor: color }}></p>
          <FontAwesomeIcon
            icon={faCheck}
            className={classNames({ showItem: name === checkColor })}
            style={{
              position: 'absolute',
              top: '10px',
              left: '8px',
              display: 'none',
              color: 'white',
            }}
          />
        </div>
      ))}
    </div>
  );
}
