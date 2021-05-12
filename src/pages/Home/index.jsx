import React from 'react';
import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import { ChatInput, Status } from '../../components';
import { Button } from 'antd';
import './Home.scss';
import { Messages, Dialogs } from '../../containers';

const Home = () => {
  return (
    <div className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div className="chat__sidebar-header-left">
              <TeamOutlined />
              <span className="chat__sidebar-header-text">
                List of contacts
              </span>
            </div>
            <Button type="text" icon={<FormOutlined />} />
          </div>

          <div className="chat__sidebar-dialogs">
            <Dialogs userID={'607b3097a3ff3c7b0cd5579c'} />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div></div>
            <Status />
            <Button type="text" icon={<EllipsisOutlined />} />
          </div>
          <div className="chat__dialog-messages">
            <Messages />
          </div>
          <div className="chat__dialog-input">
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
