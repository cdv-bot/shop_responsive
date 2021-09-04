import { Button, Col, Form, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { formatMoneyPoint } from '../../utils/common';
import './CheckOutRight.scss';
export function CheckOutRight({ money }) {
  const data = useSelector((state) => state.cart);

  const [discout, setDiscount] = useState(0);
  const totalMoneys = () => {
    return data.reduce((x, y) => {
      return x + y.price * y.count;
    }, 0);
  };

  const onFinish = (e) => {
    if (e.discount && ['VIPSUPER'].includes(e.discount.trim().toUpperCase())) {
      setDiscount((totalMoneys() / 100) * 20);
      money(totalMoneys - (totalMoneys() / 100) * 20);
    } else {
      setDiscount(0);
    }
  };
  useEffect(() => {
    money(totalMoneys());
  }, [data]);
  return (
    <div id='check_right'>
      {data &&
        data.map((item, index) => {
          return (
            <div className='info' key={index}>
              <img className='img_right' src={item?.img} alt={item?.img} />
              <span className='title_span'>
                <p>{item?.title}</p>
                <p>{`${item?.numberSize[0]} / ${item?.numSize}`}</p>
              </span>
              <span>{formatMoneyPoint(item?.price)} đ</span>
            </div>
          );
        })}
      <Form
        style={{ marginTop: '10px', borderBottom: '1px solid #eee' }}
        onFinish={onFinish}>
        <Row gutter={[8, 0]}>
          <Col span={15}>
            <Form.Item name='discount'>
              <Input placeholder='Mã giảm giá' type='lowercase' />
            </Form.Item>
          </Col>
          <Col span={9} align='center'>
            <Form.Item>
              <Button htmlType='submit'>Sử dụng</Button>
            </Form.Item>
          </Col>
        </Row>
        <p style={{ width: '400px', fontWeight: 'bold', color: 'red' }}>
          Mã giảm giá không áp dụng chung với các chương trình khuyến mãi bao gồm quà
          tặng, giảm giá
        </p>
      </Form>
      <div className='match_money'>
        <p>
          <span>Tạm tính:</span>
          <span>{formatMoneyPoint(totalMoneys()) || 0} đ</span>
        </p>
        <p>
          <span>Mã giảm giá:</span>
          <span>
            ({formatMoneyPoint(discout) ? '20%' : null}) -{' '}
            {formatMoneyPoint(discout)}đ
          </span>
        </p>
        <p>
          <span>Phí vận chuyển:</span>
          <span>Miễn phí</span>
        </p>
      </div>
      <div className='total_money'>
        <span>Tổng cộng</span>
        <span>{formatMoneyPoint(totalMoneys() - discout) || 0} đ</span>
      </div>
    </div>
  );
}
