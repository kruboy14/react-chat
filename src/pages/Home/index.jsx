import React from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Status, Sidebar } from '../../components';
import { ChatInput } from '../../containers';
import { Button, Empty } from 'antd';
import './Home.scss';
import { Messages } from '../../containers';
import { selectCurrentDialogID } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { dialogsActions } from '../../redux/actions';
const Home = () => {
  const currentDialogID = useSelector(selectCurrentDialogID);
  const [inputHeight, setinputHeight] = React.useState(null);
  const [checker, setchecker] = React.useState(0);
  const location = useLocation();
  const dispatch = useDispatch();
  const chatInputRef = React.createRef();
  // TODO: dynamic height of input component

  React.useEffect(() => {
    setinputHeight(chatInputRef.current.clientHeight);
  }, [chatInputRef, checker]);
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
            {currentDialogID && currentDialogID !== "dialog" && <Status />}
            {currentDialogID && (
              <Button type="text" icon={<EllipsisOutlined />} />
            )}
          </div>
          <div
            className="chat__dialog-messages"
            style={{
              height: `calc(100% - ${
                inputHeight && checker !== 0 ? '275px' : '175px'
              })`,
            }}>
            {currentDialogID  && currentDialogID !== "dialog" ? (
              <Messages />
            ) : (
              <Empty description="Open dialog" />
            )}
          </div>
          <div ref={chatInputRef} className="chat__dialog-input">
            {currentDialogID && <ChatInput setchecker={setchecker} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
