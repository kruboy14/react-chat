import { Popover } from 'antd';
import React from 'react';

const MessagePopover = ({ children, isPopover, valuePopup, handleVisibleChange, deleteMessage }) => {
  if (isPopover) {
    return <Popover content={
      <a onClick={deleteMessage} href>
        Delete Message
      </a>
    }
    visible={valuePopup}
    trigger="contextMenu"
    onVisibleChange={handleVisibleChange}>{children}</Popover>;
  }

  return <>{children}</>;
};

export default MessagePopover;
