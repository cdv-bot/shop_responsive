import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import './style.scss';
import policyApi from '../../api/api';
import { formatMoneyPoint } from '../../utils/common';
import useSWR from 'swr';
const { TabPane } = Tabs;
export default function Order(props) {
  const userId = window.localStorage.getItem('id_user');
  const [productList, setProductList] = useState([]);
  const { data: transport } = useSWR(
    `${process.env.REACT_APP_API}/ordertransport?id=${userId}`
  );

  const { data: cancelorder } = useSWR(
    `${process.env.REACT_APP_API}/listcancel?id=${userId}`
  );

  console.log(cancelorder);
  useEffect(() => {
    (async () => {
      try {
        const id_user = window.localStorage.getItem('id_user');
        const { data } = await policyApi.getListOrder({ id: id_user });
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const totalMoney = () => {
    return productList.reduce((x, { money }) => {
      return x + money;
    }, 0);
  };
  return (
    <div id='Order'>
      <Tabs defaultActiveKey='1' centered>
        <TabPane tab='Đã mua' key='1'>
          {productList && productList.length !== 0 ? (
            productList.map(({ product }) => {
              return product.map((item, index) => (
                <div className='orderTab' key={index}>
                  <div className='orderTab__list'>
                    <img className='orderTab__list-img' src={item.img} alt='' />
                    <div className='orderTab__list-name'>
                      <p>{item.title}</p>
                      <p>Size: {item.size}</p>
                      <p>x{item.count}</p>
                    </div>
                    <div className='orderTab__list-money'>
                      <p>₫{formatMoneyPoint(item.price * item.count)}</p>
                    </div>
                  </div>
                </div>
              ));
            })
          ) : (
            <div className='delivering'>
              <div className='delivering__nuti'>
                <div className='noDelivering'></div>
                <p>Chưa có đơn nào giao.</p>
              </div>
            </div>
          )}

          <div className='total'>
            <p>Tổng tiền: ₫{formatMoneyPoint(totalMoney())}</p>
          </div>
        </TabPane>
        <TabPane tab='Đang giao' key='2'>
          {transport && transport.length !== 0 ? (
            transport.map(({ product }) => {
              return product.map((item, index) => (
                <div className='orderTab' key={index}>
                  <div className='orderTab__list'>
                    <img className='orderTab__list-img' src={item.img} alt='' />
                    <div className='orderTab__list-name'>
                      <p>{item.title}</p>
                      <p>Size: {item.size}</p>
                      <p>x{item.count}</p>
                    </div>
                    <div className='orderTab__list-money'>
                      <p>₫{formatMoneyPoint(item.price * item.count)}</p>
                    </div>
                  </div>
                </div>
              ));
            })
          ) : (
            <div className='delivering'>
              <div className='delivering__nuti'>
                <div className='noDelivering'></div>
                <p>Chưa có đơn nào giao.</p>
              </div>
            </div>
          )}

          <div className='total'>
            <p>Tổng tiền: ₫{formatMoneyPoint(totalMoney())}</p>
          </div>
        </TabPane>
        <TabPane tab='Đã bị hủy' key='3'>
          {cancelorder && cancelorder.length !== 0 ? (
            cancelorder.map(({ product }) => {
              return product.map((item, index) => (
                <div className='orderTab' key={index}>
                  <div className='orderTab__list'>
                    <img className='orderTab__list-img' src={item.img} alt='' />
                    <div className='orderTab__list-name'>
                      <p>{item.title}</p>
                      <p>Size: {item.size}</p>
                      <p>x{item.count}</p>
                    </div>
                    <div className='orderTab__list-money'>
                      <p>₫{formatMoneyPoint(item.price * item.count)}</p>
                    </div>
                  </div>
                </div>
              ));
            })
          ) : (
            <div className='delivering'>
              <div className='delivering__nuti'>
                <div className='noDelivering'></div>
                <p>Chưa có đơn nào giao.</p>
              </div>
            </div>
          )}

          <div className='total'>
            <p>Tổng tiền: ₫{formatMoneyPoint(totalMoney())}</p>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}
