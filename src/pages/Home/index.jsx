import React from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { ChatInput, Status, Sidebar } from '../../components';
import { Button, Empty } from 'antd';
import './Home.scss';
import { Messages } from '../../containers';
import { selectCurrentDialogID } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { dialogsActions } from '../../redux/actions';
const Home = () => {
  const currentDialogID = useSelector(selectCurrentDialogID);
  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const dialogId = location.pathname.split('/').pop();
    dispatch(dialogsActions.setCurrentDialogID(dialogId));
  }, [location.pathname, dispatch]);
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
            {currentDialogID ? (
              <Messages />
            ) : (
              <Empty description="Open dialog" />
            )}
          </div>
          <div className="chat__dialog-input">
            {currentDialogID && <ChatInput />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
