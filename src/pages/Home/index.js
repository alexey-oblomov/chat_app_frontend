import React from 'react';
import {TeamOutlined, FormOutlined, EllipsisOutlined} from '@ant-design/icons';
import {Button} from 'antd';

import {Messages, Status, ChatInput} from 'components';
import {Dialogs} from 'containers';

import './Home.scss';

const Auth = () => (
  <section className="home">
    <div className="chat">
      <div className="chat__sidebar">
        <div className="chat__sidebar-header">
          <div>
            <Button
              shape="circle"
              style={{display: 'inline-block', marginRight: '5px'}}
              icon={<TeamOutlined />}
            />

            <span>Список диалогов</span>
          </div>
          <Button shape="circle" icon={<FormOutlined />} />
        </div>

        <div className="chat__sidebar-dialogs">
          <Dialogs userId={0} />
        </div>
      </div>

      <div className="chat__dialog">
        <div className="chat__dialog-header">
          <div />
          <div className="chat__dialog-header-center">
            <b className="chat__dialog-header-username">Железный человек</b>
            <div className="chat__dialog-header-status">
              <Status online />
            </div>
          </div>
          <Button shape="circle" style={{fontSize: '22px'}} icon={<EllipsisOutlined />} />
        </div>
        <div className="chat__dialog-messages">
          <Messages />
        </div>
        <div className="chat__dialog-input">
          <ChatInput />
        </div>
      </div>
    </div>
  </section>
);

export default Auth;
