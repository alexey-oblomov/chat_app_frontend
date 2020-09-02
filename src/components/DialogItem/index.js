import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import parseISO from 'date-fns/parseISO';

import {IconReaded, Avatar} from '../../components';

const getMessageTime = created_at => {
  if (isToday(parseISO(created_at))) {
    return format(new Date(created_at), 'hh:mm');
  } else {
    return format(new Date(created_at), 'dd.MM.yyyy');
  }
};

const DialogItem = ({_id, user, unread, created_at, text, isMe, onSelect, currentDialogId}) => (
  <div
    className={classNames('dialogs__item', {
      'dialogs__item--online': user.isOnline,
      'dialogs__item--selected': currentDialogId === _id,
    })}
    onClick={onSelect.bind(this, _id)}
  >
    <div className="dialogs__item-avatar">
      <Avatar user={user} />
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>{getMessageTime(created_at)}</span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{text}</p>
        {isMe && <IconReaded isMe={true} isReaded={true} />}
        {unread > 0 && (
          <div className="dialogs__item-info-bottom-count">{unread > 9 ? '+9' : unread}</div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;
