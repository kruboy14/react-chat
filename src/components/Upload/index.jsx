import React from 'react';
import Upload from 'rc-upload';

const uploadProp = {
  action: 'https://httpbin.org/post',
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
  onProgress: (step, file) => {
    console.log(Math.floor(step.percent), file.name);
  },
};

const MyUpload = ({ children }) => {
  return <Upload {...uploadProp}>{children}</Upload>;
};

export default MyUpload;
