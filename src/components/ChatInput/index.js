import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {SmileOutlined, CameraOutlined, AudioOutlined, SendOutlined} from '@ant-design/icons';
import {Input, Button} from 'antd';
import {UploadField} from '@navjobs/upload';
import {Picker} from 'emoji-mart';

import './ChatInput.scss';

const ChatInput = props => {
  const [value, setValue] = useState('');
  const [emojiPickerVisible, setShowEmojiPicker] = useState(false);

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!emojiPickerVisible);
  };

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        {emojiPickerVisible && (
          <div className="chat-input__emoji-picker">
            <Picker set="apple" />
          </div>
        )}

        <Button onClick={toggleEmojiPicker} shape="circle" icon={<SmileOutlined />} />
      </div>
      <Input
        onChange={e => setValue(e.target.value)}
        size="large"
        placeholder="Введите текст сообщения"
      />
      <div className="chat-input__actions">
        <UploadField
          onFiles={files => {
            console.log(files);
          }}
          containerProps={{
            className: 'chat-input__actions-upload-btn',
          }}
          uploadProps={{
            accept: '.jpg,.jpeg,.png,.gif,.bmp',
            multiple: 'multiple',
          }}
        >
          <Button shape="circle" icon={<CameraOutlined />} />
        </UploadField>
        {value ? (
          <Button shape="circle" icon={<SendOutlined />} />
        ) : (
          <Button shape="circle" icon={<AudioOutlined />} />
        )}
      </div>
    </div>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string,
};

export default ChatInput;
