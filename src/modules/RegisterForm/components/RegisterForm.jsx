import React from 'react';
import { Form, Input } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  InfoCircleTwoTone,
} from '@ant-design/icons';

import { Button, Block } from 'components';
import { Link } from 'react-router-dom';

const RegisterForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  console.log(values);
  const [registerDone, setRegisterDone] = React.useState(false);
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
              <InfoCircleTwoTone style={{ fontSize: '50px' }} />
            </div>
            <h2>Confirm your account</h2>
            <p>
              We have sent an email with a confirmation link to your email
              address
            </p>
          </div>
        ) : (
          <Form
            name="normal_login"
            className="login-form"
            onSubmit={handleSubmit}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}>
            <Form.Item
              name="email"
              hasFeedback
              validateStatus={
                !touched.email ? '' : errors.email ? 'error' : 'success'
              }
              help={!touched.email ? undefined : errors.email}>
              <Input
                id="email"
                size="large"
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="E-mail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </Form.Item>
            <Form.Item
              name="username"
              hasFeedback
              validateStatus={
                !touched.username ? '' : errors.username ? 'error' : 'success'
              }
              help={!touched.username ? undefined : errors.username}>
              <Input
                id="username"
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </Form.Item>
            <Form.Item
              name="password"
              hasFeedback
              validateStatus={
                !touched.password ? '' : errors.password ? 'error' : 'success'
              }
              help={!touched.password ? undefined : errors.password}>
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
            <Form.Item
              name="password2"
              hasFeedback
              validateStatus={
                !touched.password2 ? '' : errors.password2 ? 'error' : 'success'
              }
              help={
                !touched.password2 ? undefined : errors.password2
              }>
              <Input
                id="password2"
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password2}
                placeholder="Repeat password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                onClick={handleSubmit}
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
