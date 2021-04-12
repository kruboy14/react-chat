import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Button, Block } from 'components';
import { Link } from 'react-router-dom';
import { helpText, validStatus } from 'utils/helpers';

const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div>
      <div className="auth__top">
        <h2>Log in</h2>
        <p>please login into your account</p>
      </div>
      <Block>
        <Form
          name="normal_login"
          className="login-form"
          onSubmit={handleSubmit}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}>
          <Form.Item
            name="username"
            hasFeedback
            validateStatus={validStatus('username', touched, errors)}
            help={helpText('username', touched, errors)}>
            <Input
              id="username"
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
          </Form.Item>
          <Form.Item
            name="password"
            hasFeedback
            validateStatus={validStatus('password', touched, errors)}
            help={helpText('password', touched, errors)}>
            <Input
              id="password"
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link className="login-form-forgot">Forgot password</Link>
          </Form.Item>

          <Form.Item>
            <Button
              onClick={handleSubmit}
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Log in
            </Button>
            <Link className="auth__register-link" to="/register">
              Register now!
            </Link>
          </Form.Item>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;
