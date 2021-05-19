import React from 'react';
import Upload from 'rc-upload';
import { filesApi } from '../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { selectAttachments } from '../../redux/selectors';
import { attachmentsActions } from '../../redux/actions';

const MyUpload = ({ children }) => {
  const attachments = useSelector(selectAttachments);
  const dispatch = useDispatch();
  const uploadProp = {
    accept: '.gif, .png, .jpeg, .pdf, .jpg',

    style: { width: '32px', marginRight: '5px' },
    multiple: true,
    onStart: () => {
      console.log('>>> onStart');
    },
    onSuccess: () => {
      console.log('>>> onSuccess');
    },
    onError: (err, responce, file) => {
      console.log('onError', err, file);
    },
    beforeUpload: (file) => {
      console.log(file.type, file.name);
    },
    onProgress({ percent }, file) {
      console.log('onProgress', `${percent}%`, file.name);
    },

    async customRequest({ data, file, filename }) {
      const res = await filesApi.upload(file);
  
      dispatch(attachmentsActions.addAttachment(res.data.file));
      return {
        abort() {
          console.log('upload progress is aborted.');
        },
      };
    },
  };

  return <Upload {...uploadProp}>{children}</Upload>;
};

export default MyUpload;
