import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentDialogID, selectAttachments } from 'redux/selectors';
import { messagesActions } from 'redux/actions';

import { ChatInput as BaseChatInput } from '../components';
import { attachmentsActions } from '../redux/actions';
const СhatInput = () => {
  const [value, setValue] = React.useState('');
  const attachments = useSelector(selectAttachments).map(item => item._id);
 
  const [emojiPickerVisible, setEmojiPickerVisible] = React.useState(false);

  const toggleEmojiPicker = () => setEmojiPickerVisible(!emojiPickerVisible);
  const dispatch = useDispatch();
  const currentDialogID = useSelector(selectCurrentDialogID);

  const handleSendMsg = async (e) => {
    if (e.key === 'Enter' && value.length > 1) {
      await dispatch(messagesActions.fetchSendMessage(value, currentDialogID, attachments));
      dispatch(attachmentsActions.clear())
      setValue('');
    }
  };
  const handleSendMsgBtn = async (e) => {
    await dispatch(messagesActions.fetchSendMessage(value, currentDialogID, attachments));
    dispatch(attachmentsActions.clear())
    setValue('');
  };

  const hanldeEmojiSelect = ({ colons }) => {
    setValue(value + colons);
  };
  const handleOutsideClick = (e) => {
    const el = document.querySelector('.chat-input__smile');
    if (el && !el.contains(e.target)) {
      setEmojiPickerVisible(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [currentDialogID]);

  return (
    <BaseChatInput
      value={value}
      setValue={setValue}
      attachments={attachments}
      emojiPickerVisible={emojiPickerVisible}
      toggleEmojiPicker={toggleEmojiPicker}
      handleSendMsg={handleSendMsg}
      handleSendMsgBtn={handleSendMsgBtn}
      hanldeEmojiSelect={hanldeEmojiSelect}></BaseChatInput>
  );
};

export default СhatInput;
