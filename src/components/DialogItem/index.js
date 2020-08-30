import React from 'react';
import classNames from 'classnames';

import {IconReaded} from '../../components';
import './DialogItem.scss';

const getAvatar = avatar => {
  if (avatar) {
    return (
      <img
        src="https://sun9-19.userapi.com/impf/c636629/v636629652/62c31/QvZ019cAdz8.jpg?size=50x0&quality=88&crop=1,321,1362,1362&sign=dfa25d6c7135a1c908d05a50c4ead4ce&ava=1"
        alt="avatar"
      />
    );
  } else {
    //some code
  }
};

const DialogItem = ({user, message, unreaded}) => (
  <div className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline})}>
    <div className="dialogs__item-avatar">
      {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
      {getAvatar(
        'https://sun9-19.userapi.com/impf/c636629/v636629652/62c31/QvZ019cAdz8.jpg?size=50x0&quality=88&crop=1,321,1362,1362&sign=dfa25d6c7135a1c908d05a50c4ead4ce&ava=1'
      )}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>Бэтмен</b>
        <span>
          {/* <Time date={new Date()} /> */}
          20:00
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{message}</p>
        <IconReaded isMe={true} isReaded={true} />
        {unreaded > 0 && (
          <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? '+9' : unreaded}</div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;
