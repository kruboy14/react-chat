import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import validation from '../../../utils/validations';
import { Button, Block } from 'components';
import { Link } from 'react-router-dom';
import { helpText, validStatus } from 'utils/helpers';
import { useFormik } from 'formik';
import { userActions } from '../../../redux/actions';

const LoginForm = () => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const errors = {};
        validation({ isAuth: true, values, errors });

      return errors;
    },

    onSubmit: async (values, { setSubmitting }) => {
      try {
        await dispatch(userActions.fetchUserLogin(values));
        setSubmitting(false);
      } catch (error) {
        console.log(error);
      }
    },
  });
  const dispatch = useDispatch();
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
            name="email"
            hasFeedback
            validateStatus={validStatus('email', touched, errors)}
            help={helpText('email', touched, errors)}>
            <Input
              id="email"
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
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
          <Form.Item>
            <Form.Item name="remember" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link to="/" className="login-form-forgot">
              Forgot password
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
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
