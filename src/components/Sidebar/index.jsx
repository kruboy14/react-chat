import React from 'react';
import { TeamOutlined, FormOutlined } from '@ant-design/icons';
import { Button, Modal, Select, Input } from 'antd';

import './Sidebar.scss';
import { Dialogs } from '../../containers';
import userApi from '../../utils/api/user';
import { dialogsApi } from '../../utils/api';
import { openNotification } from 'utils/helpers';

const Sidebar = () => {
  const { Option } = Select;
  const { TextArea } = Input;
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedUserId, setSelectedUserId] = React.useState(null);

  const onClose = () => {
    setTimeout(() => {
      setIsModalVisible(false);
      setMessage('');
      setInputValue('');
    }, 100);
  };
  const handleSelect = (userID) => {
    setSelectedUserId(userID);
  };
  const handleChange = (value) => {
    setInputValue(value);
  };
  const hanlderMsgChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSearch = async (value) => {
    try {
      setIsLoading(true);
      const { data } = await userApi.searchUser(value);
      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const onAddDialog = async () => {
    try {
      await dialogsApi.create({
        partner: selectedUserId,
        text: message,
      });
    } catch ({ response }) {
      if (response.status === 403) {
        console.log(response);
        openNotification({
          title: 'Error',
          text: response.data.message,
          type: 'error',
        });
      }
    }
    onClose();
  };

  const options = users.map((user) => (
    <Option key={user.id}>{user.fullname}</Option>
  ));

  return (
    <div className="chat__sidebar">
      <div className="chat__sidebar-header">
        <div className="chat__sidebar-header-left">
          <TeamOutlined />
          <span className="chat__sidebar-header-text">List of contacts</span>
        </div>
        <Button
          onClick={() => setIsModalVisible(true)}
          type="text"
          icon={<FormOutlined />}
        />
      </div>
      <Modal
        className="chat__sidebar-modal"
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={onClose}
        footer={[
          <Button key="back" onClick={onClose}>
            Cancel
          </Button>,
          <Button
            disabled={!message}
            key="submit"
            type="primary"
            loading={isLoading}
            onClick={onAddDialog}>
            Create
          </Button>,
        ]}
        confirmLoading={isLoading}>
        <p className="chat__sidebar-text">Find your friend</p>
        <Select
          className="chat__sidebar-select"
          placeholder="Enter username"
          showSearch
          value={inputValue}
          onSearch={handleSearch}
          onChange={handleChange}
          onSelect={handleSelect}
          defaultActiveFirstOption={false}
          showArrow={true}
          filterOption={false}
          notFoundContent={'no such user'}>
          {options}
        </Select>
        {inputValue && (
          <div>
            <p className="chat__sidebar-friend">Send first Message!</p>

            <TextArea
              className="chat__sidebar-textarea"
              autoSize={{ minRows: 2, maxRows: 8 }}
              placeholder="Enter Hello message"
              onChange={hanlderMsgChange}
              value={message}
            />
          </div>
        )}
      </Modal>
      <div className="chat__sidebar-dialogs">
        <Dialogs />
      </div>
    </div>
  );
};

export default Sidebar;
