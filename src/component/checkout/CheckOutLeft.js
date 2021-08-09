import React from 'react';
import './CheckOutLeft.scss';
import logo from '../../assets/image/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Form, Input, Row } from 'antd';
import {
  CheckOutFormProvince,
  CheckOutFormDistrict,
  CheckOutFormWard,
} from '../checkout';

import { useDispatch, useSelector } from 'react-redux';
import { orderApi } from '../../store/order';

export function CheckOutLeft({ moneys }) {
  const data = useSelector((state) => state.cart);
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const onFinish = (e) => {
    dispatch(
      orderApi({
        data: e,
        product: data.map((item) => {
          return {
            title: item.title,
            size: item.numSize,
            count: item.count,
          };
        }),
        money: moneys,
      })
    );
  };
  return (
    <div id='checkout'>
      <img className='logo' src={logo} alt='logo' />
      <div className='gh'>
        <Link to='/cart'>Giỏ hàng</Link>
        <FontAwesomeIcon icon={faChevronRight} className='icon_right' />
        <span>Thông tin giao hàng</span>
        <FontAwesomeIcon icon={faChevronRight} className='icon_right' />
        <Link to='/login'>Phương thức thanh toán</Link>
      </div>
      <p>Thông tin giao hàng</p>
      <p>
        Bạn đã có tài khoản? <Link to='/login'>Đăng nhập</Link>
      </p>
      <div>
        <Form
          name='submit'
          form={form}
          onFinish={onFinish}
          initialValues={{ ward: null }}>
          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Vui lòng không để trống!' }]}>
            <Input placeholder='Họ và tên' />
          </Form.Item>

          <Row gutter={[8, 0]}>
            <Col span={15}>
              <Form.Item
                name='email'
                rules={[
                  {
                    type: 'email',
                    message: 'Vui lòng nhập email',
                  },
                  { required: true, message: 'Vui lòng không để trống!' },
                ]}>
                <Input placeholder='Email' />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                name='phone'
                rules={[{ required: true, message: 'Vui lòng không để trống!' }]}>
                <Input placeholder='Số điện thoại' />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name='address'
            rules={[{ required: true, message: 'Vui lòng không để trống!' }]}>
            <Input placeholder='Địa chỉ' />
          </Form.Item>
          <Row gutter={[8, 0]}>
            <Col span={8}>
              <CheckOutFormProvince />
            </Col>
            <Col span={8}>
              <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) =>
                  prevValues.province !== currentValues.province
                }>
                {({ getFieldValue }) => (
                  <CheckOutFormDistrict
                    province={getFieldValue('province')}
                    formField={form}
                  />
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) =>
                  prevValues.district !== currentValues.district
                }>
                {({ getFieldValue }) => (
                  <CheckOutFormWard
                    province={getFieldValue('province')}
                    district={getFieldValue('district')}
                    formField={form}
                  />
                )}
              </Form.Item>
            </Col>
          </Row>

          <div className='cart_buy'>
            <div>
              <FontAwesomeIcon icon={faChevronLeft} className='cart_buy-icon' />
              <Link to='/cart'>Giỏ hàng</Link>
            </div>
            <Button type='primary' htmlType='submit' style={{ height: '60px' }}>
              Thanh toán
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
