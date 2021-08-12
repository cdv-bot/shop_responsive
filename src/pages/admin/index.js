import React, { useEffect, useState } from 'react';
import './admin.scss';
import { Col, Row, Tabs } from 'antd';
import policyApi from '../../api/api';
import { formatMoneyPoint } from '../../utils/common';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
const { TabPane } = Tabs;
function Admin(props) {
  const history = useHistory();
  const [listData, setListData] = useState(null);
  const [listDataDone, setListDataDone] = useState(null);
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    policyApi.getBuy().then((data) => {
      const listDataFilter = data.data.filter((item) => {
        return !item.check;
      });
      setListData(listDataFilter);
      console.log(listDataFilter);
      const listDateDoneFilter = data.data.filter((item) => {
        return item.check;
      });
      setListDataDone(listDateDoneFilter);
    });
  }, [datas]);
  useEffect(() => {
    let token = window.localStorage.getItem('token');
    if (token) {
      const decode = jwtDecode(token);
      if (decode.userList?.role !== 'admin') {
        history.replace('/');
      }
    }
  }, []);
  const handlerDone = async (e) => {
    const data = await policyApi.getDoneBuy(e);
    setDatas(data);
  };
  return (
    <div id='admin'>
      <Tabs defaultActiveKey='1'>
        <TabPane tab='Chưa đóng hàng' key='1'>
          {listData &&
            listData.map((data, index) => {
              return (
                <div key={index} className='list_product'>
                  <Row gutter={[8]} className='row_info'>
                    <Col span={4}>
                      <span>Họ tên:</span>
                      <b> {data.data.data.username}</b>
                    </Col>
                    <Col span={4}>
                      <span>SĐT:</span>
                      <b> {data.data.data.phone}</b>
                    </Col>
                    <Col span={4}>
                      <span>Tỉnh:</span>
                      <span> Thanh Hóa</span>
                    </Col>
                    <Col span={4}>
                      <span>Huyện:</span>
                      <span> Vĩnh Lộc</span>
                    </Col>
                    <Col span={4}>
                      <span>Xã:</span>
                      <span> Vĩnh Ninh</span>
                    </Col>
                    <Col span={3}>
                      <span>Địa chỉ:</span>
                      <span> {data.data?.data.address}</span>
                    </Col>
                    <Col span={1} className='back_done'>
                      <div onClick={() => handlerDone(data._id)}>
                        <ArrowRightOutlined />
                      </div>
                    </Col>
                  </Row>

                  {data.data.product.map((item, index) => {
                    return (
                      <>
                        <Row gutter={[8]}>
                          <Col span={12}>
                            <span>Sản phẩm:</span>
                            <span> {item?.title}</span>
                          </Col>
                          <Col span={6}>
                            <span>Size:</span>
                            <span> {item?.size}</span>
                          </Col>
                          <Col span={6}>
                            <span>Số lượng:</span>
                            <span> {item?.count}</span>
                          </Col>
                        </Row>
                      </>
                    );
                  })}
                  <div className='money_count'>
                    <span>Tổng tiền:</span>
                    <span> {formatMoneyPoint(data.data?.money)}</span>
                  </div>
                </div>
              );
            })}
        </TabPane>
        <TabPane tab='Đóng hàng & gửi' key='2'>
          {listDataDone &&
            listDataDone.map((data, index) => {
              return (
                <div key={index} className='list_product'>
                  <Row gutter={[8]} className='row_info'>
                    <Col span={4}>
                      <span>Họ tên:</span>
                      <b> {data.data.data.username}</b>
                    </Col>
                    <Col span={4}>
                      <span>SĐT:</span>
                      <b> {data.data.data.phone}</b>
                    </Col>
                    <Col span={4}>
                      <span>Tỉnh:</span>
                      <span> Thanh Hóa</span>
                    </Col>
                    <Col span={4}>
                      <span>Huyện:</span>
                      <span> Vĩnh Lộc</span>
                    </Col>
                    <Col span={4}>
                      <span>Xã:</span>
                      <span> Vĩnh Ninh</span>
                    </Col>
                    <Col span={4}>
                      <span>Địa chỉ:</span>
                      <span> {data.data?.data.address}</span>
                    </Col>
                  </Row>

                  {data.data.product.map((item, index) => {
                    return (
                      <>
                        <Row gutter={[8]}>
                          <Col span={12}>
                            <span>Sản phẩm:</span>
                            <span> {item?.title}</span>
                          </Col>
                          <Col span={6}>
                            <span>Size:</span>
                            <span> {item?.size}</span>
                          </Col>
                          <Col span={6}>
                            <span>Số lượng:</span>
                            <span> {item?.count}</span>
                          </Col>
                        </Row>
                      </>
                    );
                  })}
                  <div className='money_count'>
                    <span>Tổng tiền:</span>
                    <span> {formatMoneyPoint(data.data?.money)}</span>
                  </div>
                </div>
              );
            })}
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Admin;
