import { Input, Form, Row, Col, Button } from 'antd';
import React from 'react';
import './CheckOutRight.scss';
export function CheckOutRight(props) {
  return (
    <div id='check_right'>
      <div className='info'>
        <img
          className='img_right'
          src='https://st.quantrimang.com/photos/image/2020/10/17/giai-nen-file-img.jpg'
          alt=''
        />
        <span className='title_span'>
          <p>
            Hình ảnh Mô tả Số lượng Giá Giày Thể Thao Nam Biti's Hunter Core
            Refreshing Collection Contras Black DSMH06700DEN (Đen)1 Giày Thể Thao Nam
            Biti's Hunter Core Refreshing Collection Contras Black DSMH06700DEN (Đen)
          </p>
          <p>Đen / 42</p>
        </span>
        <span>231223</span>
      </div>
      <Form style={{ marginTop: '10px', borderBottom: '1px solid #eee' }}>
        <Row gutter={[8, 0]}>
          <Col span={15}>
            <Form.Item>
              <Input placeholder='Mã giảm giá' />
            </Form.Item>
          </Col>
          <Col span={9} align='center'>
            <Button type='submit'>Sử dụng</Button>
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
          <span>123</span>
        </p>
        <p>
          <span>Phí vận chuyển:</span>
          <span>Miễn phí</span>
        </p>
      </div>
      <div className='total_money'>
        <span>Tổng cộng</span>
        <span>6666.đ</span>
      </div>
    </div>
  );
}
