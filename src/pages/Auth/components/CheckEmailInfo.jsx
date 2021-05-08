import { Result } from 'antd';
import React from 'react';

import './CheckEmailInfo.scss';
import { Block } from 'components';
import userApi from '../../../utils/api/user';
import { useEffect } from 'react';
import { useState } from 'react';
import { canInstrument } from 'babel-jest';

const renderTextInfo = ({ hash, verified }) => {
  if (hash) {
    if (verified) {
      return {
        status: 'success',
        title: 'Success!',
        message: 'Account confirmed',
      };
    } else {
      return {
        status: 'error',
        title: 'Error',
        message: 'Invalid hash',
      };
    }
  } else {
    return {
      status: 'info',
      title: 'Confirmation',
      message: 'Please check your email for a confirmation link…',
    };
  }
};

const CheckEmailInfo = ({ location }) => {
  const [verified, setVerify] = useState(false);
  const hash = location.search.split('hash=')[1];
  const info = renderTextInfo(hash, verified);
  useEffect(() => {
    async function checkHash() {
      const { data } = await userApi.verifyHash(hash);
      if (hash) {
        if (data.status === 'success') {
          setVerify(true);
        }
      }
    }
    checkHash();
  }, [hash]);
  return (
    <div>
      <div className="auth__top"></div>
      <Block>
        <Result
          className="auth__confirmation"
          status={info.status}
          title={info.title}
          subTitle={info.message}
        />
        ,
      </Block>
    </div>
  );
};

export default CheckEmailInfo;
