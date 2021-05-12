import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import './Status.scss';
import { useSelector } from 'react-redux';
import {
  selectCurrentDialogID,
  selectAllDialogs,
  selectUserData,
} from 'redux/selectors';

const Status = () => {
  const currentDialogID = useSelector(selectCurrentDialogID);
  const user = useSelector(selectUserData);
  const allDialogs = useSelector(selectAllDialogs);

  if (!allDialogs || !currentDialogID) {
    return <div />;
  }
  const currentDialogObj = allDialogs.find(
    (dialog) => dialog._id === currentDialogID,
  );

  const partner =
    currentDialogObj.author._id === user._id
      ? currentDialogObj.partner
      : currentDialogObj.author;

  return (
    <div className="chat__dialog-header-content">
      <b className="chat__dialog-username">{partner.fullname}</b>
      <div className="chat__dialog-status">
        <div
          className={classNames('status ', {
            'status-online': partner.isOnline,
          })}>
          {partner.isOnline ? 'online' : 'offline'}
        </div>
      </div>
    </div>
  );
};

Status.propTypes = {
  online: PropTypes.bool,
};

export default Status;
