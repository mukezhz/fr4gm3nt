import React, { useState, useEffect } from "react";
import { Form, Select, Row, Button } from "antd";

import { mock } from "../../mock";
import { fetchForm } from "../../services/api";
import { Builder } from "./Builder";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const FormView = () => {
  const [form, setForm] = useState(null);
  useEffect(() => {
    fetchForm().then((data) => {
      console.log(data);
      setForm(data);
    });
  }, []);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  console.log(form);
  // mock.form.forEach(d=>console.log(d));
  return (
    <React.Fragment>
      {form ? (
        <Form
          name="validate_other"
          {...formItemLayout}
          onFinish={onFinish}
          initialValues={{}}
        >
          <h1>{form.formName}</h1>
          {form.formData.map((data) => {
            return (
              <div key={data.id}>
                <h1>{data.heading}</h1>
                <Row gutter={[12, 12]}>
                  <Builder fields={data.fields} />
                </Row>
              </div>
            );
          })}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <h1>Loading...</h1>
      )}
    </React.Fragment>
  );
};

export default FormView;
