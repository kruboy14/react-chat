import React from 'react';
import {
  TeamOutlined,
  FormOutlined,
  SearchOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import { Dialogs, Message } from '../../components';
import { Input } from 'antd';

const Home = () => {
  const [messageSearch, setMessageSearch] = React.useState('');
  return (
    <div className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div className="chat__sidebar-header-left">
              <TeamOutlined />
              <span className="chat__sidebar-header-text">List of contacts</span>
            </div>
            <FormOutlined />
          </div>
          <div className="chat__sidebar-search">
            <Input
              placeholder="Message Search"
              // onChange={(event) => setMessageSearch(event.target.value)}
              prefix={<SearchOutlined />}
              // value={messageSearch}
            />
          </div>
          <div className="chat__sidebar-dialogs">
            <Dialogs
              userID={'607b3097a3ff3c7b0cd5579c'}
              items={[
                {
                  user: {
                    _id: '607b3097a3ff3c7b0cd5579c',
                    fullname: 'Byrd Conner',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Proident laboris elit ex magna laborum. Dolor sint non irure pariatur eu labore excepteur.',
                    isRead: false,
                    createdAt: 'Wed Sep 03 2023 11:35:22 GMT+0000 (UTC)',
                  },
                },
                {
                  user: {
                    _id: '607b30976eda9ee421815282',
                    fullname: 'Nita Rosales',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Lorem aute officia sit tempor incididunt duis incididunt incididunt. Sit velit ipsum ad laborum.',
                    isRead: true,
                    createdAt: 'Thu May 16 1985 23:49:08 GMT+0000 (UTC)',
                  },
                },
                {
                  user: {
                    _id: '607b30972ade0cc5b7bf4d5d',
                    fullname: 'Sweeney Woodward',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Irure reprehenderit exercitation occaecat non quis laboris. Irure minim sint nulla tempor fugiat reprehenderit duis pariatur deserunt ullamco et.',
                    isRead: true,
                    createdAt: 'Tue May 25 1971 21:53:13 GMT+0000 (UTC)',
                  },
                },
                {
                  user: {
                    _id: '607b3097b74d10e372e68a3a',
                    fullname: 'Houston Abbott',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Enim nulla elit in cillum. Esse esse ad ea commodo excepteur consectetur enim aliquip pariatur cillum magna ex qui.',
                    isRead: true,
                    createdAt: 'Wed Jul 06 1994 00:48:52 GMT+0000 (UTC)',
                  },
                },
                {
                  user: {
                    _id: '607b3097a60b3e6487f5bc0f',
                    fullname: 'Graciela Knowles',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Dolore occaecat nulla nulla exercitation incididunt eu exercitation qui reprehenderit officia dolor laborum Lorem amet. Mollit tempor Lorem occaecat tempor sunt.',
                    isRead: false,
                    createdAt: 'Sun Oct 27 2013 22:48:42 GMT+0000 (UTC)',
                  },
                },
                {
                  user: {
                    _id: '607b3097220379afae9bad9e',
                    fullname: 'Mitzi Franklin',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Mollit voluptate aliquip voluptate ad minim nostrud. Consequat non cillum aliquip excepteur minim anim cupidatat est pariatur proident laboris ullamco cupidatat consectetur.',
                    isRead: true,
                    createdAt: 'Thu Jan 26 1984 10:37:01 GMT+0000 (UTC)',
                  },
                },
                {
                  user: {
                    _id: '607b30973a9050751510466f',
                    fullname: 'Letitia Odonnell',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Est exercitation ea laboris laborum occaecat sit veniam eiusmod esse. Amet magna proident laboris sit commodo sint anim.',
                    isRead: true,
                    createdAt: 'Sun Jul 06 2014 03:02:43 GMT+0000 (UTC)',
                  },
                },
                {
                  user: {
                    _id: '607b3097aa2e1eb82cf7d1f0',
                    fullname: 'Jenny Mejia',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Fugiat tempor quis adipisicing labore anim pariatur laborum reprehenderit incididunt. Incididunt nisi dolore ipsum culpa labore sit nulla dolor consectetur ex amet consequat ullamco tempor.',
                    isRead: true,
                    createdAt: 'Tue Jun 29 2010 19:26:13 GMT+0000 (UTC)',
                  },
                },
                {
                  user: {
                    _id: '607b30970d98867ff4d9a326',
                    fullname: 'Stokes Carey',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Elit non enim Lorem id occaecat nostrud ex et exercitation adipisicing sunt id quis elit. Mollit ad laborum tempor eu magna dolore enim reprehenderit.',
                    isRead: false,
                    createdAt: 'Sun Feb 06 1994 06:26:17 GMT+0000 (UTC)',
                  },
                },
                {
                  user: {
                    _id: '607b3097edc73a2694f7ba9f',
                    fullname: 'Isabelle Hodge',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Sit velit ut duis ut Lorem ea labore proident cillum. Deserunt non voluptate elit consequat deserunt magna commodo sunt magna.',
                    isRead: false,
                    createdAt: 'Sat Dec 05 1981 09:20:08 GMT+0000 (UTC)',
                  },
                },
                {
                  user: {
                    _id: '607b30973d2e4ed57c20540d',
                    fullname: 'Candace Workman',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Laboris magna cillum laborum laborum nisi est amet commodo reprehenderit irure incididunt mollit et. Incididunt labore consectetur velit reprehenderit do.',
                    isRead: false,
                    createdAt: 'Tue Jul 20 1971 20:35:24 GMT+0000 (UTC)',
                  },
                },
                {
                  user: {
                    _id: '607b3097866c7258561f002b',
                    fullname: 'Holden Kirby',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Irure ullamco adipisicing officia in proident enim labore commodo duis. Sit cupidatat dolor cillum eiusmod reprehenderit sunt ea aliquip excepteur.',
                    isRead: true,
                    createdAt: 'Sun Mar 18 1984 10:02:29 GMT+0000 (UTC)',
                  },
                },
                {
                  user: {
                    _id: '607b30975500b22d5bd1a201',
                    fullname: 'Cox Hodges',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Excepteur nostrud aliqua duis nulla dolor in elit laboris aute pariatur. Culpa Lorem dolor dolore nulla cupidatat.',
                    isRead: true,
                    createdAt: 'Mon Oct 27 1980 22:13:28 GMT+0000 (UTC)',
                  },
                },
                {
                  user: {
                    _id: '607b3097fc898d820c906ab2',
                    fullname: 'Hurst Wheeler',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Tempor excepteur culpa eu et commodo. Qui irure officia excepteur laboris voluptate elit occaecat elit.',
                    isRead: true,
                    createdAt: 'Tue Dec 27 2016 19:15:35 GMT+0000 (UTC)',
                  },
                },
                {
                  user: {
                    _id: '607b3097f90b977e89b62695',
                    fullname: 'Baird Hansen',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Proident ex velit cupidatat anim in excepteur magna aliquip officia deserunt consectetur veniam qui. Consectetur dolore nisi quis nulla nisi proident aliquip nulla ipsum.',
                    isRead: false,
                    createdAt: 'Sun May 08 1983 02:40:09 GMT+0000 (UTC)',
                  },
                },
                {
                  user: {
                    _id: '607b3097ebccd007acfb6d37',
                    fullname: 'Ines Whitley',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Anim aute mollit ex ullamco fugiat id exercitation tempor elit culpa labore velit culpa. Aliqua dolor consequat eu ex aute.',
                    isRead: true,
                    createdAt: 'Sun Jan 25 1970 08:53:06 GMT+0000 (UTC)',
                  },
                },
                {
                  user: {
                    _id: '607b3097c3da5e1f1ab0fb32',
                    fullname: 'Fleming Witt',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Velit adipisicing labore eu Lorem cupidatat sint adipisicing tempor fugiat enim irure esse ex. Tempor incididunt duis proident laborum consequat ipsum laborum proident.',
                    isRead: false,
                    createdAt: 'Fri May 02 1986 20:07:56 GMT+0000 (UTC)',
                  },
                },
                {
                  user: {
                    _id: '607b30977811c063ebdad5dd',
                    fullname: 'Loraine Melton',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Exercitation pariatur irure laboris sit sit et laboris. Ullamco id occaecat esse sunt ea aute exercitation Lorem esse.',
                    isRead: false,
                    createdAt: 'Thu Jun 10 1976 18:38:57 GMT+0000 (UTC)',
                  },
                },
                {
                  user: {
                    _id: '607b3097a09fa713e074c6bd',
                    fullname: 'Tiffany Ellis',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Reprehenderit est elit ea voluptate ipsum ex magna aute quis. Culpa exercitation et velit irure laboris aliqua do minim exercitation incididunt.',
                    isRead: false,
                    createdAt: 'Thu Apr 28 1988 05:49:58 GMT+0000 (UTC)',
                  },
                },
                {
                  user: {
                    _id: '607b3097951c4c96abd2ca70',
                    fullname: 'Lara Roth',
                    avatar: null,
                  },
                  lastMessage: {
                    text:
                      'Reprehenderit est minim enim et deserunt ex deserunt et commodo Lorem quis occaecat Lorem exercitation. Ullamco qui proident cupidatat aute pariatur.',
                    isRead: false,
                    createdAt: 'Wed Apr 03 2019 08:48:09 GMT+0000 (UTC)',
                  },
                },
              ]}
            />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div></div>
            <div className="chat__dialog-header-content">
              <b className="chat__dialog-username">Artem Minist</b>
              <div className="chat__dialog-status">
                <div className="status status-online">online</div>
              </div>
            </div>
            <EllipsisOutlined style={{ fontSize: '22px', cursor: 'pointer' }} />
          </div>
          <div className="chat__dialog-messages">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
