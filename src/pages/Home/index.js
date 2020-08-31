import React from 'react';
import {TeamOutlined, FormOutlined, EllipsisOutlined} from '@ant-design/icons';
import {Input} from 'antd';

import {Dialogs} from 'components';

import './Home.scss';
const {Search} = Input;
const Auth = () => (
  <section className="home">
    <div className="chat">
      <div className="chat__sidebar">
        <div className="chat__sidebar-header">
          <div>
            <TeamOutlined style={{display: 'inline-block', marginRight: '5px'}} />
            <span>Список диалогов</span>
          </div>
          <FormOutlined />
        </div>

        <div className="chat__sidebar-search">
          <Search
            placeholder="Поиск среди контактов"
            onSearch={value => console.log(value)}
            style={{
              backgroundColor: '#f7f8f9',
              border: '0',
              height: '38px',
              padding: '4px, 11px, 6px',
            }}
          />
        </div>

        <div className="chat__sidebar-dialogs">
          <Dialogs
            userId={0}
            items={[
              {
                _id: '5f1de2205d0f91dc7109bf1c881c53f6',
                text: 'Этому городу нужен новый геройc',
                created_at: new Date(),
                user: {
                  _id: '5f1de2205d0f91dc7109bf1c881c53f6',
                  fullname: 'Бэтменс',
                  isOnline: false,
                  avatar:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoPfDG_OD4xWjfl_zYHzurRSVxNVkt64CM8g&usqp=CAU',
                },
              },

              {
                _id: '5f1de2205d0f91dc7109bf1c881c53f6',
                text: 'Человек паук, как без рук',
                created_at: new Date('Sun Aug 29 2020 21:15:35'),
                user: {
                  _id: '5f1de2205d0f91dc7109bf1c881c53f6',
                  fullname: 'Человек-паук',
                  isOnline: true,
                  avatar:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRw60JJhV4vfi3F0Tl2GMBdU8QDrxL4wdNgXA&usqp=CAU',
                },
              },

              {
                _id: '5f1de2205d0f91dc7109bf1c881c53f6',
                text: 'Da-Ba-Boom',
                created_at: new Date('Sun Aug 29 2020 21:15:35'),
                user: {
                  _id: '5f1de2205d0f91dc7109bf1c881c53f6',
                  fullname: 'Инкогнито',
                  isOnline: true,
                  avatar: null,
                },
              },
            ]}
          />
        </div>
      </div>

      <div className="chat__dialog">
        <div className="chat__dialog-header">
          <div className="chat__dialog-header-username">
            <div className="chat__dialog-header-center">
              <b>Железный человек</b>
              <div className="chat__dialog-header-status">
                <div className="status status--online">online</div>
              </div>
              <EllipsisOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 
    <Message
      avatar="https://vk.com/images/camera_100.png?ava=1"
      date={new Date('Sat Aug 29 2020 21:19:07')}
      audio="https://notificationsounds.com/soundfiles/6c524f9d5d7027454a783c841250ba71/file-23_applause.wav"
    /> */}
    {/* <Message
      avatar="https://sun9-41.userapi.com/c10064/u95230043/e_f23590e3.jpg?ava=1"
      isTyping
    ></Message> */}
    {/* <Dialogs
      items={[
        {
          user: {
            fullname: 'Бэтмен',
            avatar: null,
          },
          message: {
            text: 'Этому городу нужен новый герой',
            isReaded: false,
            created_at: new Date(),
          },
        },
      ]}
    /> */}
    {/* <Message
      avatar="https://vk.com/images/camera_100.png?ava=1"
      text="Привет! Как делa. HELLO"
      date={new Date('Sat Aug 29 2020 21:19:07')}
      attachments={[
        {
          filename: 'image.jpg',
          url:
            'https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg',
        },
        {
          filename: 'image.jpg',
          url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWOQ5sPdAAgPtBmMs4xUDnKbuUw1JrmkXBUA&usqp=CAU',
        },
        {
          filename: 'image.jpg',
          url:
            'https://img.etimg.com/thumb/msid-68721417,width-1070,height-580,imgsize-1016106,overlay-etpanache/photo.jpg',
        },
      ]}
    ></Message>
    <Message
      avatar="https://vk.com/images/camera_100.png?ava=1"
      text="Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло!"
      date={new Date('Sat Aug 29 2020 11:19:07')}
      isMe={true}
      isReaded={false}
    ></Message>
    <Message avatar="https://vk.com/images/camera_100.png?ava=1" isTyping></Message>
    <Message
      avatar="https://vk.com/images/camera_100.png?ava=1"
      date={new Date('Sat Aug 29 2020 21:19:07')}
      attachments={[
        {
          filename: 'image.jpg',
          url:
            'https://pix10.agoda.net/hotelImages/1199068/-1/09cb9a2780bf41ad1e8f8a3d2e074754.jpg?s=1024x768',
        },
      ]}
    ></Message> */}
  </section>
);

export default Auth;
