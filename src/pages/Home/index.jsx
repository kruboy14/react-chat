import React from 'react';
import { Dialogs, Message } from '../../components';

const Home = () => {
  return (
    <div className="home">
      <Dialogs
        userID={1}
        items={[
          {
            user: {
              fullname: 'Artem Ministr',
              avatar: null,
              _id: "5ca2aa845c8cd5ace6b016841f100d82",
            },
            lastMessage: {
              text:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
              isRead: false,
              createdAt: 'Tue Apr 2 2021 18:11:33',
            },
          },
          {
            user: {
              fullname: 'Andrew Ministr',
              avatar: null,
              _id: "52a2aa845c8cd5ace6b016841f100d82",
            },
            lastMessage: {
              text: '2222222222222',
              isRead: false,
              createdAt: 'Tue Apr 1 2021 18:11:33',
            },
          },
          {
            user: {
              fullname: 'Artem Ministr',
              avatar: "https://99px.ru/sstorage/1/2010/04/image_10704101336437444814.jpg",
              _id: "1ca2aa845c8cd5ace6b016841f100d82",
            },
            lastMessage: {
              text: '33333333333333333333333333333333333',
              isRead: false,
              createdAt: 'Tue Apr 3 2021 18:11:33',
            },
          },
        ]}
      />
      <Message
        avatar="https://99px.ru/sstorage/1/2010/04/image_10704101336437444814.jpg"
        date="Tue Apr 06 2021 13:21:31 GMT+0300 (Восточная Европа, летнее время)"
        audio="https://notificationsounds.com/storage/sounds/file-de_vuvuzela-power-down.mp3"
      />

      {/* <Message
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
      /> */}
    </div>
  );
};

export default Home;
