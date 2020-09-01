import React from 'react';
import {connect} from 'react-redux';

import {messagesActions} from 'redux/actions';
import {Messages as BaseMessages} from 'components';

class Messages extends React.Component {
  componentDidUpdate(prevProps) {
    const {fetchMessages, currentDialogId} = this.props;

    if (prevProps.currentDialogId !== this.props.currentDialogId) {
      fetchMessages(currentDialogId);
    }
  }

  render() {
    const {items} = this.props;
    return <BaseMessages items={items} />;
  }
}

// const Dialogs = ({ currentDialogId, fetchMessages, items }) => {
//   useEffect(() => {
//     fetchMessages(currentDialogId);
//   }, [currentDialogId, fetchMessages]);

//   return <BaseMessages items={items} />;
// };

export default connect(
  ({dialogs, messages}) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
  }),
  messagesActions
)(Messages);
