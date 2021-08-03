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
    formField.resetFields(['ward']);
  }, [district, province]);
  return (
    <Form.Item name='ward'>
      <Select placeholder='Phường / xã' allowClear>
        {data &&
          data.map((item) => {
            return (
              <Option key={item.phuongxa} value={item.phuongxa}>
                {item.ten}
              </Option>
            );
          })}
      </Select>
    </Form.Item>
  );
}
