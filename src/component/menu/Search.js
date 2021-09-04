import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import './search.scss';

function Search(props) {
  const [textSearch, setTextSearch] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef();
  const setTime = useRef(null);

  const { data, error } = useSWR(
    `${process.env.REACT_APP_API}/search/product?key=${textSearch}`
  );

  const handleOnChange = () => {
    if (setTime.current) {
      clearTimeout(setTime.current);
    }
    setTime.current = setTimeout(() => {
      setTextSearch(inputRef.current.value);

      if (!showSearch) {
        setShowSearch(true);
      }
    }, 500);
  };
  return (
    <div className='Menu__top-search'>
      <input
        placeholder='Nhập thông tin cần tìm kiếm...'
        onBlur={() => setShowSearch(false)}
        onChange={() => handleOnChange()}
        ref={inputRef}
      />
      <span>
        <FontAwesomeIcon
          icon={faSearch}
          className='faSearch'
          style={{ cursor: 'pointer' }}
        />
      </span>
      {showSearch && (
        <ul className='position_list'>
          {data ? (
            data.map((item, index) => {
              return (
                <li key={index}>
                  <img src={item?.img} alt='img' />
                  <Link to={item?.maSp} className='link_sp'>
                    {item.title}
                  </Link>
                </li>
              );
            })
          ) : (
            <li style={{ textAlign: 'center' }}>Không có sản phẩm.</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Search;
