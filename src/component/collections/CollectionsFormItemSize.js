import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

export function CollectionsFormItemSize({ queryList, onChange }) {
  const [size, setSize] = useState([]);

  const handleSize = (e) => {
    if (size.length === 0) {
      setSize([e]);
    } else {
      if (size.includes(e)) {
        const dataSize = size.filter((item) => item !== e);
        setSize(dataSize);
      } else {
        setSize([...size, e]);
      }
    }
  };
  useEffect(() => {
    onChange(size);
    queryList();
  }, [size]);
  const arraySize = () => {
    let arr = [];
    for (let i = 23; i < 48; i++) {
      arr.push(
        <p
          key={i}
          className={classNames({ clickSize: size.includes(i) })}
          onClick={() => handleSize(i)}>
          {i}
        </p>
      );
    }
    return arr;
  };
  return <div className='fullSize'>{arraySize()}</div>;
}
