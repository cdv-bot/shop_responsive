import React, { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import ItemProductTablet from '../itemProduct/ItemProductTablet';
import './CollectionsListData.scss';
import queryString from 'query-string';
import { Pagination } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
export default function CollectionsListData({ filer }) {
  const [page, setPage] = useState(1);
  const totalItem = useRef(0);
  const handleChangePage = (e) => {
    setPage(e);
  };
  const param = useParams();
  const history = useHistory();
  const { data, error } = useSWR(
    `${process.env.REACT_APP_API}/productlist/${
      param?.name
    }?page=${page}&${queryString.stringify(filer)}`
  );

  if (data && !error) {
    totalItem.current = data.totalItem;
  }

  if (data?.error) {
    history.replace('/');
  }
  useEffect(() => {
    setPage(1);
  }, [filer]);
  if (!data || data?.error) return null;
  return (
    <div>
      {data.data?.length === 0 ? (
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
              current={data?.page}
              defaultCurrent={1}
              total={totalItem.current}
              pageSize={16}
              onChange={handleChangePage}
            />
          </div>
        </>
      )}
    </div>
  );
}
