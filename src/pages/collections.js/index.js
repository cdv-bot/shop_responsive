import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CollectionsListData, CollectionsSearch } from '../../component/collections';
import './collections.scss';
function Collections(props) {
  const [filer, filerData] = useState(null);
  const params = useParams();
  const checktext = (value) => {
    const text = {
      phukien: 'PHỤ KIỆN',
      nam: 'NAM',
      nu: 'NỮ',
      boy: 'BÉ TRAI',
      girl: 'BÉ GÁI',
    };
    return text[value] || null;
  };
  return (
    <div id='collections'>
      <p style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold' }}>
        {checktext(params?.name)}
      </p>
      <div className='list_product'>
        <CollectionsSearch filerData={filerData} />
        <CollectionsListData filer={filer} />
      </div>
    </div>
  );
}

export default Collections;
