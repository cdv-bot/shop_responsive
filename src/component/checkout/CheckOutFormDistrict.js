import { Select } from 'antd';
import { Form } from 'antd';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import api from '../../api/api';
const { Option } = Select;

export function CheckOutFormDistrict({ province, formField }) {
  const { data, error } = useSWR(`http://localhost:3001/getDistrict/${province}`);
  useEffect(() => {
    formField.setFieldsValue({ district: null });
  }, [province]);
  return (
    <Form.Item name='district'>
      <Select placeholder='Quận / huyện' allowClear>
        {data &&
          data.map((item) => {
            return (
              <Option key={item.mahuyen} value={item.mahuyen}>
                {item.ten}
              </Option>
            );
          })}
      </Select>
    </Form.Item>
  );
}
