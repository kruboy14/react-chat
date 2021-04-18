import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';
import { Message } from '..';

const Messages = ({ items }) => {
  return items ? (
    <div>
      <Message
        avatar="https://99px.ru/sstorage/1/2010/04/image_10704101336437444814.jpg"
        date="Tue Apr 06 2021 13:21:31 GMT+0300 (Восточная Европа, летнее время)"
        audio="https://notificationsounds.com/storage/sounds/file-de_vuvuzela-power-down.mp3"
      />

      <Message
        avatar="https://99px.ru/sstorage/1/2010/04/image_10704101336437444814.jpg"
        text="Hello! What's up?"
        date="Tue Apr 06 2021 13:21:31 GMT+0300 (Восточная Европа, летнее время)"
        attachments={[
          {
            filename: 'first.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1nature',
          },
          {
            filename: 'second.jpg',
            url: 'https://source.unsplash.com/100x100/?random=2nature',
          },
        ]}
        isRead={true}
      />
      <Message
        avatar="https://muratselek.com.tr/wp-content/uploads/2019/01/yorum-icon-avatar.png"
        text="WOW DUDE! it's you!"
        date="Tue Apr 06 2021 13:31:31 GMT+0300 (Восточная Европа, летнее время)"
        isMe={true}
        isRead={false}
      />
      <Message
        avatar="https://muratselek.com.tr/wp-content/uploads/2019/01/yorum-icon-avatar.png"
        isTyping={true}
      />
      <Message
        avatar="https://muratselek.com.tr/wp-content/uploads/2019/01/yorum-icon-avatar.png"
        attachments={[
          {
            filename: 'first.jpg',
            url: 'https://source.unsplash.com/150x150/?random=3nature',
          },
        ]}
      />
      <Message
        avatar="https://99px.ru/sstorage/1/2010/04/image_10704101336437444814.jpg"
        text="Hello! What's up?"
        date="Tue Apr 06 2021 13:21:31 GMT+0300 (Восточная Европа, летнее время)"
        attachments={[
          {
            filename: 'first.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1nature',
          },
          {
            filename: 'second.jpg',
            url: 'https://source.unsplash.com/100x100/?random=2nature',
          },
        ]}
        isRead={true}
      />
      <Message
        avatar="https://muratselek.com.tr/wp-content/uploads/2019/01/yorum-icon-avatar.png"
        text="WOW DUDE! it's you!"
        date="Tue Apr 06 2021 13:31:31 GMT+0300 (Восточная Европа, летнее время)"
        isMe={true}
        isRead={false}
      />
      <Message
        avatar="https://99px.ru/sstorage/1/2010/04/image_10704101336437444814.jpg"
        text="Hello! What's up?"
        date="Tue Apr 06 2021 13:21:31 GMT+0300 (Восточная Европа, летнее время)"
        attachments={[
          {
            filename: 'first.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1nature',
          },
          {
            filename: 'second.jpg',
            url: 'https://source.unsplash.com/100x100/?random=2nature',
          },
        ]}
        isRead={true}
      />
      <Message
        avatar="https://muratselek.com.tr/wp-content/uploads/2019/01/yorum-icon-avatar.png"
        text="WOW DUDE! it's you!"
        date="Tue Apr 06 2021 13:31:31 GMT+0300 (Восточная Европа, летнее время)"
        isMe={true}
        isRead={false}
      />
      <Message
        avatar="https://99px.ru/sstorage/1/2010/04/image_10704101336437444814.jpg"
        text="Hello! What's up?"
        date="Tue Apr 06 2021 13:21:31 GMT+0300 (Восточная Европа, летнее время)"
        attachments={[
          {
            filename: 'first.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1nature',
          },
          {
            filename: 'second.jpg',
            url: 'https://source.unsplash.com/100x100/?random=2nature',
          },
        ]}
        isRead={true}
      />
      <Message
        avatar="https://muratselek.com.tr/wp-content/uploads/2019/01/yorum-icon-avatar.png"
        text="WOW DUDE! it's you!"
        date="Tue Apr 06 2021 13:31:31 GMT+0300 (Восточная Европа, летнее время)"
        isMe={true}
        isRead={false}
      />
    </div>
  ) : (
    <Empty description="No message" />
  );
};
Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
