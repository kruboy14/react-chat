import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentDialogID, selectAttachments } from 'redux/selectors';
import { messagesActions } from 'redux/actions';

import { ChatInput as BaseChatInput } from '../components';
import { attachmentsActions } from '../redux/actions';
import { filesApi } from '../utils/api';



const СhatInput = ({ setchecker }) => {
  const [value, setValue] = React.useState('');
  const [isRecording, setIsRecording] = React.useState(false);
  const [mediaRecorder, setMediaRecorder] = React.useState(null);
  const attachments = useSelector(selectAttachments).map((item) => item._id);

  const [emojiPickerVisible, setEmojiPickerVisible] = React.useState(false);
  const [LoadingAudio, setLoadingAudio] = React.useState(false);

  const toggleEmojiPicker = () => setEmojiPickerVisible(!emojiPickerVisible);
  const dispatch = useDispatch();
  const currentDialogID = useSelector(selectCurrentDialogID);

  const handleSendMsg = async (e) => {
    if (e.key === 'Enter' && value.length > 1) {
      await dispatch(
        messagesActions.fetchSendMessage(value, currentDialogID, attachments),
      );
      dispatch(attachmentsActions.clear());
      setValue('');
    }
  };
  const handleSendMsgBtn = async (e) => {
    if(isRecording) {
     return mediaRecorder.stop();
    }
    await dispatch(
      messagesActions.fetchSendMessage(value, currentDialogID, attachments),
    );
    dispatch(attachmentsActions.clear());
    setValue('');
  };

  window.navigator.getUserMedia =
    window.navigator.getUserMedia ||
    window.navigator.mozGetUserMedia ||
    window.navigator.msGetUserMedia ||
    window.navigator.webkitGetUserMedia;

  const onRecord = () => {
    if (navigator.getUserMedia) {
      navigator.getUserMedia({ audio: true }, onRecording, onError);
    }
  };
  
  const onRecording = (stream) => {
    const recorder = new MediaRecorder(stream, {audioBitsPerSecond : 128000});
    setMediaRecorder(recorder);

    recorder.start();

    recorder.onstart = () => {
      setIsRecording(true);
  
    };

    recorder.onstop = () => {
      setIsRecording(false);
 
    };

    recorder.ondataavailable = async (e) => {
      const file = new File([e.data], "audio", {type: 'audio/ogg'});
      setLoadingAudio(true);
      const { data } = await filesApi.upload(file);
      dispatch(messagesActions.fetchSendMessage(value, currentDialogID, data.file));
      setLoadingAudio(false);
    };
  };

  const onError = (err) => {
    console.log('The following error occured: ' + err);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
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
      setchecker={setchecker}
      isRecording={isRecording}
      handleStopRecording={handleStopRecording}
      onRecord={onRecord}
      value={value}
      setValue={setValue}
      emojiPickerVisible={emojiPickerVisible}
      toggleEmojiPicker={toggleEmojiPicker}
      handleSendMsg={handleSendMsg}
      handleSendMsgBtn={handleSendMsgBtn}
      hanldeEmojiSelect={hanldeEmojiSelect}></BaseChatInput>
  );
};

export default СhatInput;
