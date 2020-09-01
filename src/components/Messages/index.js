import React from 'react';
import PropTypes from 'prop-types';
import {Empty} from 'antd';

import {Message} from '../../components';

const Messages = ({items}) => {
  return items ? (
    <div>
      {items.map(item => (
        <Message key={item._id} {...item} />
      ))}
    </div>
  ) : (
    <Empty description="Откройте диалог" />
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
