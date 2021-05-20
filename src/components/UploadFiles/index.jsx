import React from 'react';
import { Upload, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectAttachments } from '../../redux/selectors';
import { attachmentsActions } from '../../redux/actions';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const UploadFiles = ({setchecker}) => {
  const attachments = useSelector(selectAttachments);
  const dispatch = useDispatch();
  const [previewVisible, setPreviewVisible] = React.useState(false);
  const [previewImage, setPreviewImage] = React.useState('');
  const [previewTitle, setPreviewTitle] = React.useState('');
  console.log('test!');
  const normalattch = React.useMemo(
    () =>
      attachments.map((file) => {
        return {
          uid: file._id,
          name: file.filename + file.ext + '',
          status: 'done',
          url: file.url,
        };
      }),
    [attachments],
  );
  const [fileList, setFileList] = React.useState([]);
  React.useEffect(() => {
    setFileList(normalattch);
  }, [normalattch]);
  React.useEffect(() => {
    setchecker(100);
    return () => {
    setchecker(0);
      
    }
  }, [setchecker]);
  const handleCancel = () => setPreviewVisible(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    );
  };
  const handleChange = ({ fileList }) => {
    setFileList({ fileList });
  };

  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        onRemove={(file) => {
          setFileList((fileList) =>
            fileList.filter((img) => img.uid !== file.uid),
          );
          dispatch(attachmentsActions.removeAttachment(file));

          return false;
        }}></Upload>

      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default React.memo(UploadFiles);
