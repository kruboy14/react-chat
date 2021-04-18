import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import './Status.scss';

const Status = ({ online }) => {
  return (
    <div className={classNames('status ', { 'status-online': online })}>
      {online ? 'online' : 'offline'}
    </div>
  );
};

Status.propTypes = {
  online: PropTypes.bool,
};

export default Status;
