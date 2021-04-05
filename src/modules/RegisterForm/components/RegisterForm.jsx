import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';

import { Button, Block } from 'components';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [registerDone, setRegisterDone] = React.useState(true);
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div>
      <div className="auth__top">
        <h2>Registration</h2>
        <p>Create your account to continue </p>
      </div>
      <Block>
        {registerDone ? (
          <div className="auth__success-block">
            <div className="auth__success__icon">
            <InfoCircleTwoTone style={{ fontSize: '50px' }}/>
            </div>
            <h2>Confirm your account</h2>
            <p>We have sent an email with a confirmation link to your email address</p>
          </div>
        ) : (
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}>
            <Form.Item
              name="email"
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
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="E-mail"
              />
            </Form.Item>
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
            <Form.Item
              name="password_2"
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
                placeholder="Repeat password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button">
                Register now!
              </Button>
              <Link className="auth__register-link" to="/login">
                Log in
              </Link>
            </Form.Item>
          </Form>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;
