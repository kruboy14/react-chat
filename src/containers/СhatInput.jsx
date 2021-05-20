import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentDialogID, selectAttachments } from 'redux/selectors';
import { messagesActions } from 'redux/actions';

import { ChatInput as BaseChatInput } from '../components';
import { attachmentsActions } from '../redux/actions';
const СhatInput = ({ setchecker }) => {
  const [value, setValue] = React.useState('');
  const [isRecording, setIsRecording] = React.useState(false);
  const [mediaRecorder, setMediaRecorder] = React.useState(null);
  const attachments = useSelector(selectAttachments).map((item) => item._id);

  const [emojiPickerVisible, setEmojiPickerVisible] = React.useState(false);

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
    const recorder = new MediaRecorder(stream);
    setMediaRecorder(recorder);

    recorder.start();

    recorder.onstart = () => {
      setIsRecording(true);
    };

    recorder.onstop = () => {
      setIsRecording(false);
    };

    recorder.ondataavailable = (e) => {
      const audioURL = window.URL.createObjectURL(e.data);
      new Audio(audioURL).play();
      // const file = new File([e.data], 'audio.webm');
      // setLoading(true);
      // filesApi.upload(file).then(({ data }) => {
      //   sendAudio(data.file._id).then(() => {
      //     setLoading(false);
      //   });
      // });
    };
  };

  const onError = (err) => {
    console.log('The following error occured: ' + err);
  };

  const handleStopRecording = () => {
    mediaRecorder.stop();
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
