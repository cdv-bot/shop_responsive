import { useEffect, useState } from 'react';
import { Button, Col, Divider, notification, Row } from 'antd';
import jwtDecode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import useSWR from 'swr';
import { formatMoneyPoint } from '../../utils/common';
import './admin.scss';
import policyApi from '../../api/api';

function Admin(props) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  let token = window.localStorage.getItem('token');
  const { data, mutate } = useSWR(
    `${process.env.REACT_APP_API}/listadmin?token=Bearer ${token}`
  );

  useEffect(() => {
    try {
      if (token) {
        const decode = jwtDecode(token);
        if (decode.userList?.role !== 'admin') {
          history.replace('/');
        }
      }
    } catch {
      console.log('error');
    }
  }, []);

  const handleOrder = async (id) => {
    try {
      setLoading(true);
      await policyApi.upOrder({ id });
      notification.success({
        message: 'Đã lên đơn hàng!',
      });
      mutate();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = async (data) => {
    try {
      setLoading(true);
      await policyApi.cancelOrder({ data });
      notification.success({
        message: 'Đã hủy đơn hàng!',
      });
      mutate();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div id='admin'>
      {data &&
        data.data.map(
          (
            { money, maphuongxa, tinh, huyen, product, _id, address, userId },
            index
          ) => {
            return (
              <div className='info' key={index}>
                <p className='info__name'>Đỗ Văn An</p>
                <Row className='info__addrees'>
                  <Col span={5}>
                    <b>Địa chỉ:</b>
                    <p>{address}</p>
                  </Col>
                  <Col span={5}>
                    <b>Xã/Phường:</b>
                    <p>{maphuongxa}</p>
                  </Col>
                  <Col span={5}>
                    <b>Quận/Huyện:</b>
                    <p>{huyen}</p>
                  </Col>
                  <Col span={4}>
                    <b>Tỉnh/Thành phố:</b>
                    <p>{tinh}</p>
                  </Col>
                  <Col span={5}>
                    <Row gutter={[8]}>
                      <Col>
                        <Button
                          type='primary'
                          loading={loading}
                          onClick={() => handleOrder(_id)}
                          size='small'>
                          LÊN ĐƠN
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          type='primary'
                          loading={loading}
                          danger
                          size='small'
                          onClick={() =>
                            handleCancel({
                              money,
                              maphuongxa,
                              tinh,
                              huyen,
                              product,
                              _id,
                              address,
                              userId,
                            })
                          }>
                          HỦY ĐƠN
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Divider style={{ margin: '7px' }} />
                {product.map(({ title, count, price, img }, index) => (
                  <div className='info__list' key={index}>
                    <img className='info__list-img' src={img} alt='img' />
                    <div className='info__list-text'>
                      <p>{title}</p>
                      <p>x{count}</p>
                    </div>
                    <div className='info__list-money'>
                      ₫{formatMoneyPoint(price)}
                    </div>
                  </div>
                ))}
                <Divider style={{ margin: '7px' }} />
                <div className='info__count'>
                  <p>Tổng: ₫{formatMoneyPoint(money)}</p>
                </div>
              </div>
            );
          }
        )}
    </div>
  );
}

export default Admin;
