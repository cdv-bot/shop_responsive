import { Select } from 'antd';
import { Form } from 'antd';
import React, { useEffect } from 'react';
import useSWR from 'swr';
const { Option } = Select;
export function CheckOutFormWard({ district, province, formField }) {
  const { data } = useSWR(
    `${process.env.REACT_APP_API}/getWard/${province}/${district}`
  );
  useEffect(() => {
    formField.resetFields(['wards']);
  }, [district, province]);
  console.log(data);
  return (
    <Form.Item name='wards'>
      <Select placeholder='Phường / xã' allowClear>
        {data &&
          data.map((item, index) => {
            return (
              <Option key={index} value={item.maphuongxa}>
                {item.ten}
              </Option>
            );
          })}
      </Select>
    </Form.Item>
  );
}
