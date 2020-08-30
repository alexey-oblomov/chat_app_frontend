import React from 'react';

import {Dialogs} from 'components';

import './Home.scss';

const Auth = () => (
  <section className="home">
    <Dialogs
      userId={0}
      items={[
        {
          _id: Math.random(),
          text: 'Этому городу нужен новый геройc',
          created_at: new Date(),
          user: {
            _id: 1,
            fullname: 'Бэтменс',
            isOnline: false,
            avatar:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoPfDG_OD4xWjfl_zYHzurRSVxNVkt64CM8g&usqp=CAU',
          },
        },

        {
          _id: Math.random(),
          text: 'Человек паук, как без рук',
          created_at: new Date('Sun Aug 29 2020 21:15:35'),
          user: {
            _id: 2,
            fullname: 'Человек-паук',
            isOnline: true,
            avatar:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRw60JJhV4vfi3F0Tl2GMBdU8QDrxL4wdNgXA&usqp=CAU',
          },
        },
      ]}
    />
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
