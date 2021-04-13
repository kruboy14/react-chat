import React from 'react';
import DialogItem from '../../components/DialogItem';
import Message from '../../components/Message';

const Home = () => {
  return (
    <div className="home">
      <DialogItem
        user={{
          fullname: 'Artem Ministr',
          isOnline: true,
        }}
        unread={5}
      />
      <DialogItem
        user={{
          fullname: 'Artem Ministr',
          isOnline: true,
        }}
      />
      <DialogItem
        user={{
          fullname: 'Artem Ministr',
          isOnline: true,
        }}
      />
      <DialogItem
        user={{
          fullname: 'Artem Ministr',
          isOnline: true,
        }}
      />
      {/* <Dialogs
        item={[
          {
            user: {
              fullname: 'Artem Ministr',
              avatar: null,
            },
            message: {
              text:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
              isReaded: 'sent',
              createdAt: new Date() 
            },
          },
        ]}
      /> */}
      {/* <Message
        avatar="https://99px.ru/sstorage/1/2010/04/image_10704101336437444814.jpg"
        text="Hello! What's up?"
        date={Date.parse(
          'Tue Apr 06 2021 13:21:31 GMT+0300 (Восточная Европа, летнее время)',
        )}
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
        isRead={'read'}
      />
      <Message
        avatar="https://muratselek.com.tr/wp-content/uploads/2019/01/yorum-icon-avatar.png"
        text="WOW DUDE! it's you!"
        date={Date.parse(
          'Tue Apr 06 2021 13:31:31 GMT+0300 (Восточная Европа, летнее время)',
        )}
        isMe={true}
        isRead={'sent'}
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
      /> */}
    </div>
  );
};

export default Home;
