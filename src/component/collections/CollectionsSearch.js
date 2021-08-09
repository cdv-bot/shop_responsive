import { Form } from 'antd';
import React, { useEffect } from 'react';
import './CollectionsSearch.scss';
import { CollectionsFormItemSlider } from './CollectionsFormItemSlider';
import { CollectionsFormItemSize } from './CollectionsFormItemSize';
import { CollectionsFormItemColor } from './CollectionsFormItemColor';
import { formatMoneyPoint } from '../../utils/common';
export default function CollectionsSearch({ filerData }) {
  const [form] = Form.useForm();
  useEffect(() => {
    queryList();
  }, []);
  const onFinish = (e) => {
    filerData(e);
  };

  const queryList = () => {
    form.submit();
  };
  return (
    <Form
      name='collection'
      form={form}
      onFinish={onFinish}
      initialValues={{
        range: [0, 2000000],
        size: [],
      }}>
      <div>
        <b>Giá: </b>
        <p>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.province !== currentValues.province
            }>
            {({ getFieldValue }) => (
              <>
                Giá từ:{' '}
                <span>{formatMoneyPoint(getFieldValue('range')[0]) || 0}VND</span> -
                <span> {formatMoneyPoint(getFieldValue('range')[1])}VND</span>
              </>
            )}
          </Form.Item>
        </p>
        <CollectionsFormItemSlider queryList={queryList} />
      </div>
      <Form.Item name='size'>
        <CollectionsFormItemSize queryList={queryList} />
      </Form.Item>
      <b>Màu sắc:</b>
      <Form.Item name='color'>
        <CollectionsFormItemColor queryList={queryList} />
      </Form.Item>
    </Form>
  );
}
