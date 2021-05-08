import React from 'react';

import './Auth.scss';
import { LoginForm, RegisterForm } from '../../modules';
import { Route } from 'react-router-dom';
import CheckEmailInfo from './components/CheckEmailInfo';

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Route exact path={['/', '/login']} component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/register/verify" component={CheckEmailInfo} />
      </div>
    </section>
  );
};

export default Auth;
