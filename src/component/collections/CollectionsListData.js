import React, { useState } from 'react';
import useSWR from 'swr';
import ItemProductTablet from '../itemProduct/ItemProductTablet';
import './CollectionsListData.scss';
import queryString from 'query-string';
import { Pagination } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
export default function CollectionsListData({ filer }) {
  const [page, setPage] = useState(1);
  const handleChangePage = (e) => {
    setPage(e);
  };
  const param = useParams();
  const history = useHistory();
  if (!param.name) {
    history.push('http://localhost:3000/');
  }
  const { data, error } = useSWR(
    `http://localhost:3001/productlist/${
      param?.name
    }?page=${page}&${queryString.stringify(filer)}`
  );

  if (!data) {
    return null;
  }
  return (
    <div>
      {data.data.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Không có sản phẩm.</p>
      ) : (
        <>
          <div className='listData'>
            {data.data.map((item, index) => (
              <ItemProductTablet dataItem={item} key={index} />
            ))}
          </div>
          <div style={{ marginTop: '10px' }}>
            <Pagination
              defaultCurrent={1}
              total={data?.totalItem}
              pageSize={16}
              onChange={handleChangePage}
            />
          </div>
        </>
      )}
    </div>
  );
}
