import React from 'react';
import PropTypes from 'prop-types';
import { Empty, Modal, Spin } from 'antd';
import { Message } from '..';
import { LoadingOutlined } from '@ant-design/icons';

const Messages = ({
  scrollRef,
  isLoading,
  items,
  user,
  previewImage,
  setPreviewImage,
}) => {
  return (
    <div ref={scrollRef} className="chat__dialog-messages-box">
      {isLoading ? (
        <Spin
          className="messages-spin"
          tip="Loading messages"
          indicator={<LoadingOutlined style={{ fontSize: 32 }} spin />}
        />
      ) : items ? (
        items.length > 0 ? (
          items.map((item) => (
            <Message
              key={item._id}
              {...item}
              isMe={user._id === item.user._id}
              id={item._id}
              setPreviewImage={setPreviewImage}
              audio={item.attachments[0]?.ext === 'webm' || item.attachments[0]?.ext === 'ogg'}
            />
          ))
        ) : (
          <Empty description="No message" />
        )
      ) : (
        <Empty description="Open dialog" />
      )}
      <Modal
        className="messages-modal-photo"
        visible={!!previewImage}
        onCancel={() => setPreviewImage(null)}
        footer={null}>
        <img src={previewImage} style={{ width: '100%' }} alt="Preview" />
      </Modal>
    </div>
  );
};
Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
