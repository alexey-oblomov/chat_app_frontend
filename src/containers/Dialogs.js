import React, {useState} from 'react';
import {connect} from 'react-redux';

import {dialogsActions} from 'redux/actions';
import {Dialogs as BaseDialogs} from 'components';

const Dialogs = ({items, userId}) => {
  const [inputValue, setValue] = useState('');
  const [filtered, setFilteredItems] = useState(Array.from(items));

  const onChangeInput = value => {
    setFilteredItems(
      items.filter(dialog => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0)
    );
    setValue(value);
  };
  return (
    <BaseDialogs
      userId={userId}
      items={filtered}
      onSearch={onChangeInput}
      inputValue={inputValue}
    />
  );
};

export default connect(({dialogs}) => dialogs, dialogsActions)(Dialogs);
