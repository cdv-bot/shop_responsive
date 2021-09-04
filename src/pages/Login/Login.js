import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { Link, useHistory } from 'react-router-dom';
import policyApi from '../../api/api';
import { infoUser } from '../../store/user';
import { Button, Form, Input, notification } from 'antd';
import './login.scss';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      history.replace('/');
    }
  }, []);

  const onFinish = async (value) => {
    try {
      const { token } = await policyApi.login(value);
      window.localStorage.setItem('token', token);
      if (token) {
        const decode = jwtDecode(token);
        console.log(decode);
        dispatch(infoUser(decode?.userList));
        if (decode.userList?.role === 'admin') {
          history.replace('/admin');
        }
      }
      notification.success({
        message: 'Đăng nhập thành công',
      });

      history.replace('/');
    } catch {
      notification.error({
        message: 'Thất bại.',
        description: 'Vui lòng kiểm tra lại tài khoản hoặt mật khẩu.',
      });
    }
  };
  return (
    <div id='login'>
      <div className='loginBoder'>
        <p style={{ textAlign: 'center', fontSize: '25px' }}>Đăng nhập</p>
        <Form name='horizontal_login' onFinish={onFinish}>
          <Form.Item
            name='usernames'
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
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
        <div className='loginBoder__link'>
          <Link to='/logup'>Chưa có tài khoản? Đăng ký</Link>
          <Link to='/'>Quên mật khẩu?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
