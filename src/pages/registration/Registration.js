import { Button, Form, Input, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import policyApi from '../../api/api';
function Registration(props) {
  const history = useHistory();
  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      history.replace('/');
    }
  }, []);
  const onFinish = async (value) => {
    try {
      await policyApi.logup(value);
      notification.success({
        message: 'Thành công',
        description: 'Đăng ký thành công.',
      });
      history.replace('/login');
    } catch {
      notification.success({
        message: 'Thất bại',
        description: 'Tài khoản tồn tại.',
      });
    }
  };
  return (
    <div id='login'>
      <div className='loginBoder'>
        <p style={{ textAlign: 'center', fontSize: '25px' }}>Đăng ký</p>
        <Form name='horizontal_login' onFinish={onFinish}>
          <Form.Item
            name='name'
            rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}>
            <Input
              className='input'
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='Tên người dùng'
            />
          </Form.Item>
          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input
              className='input'
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='Username'
            />
          </Form.Item>
          <Form.Item
            className='input'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input
              className='input'
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              style={{ width: '100%' }}
              className='input'>
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
        <div className='loginBoder__link'>
          <Link to='/login'>Đã có tài khoản? Đăng nhập</Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;
