import { Select } from 'antd';
import { Form } from 'antd';
import React, { useEffect } from 'react';
import useSWR from 'swr';
const { Option } = Select;
export function CheckOutFormWard({ district, province, formField }) {
  const { data, error } = useSWR(
    `http://localhost:3001/getWard/${province}/${district}`
  );
  useEffect(() => {
    formField.resetFields(['wards']);
  }, [district, province]);
  return (
    <Form.Item name='wards'>
      <Select placeholder='Phường / xã' allowClear>
        {data &&
          data.map((item, index) => {
            return (
              <Option key={index} value={item.phuongxa}>
                {item.ten}
              </Option>
            );
          })}
      </Select>
    </Form.Item>
  );
}
