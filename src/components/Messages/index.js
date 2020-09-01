import React from 'react';
import PropTypes from 'prop-types';
import {Empty, Spin} from 'antd';
import classNames from 'classnames';

import {Message} from '../';
import './Messages.scss';

const Messages = ({isLoading, items}) => {
  return (
    <div className={classNames('messages', {'messages--loading': isLoading})}>
      {isLoading ? (
        <Spin size="large" tip="Загрузка сообщений.." />
      ) : items && !isLoading ? (
        items.map(item => <Message key={item._id} {...item} />)
      ) : (
        <Empty description="Откройте диалог" />
      )}
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
