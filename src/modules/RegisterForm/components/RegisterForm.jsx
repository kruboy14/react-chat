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
import { helpText, validStatus } from 'utils/helpers';

const RegisterForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  

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
              validateStatus={validStatus('email', touched, errors)}
              help={helpText('email', touched, errors)}>
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
              validateStatus={validStatus('username', touched, errors)}
              help={helpText('username', touched, errors)}>
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
            <Form.Item
              name="password2"
              hasFeedback
              validateStatus={validStatus('password2', touched, errors)}
              help={helpText('password2', touched, errors)}>
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
