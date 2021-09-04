import { Button, Form, Input, notification } from 'antd';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import policyApi from '../../api/api';
import './comment.scss';
const { TextArea } = Input;

function Comment({ id }) {
  const [formField] = Form.useForm();
  const token = window.localStorage.getItem('token');
  const [dataCmt, setDataCmt] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await policyApi.getComment(id);

      if (data?.comment) {
        setDataCmt(data.comment);
      }
    })();
  }, [id]);

  const onFinish = (e) => {
    if (token) {
      const { userList } = jwtDecode(token);
      if (userList) {
        policyApi
          .postComment({
            comment: e.comment,
            idProduct: id,
            username: userList.username,
            name: userList.name,
          })
          .then((item) => {
            setDataCmt([...dataCmt, item]);
            notification.success({
              message: 'Đã gửi thành công',
              description: '',
            });
            formField.resetFields();
          })
          .catch((error) => {
            notification.error({
              message: 'Lỗi sảy ra.',
              description: 'Báo lại admin',
            });
          });
      }
    }
  };
  return (
    <div className='comment'>
      <ul>
        {dataCmt &&
          dataCmt.map((item, index) => {
            return (
              <li key={index}>
                <p>{Object.keys(item)}</p>
                <p>{Object.values(item)}</p>
              </li>
            );
          })}
      </ul>
      {token ? (
        <Form onFinish={onFinish} form={formField}>
          <Form.Item
            name='comment'
            rules={[{ required: true, message: 'Vui lòng viết comment.' }]}>
            <TextArea rows={4} placeholder='Viết bình luận.' />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 18 }}>
            <Button type='primary' htmlType='submit' style={{ width: '120px' }}>
              Send
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Button>
          <Link to='/login'>Viết bình luận</Link>
        </Button>
      )}
    </div>
  );
}

export default Comment;
