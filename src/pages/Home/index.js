import React from 'react';

import {Message} from 'components';

import './Home.scss';

const Auth = () => (
  <section className="home">
    <Message
      avatar="https://vk.com/images/camera_100.png?ava=1"
      text="Привет! Как делa. HELLO"
      date={new Date('Sat Aug 29 2020 21:19:07')}
    ></Message>
    <Message
      avatar="https://vk.com/images/camera_100.png?ava=1"
      text="Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло! Да-да. Хелло!"
      date={new Date('Sat Aug 29 2020 11:19:07')}
      isMe={true}
      isReaded={false}
    ></Message>
  </section>
);

export default Auth;
