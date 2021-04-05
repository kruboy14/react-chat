import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Button, Block } from 'components';
import { Link } from 'react-router-dom';

const LoginForm = () => {
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
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}>
          <Form.Item
            name="username"
            hasFeedback
            validateStatus="success"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}>
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}>
            <Input
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link className="login-form-forgot">Forgot password</Link>
          </Form.Item>

          <Form.Item>
            <Button
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
