import React from 'react';
import { Form, Input } from 'antd';
import { helpText, validStatus } from 'utils/helpers';

const FormItem = ({
  name,
  type,
  errors,
  touched,
  Icon,
  values,
  handleChange,
  handleBlur,
  placeholder
}) => {
  return (
    <Form.Item
      name={name}
      hasFeedback
      validateStatus={validStatus(name, touched, errors)}
      help={helpText(name, touched, errors)}>
      <Input
        id={name}
        type={type}
        size="large"
        prefix={<Icon className="site-form-item-icon" />}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
      />
    </Form.Item>
  );
};

export default FormItem;
