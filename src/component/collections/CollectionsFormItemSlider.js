import { Form, Slider } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

export function CollectionsFormItemSlider({ queryList }) {
  const handlerOnChange = (e) => {
    queryList();
  };
  return (
    <Form.Item name='range'>
      <Slider
        range={{ draggableTrack: true }}
        defaultValue={[0, 2000000]}
        max={2000000}
        min={0}
        step={50000}
        onAfterChange={handlerOnChange}
      />
    </Form.Item>
  );
}
