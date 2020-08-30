import React from 'react';

import {Time, IconReaded} from '../../components';
import './DialogItem.scss';

const DialogItem = ({user, message}) => (
  <div className="dialogs__item">
    <div className="dialogs__item-avatar">
      {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
      <img
        src="https://sun9-19.userapi.com/impf/c636629/v636629652/62c31/QvZ019cAdz8.jpg?size=50x0&quality=88&crop=1,321,1362,1362&sign=dfa25d6c7135a1c908d05a50c4ead4ce&ava=1"
        alt="avatar"
      />
    </div>
    <div className="dialogs__item-info-top">
      <div className="dialogs__item-info-top">
        <b>Бэтмен</b>
        <span>
          <Time date={new Date()} />
        </span>
      </div>
      <div className="dialogs__item-info-top">
        <p>Этому городу нужен новый герой</p>
        <IconReaded isMe={true} isReaded={false} />
      </div>
    </div>
  </div>
);

export default DialogItem;
