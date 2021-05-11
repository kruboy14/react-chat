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
import validation from 'utils/validations';

import { FormItem } from '../../../components';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../redux/actions';

const RegisterForm = () => {
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
      fullname: '',
      password: '',
      password2: '',
    },
    validate: (values) => {
      const errors = {};

      validation({ isAuth: false, values, errors });

      return errors;
    },

    onSubmit: async (values, { setSubmitting }) => {
      try {
        await dispatch(userActions.fetchUserRegister(values));
        setSubmitting(false);
      } catch (error) {
        console.log('err', error);
      }
    },
  });
  const dispatch = useDispatch();

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
            onFinish={onFinish}>
            <FormItem
              name="email"
              placeholder="E-mail"
              touched={touched}
              errors={errors}
              values={values}
              Icon={MailOutlined}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <FormItem
              name="username"
              placeholder="Username"
              touched={touched}
              errors={errors}
              values={values}
              Icon={UserOutlined}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <FormItem
              name="password"
              placeholder="Password"
              type="password"
              touched={touched}
              errors={errors}
              values={values}
              Icon={LockOutlined}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <FormItem
              name="password2"
              placeholder="Repeat password"
              type="password"
              touched={touched}
              errors={errors}
              values={values}
              Icon={LockOutlined}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />

            <Form.Item>
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
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
