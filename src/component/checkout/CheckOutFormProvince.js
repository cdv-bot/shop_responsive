import { Select } from 'antd';
import { Form } from 'antd';
import React from 'react';
import useSWR from 'swr';
const { Option } = Select;

export function CheckOutFormProvince(props) {
  const { data } = useSWR(`${process.env.REACT_APP_API}/getProvince`);

  return (
    <Form.Item name='province'>
      <Select placeholder='Quận / huyện' allowClear>
        {data &&
          data.map((item) => {
            return (
              <Option key={item.matinh} value={item.matinh}>
                {item.ten}
              </Option>
            );
          })}
      </Select>
    </Form.Item>
  );
}
