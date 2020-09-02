import React from 'react';
import orderBy from 'lodash/orderBy';
import {Input, Empty} from 'antd';

import {DialogItem} from '../';
import './Dialogs.scss';

const {Search} = Input;

const Dialogs = ({items, userId, onSearch, inputValue, currentDialogId, onSelectDialog}) => (
  <div className="dialogs">
    <div className="dialogs__search">
      <Search
        value={inputValue}
        placeholder="Поиск среди контактов"
        onChange={e => onSearch(e.target.value)}
        style={{
          backgroundColor: '#f7f8f9',
          border: '0',
          height: '38px',
          padding: '4px, 11px, 6px',
        }}
      />
    </div>
    {items.length ? (
      orderBy(items, ['created_at'], ['desc']).map(item => (
        <DialogItem
          onSelect={onSelectDialog}
          key={item._id}
          isMe={item._id === userId}
          currentDialogId={currentDialogId}
          {...item}
        />
      ))
    ) : (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Ничего не найдено" />
    )}
  </div>
);

export default Dialogs;
