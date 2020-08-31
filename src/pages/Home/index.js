import React from 'react';
import {TeamOutlined, FormOutlined, EllipsisOutlined} from '@ant-design/icons';
import {Input} from 'antd';

import {Dialogs, Message} from 'components';

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
                created_at: 'Wed Jan 01 2003 07:33:08 GMT+0000 (UTC)',
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
                created_at: 'Sun Jan 22 2006 09:33:52 GMT+0000 (UTC)',
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
                created_at: 'Sat Oct 08 1977 04:44:57 GMT+0000 (UTC)',
                user: {
                  _id: '5f1de2205d0f91dc7109bf1c881c53f6',
                  fullname: 'Инкогнито',
                  isOnline: true,
                  avatar: null,
                },
              },
              {
                _id: 'ftyd1449ed1adabb72270071',
                text:
                  'Nisi ipsum laboris commodo amet consectetur cillum. Tempor cupidatat quis consequat quis. Occaecat occaecat exercitation amet eiusmod consectetur eiusmod.',
                created_at: 'Wed Jan 01 2003 07:33:08 GMT+0000 (UTC)',
                user: {
                  _id: 'tghd14496ca11a4102665394',
                  fullname: 'Larson Hamilton',
                  isOnline: true,
                  avatar: null,
                },
              },
              {
                _id: 'jw4d1449019b92ec207105ee',
                text:
                  'Pariatur exercitation ex sint sunt velit anim voluptate. Non reprehenderit consequat veniam ullamco. Consectetur aute sint dolor pariatur culpa cillum consectetur elit.',
                created_at: 'Sat Jul 05 2014 21:27:21 GMT+0000 (UTC)',
                user: {
                  _id: '3efd1449ddac8297dcc0622a',
                  fullname: 'Queen Gill',
                  isOnline: true,
                  avatar: null,
                },
              },
              {
                _id: 'lp0d14492b0eef376ce240e2',
                text:
                  'Cupidatat ullamco consectetur irure et et nostrud incididunt fugiat cupidatat esse officia tempor culpa. Lorem consequat aliquip veniam non est. Elit irure sit officia cillum.',
                created_at: 'Fri Jun 29 1979 05:31:25 GMT+0000 (UTC)',
                user: {
                  _id: 'ki7d14491ba839f9525323ef',
                  fullname: 'Nikki Jensen',
                  isOnline: true,
                  avatar: null,
                },
              },
              {
                _id: 'zsld14496d5635ed6964a0cf',
                text:
                  'Eiusmod quis nulla pariatur eu nisi. Nulla sint non aliquip do sint sit ipsum nulla occaecat reprehenderit velit esse adipisicing aliqua. Amet amet aliqua veniam sint consequat mollit labore deserunt exercitation incididunt irure.',
                created_at: 'Fri Dec 16 1983 16:33:41 GMT+0000 (UTC)',
                user: {
                  _id: 'xjqd14490c0c8268abc18531',
                  fullname: 'Jeanine Mclean',
                  isOnline: true,
                  avatar: null,
                },
              },
              {
                _id: '28fd144978f8d78d67266de4',
                text:
                  'Est fugiat culpa officia in ipsum et occaecat consectetur voluptate nisi veniam velit. Elit labore Lorem incididunt fugiat sint laboris dolore cupidatat. Ullamco non irure excepteur ut dolore dolore ullamco.',
                created_at: 'Sat Oct 08 1977 04:44:57 GMT+0000 (UTC)',
                user: {
                  _id: '71wd1449b4edcd46877ee28f',
                  fullname: 'Davis Molina',
                  isOnline: true,
                  avatar: null,
                },
              },
              {
                _id: '5f4d14494b829a8c2001a025',
                text:
                  'Sit quis velit ullamco id amet elit amet. Et adipisicing duis voluptate sint labore sunt dolor laboris ullamco voluptate. Consequat reprehenderit minim laboris in sint do commodo officia ad fugiat non laborum.',
                created_at: 'Sun Jan 22 2006 09:33:52 GMT+0000 (UTC)',
                user: {
                  _id: 'kqnd1449353f5c76840c2c8b',
                  fullname: 'Ursula Ashley',
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
          <div />
          <div className="chat__dialog-header-center">
            <b className="chat__dialog-header-username">Железный человек</b>
            <div className="chat__dialog-header-status">
              <span className="status status--online">online</span>
            </div>
          </div>
          <EllipsisOutlined style={{fontSize: '22px'}} />
        </div>
        <div className="chat__dialog--messages">
          <Message
            avatar="https://vk.com/images/camera_100.png?ava=1"
            date={new Date('Sat Aug 29 2020 21:19:07')}
            audio="https://notificationsounds.com/soundfiles/6c524f9d5d7027454a783c841250ba71/file-23_applause.wav"
          />
          <Message
            avatar="https://sun9-41.userapi.com/c10064/u95230043/e_f23590e3.jpg?ava=1"
            isTyping
          ></Message>

          <Message
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
          ></Message>
        </div>
      </div>
    </div>
  </section>
);

export default Auth;
