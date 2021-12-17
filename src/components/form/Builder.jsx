import React from "react";
import { Input, Form, Select, Col } from "antd";
const { Option } = Select;

export const Builder = ({ fields }) => {
  return fields.map((data) => {
    switch (data.type) {
      case "input":
        return (
          <Col span={12}>
            <Form.Item
              label={data.name}
              name={data.name}
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        );
      case "dropdown":
        return (
          <Col span={12}>
            <Form.Item
              name={data.name}
              label={data.name}
              rules={[{ required: true }]}
            >
              <Select placeholder={data.placeholder} onChange={this} allowClear>
                {data.values.map((data) => (
                  <Option value={data} key={data}>
                    {data}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        );
      default:
        <>blank</>;
    }
  });
};
