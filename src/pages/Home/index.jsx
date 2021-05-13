import React from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { ChatInput, Status, Sidebar } from '../../components';
import { Button } from 'antd';
import './Home.scss';
import { Messages } from '../../containers';
import { selectCurrentDialogID } from 'redux/selectors';
import { useSelector } from 'react-redux';
const Home = () => {
  const currentDialogID = useSelector(selectCurrentDialogID);
  return (
    <div className="home">
      <div className="chat">
        <Sidebar />
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div></div>
            <Status />
            {currentDialogID && (
              <Button type="text" icon={<EllipsisOutlined />} />
            )}
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
