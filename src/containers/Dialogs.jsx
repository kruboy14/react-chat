import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Dialogs as BaseDialogs } from '../components';
import socket from '../core/socket';
import { dialogsActions } from '../redux/actions';
import { selectAllDialogs, selectUserData } from '../redux/selectors';

const Dialogs = () => {
  const [inputValue, setValue] = React.useState('');
  const [filter, setFilter] = React.useState([]);

  const items = useSelector(selectAllDialogs);
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();

  React.useEffect(() => {
    socket.on('SERVER:DIALOG_CREATED', (data) => {
      dispatch(dialogsActions.fetchDialogs());
    });
    if (!items) {
      dispatch(dialogsActions.fetchDialogs());
    } else {
      setFilter(items);
    }
    return () => {
      socket.off('SERVER:DIALOG_CREATED');
    };
  }, [dispatch, items]);

  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
    setFilter(
      items.filter((dialog) => {
        const userId = user._id;
        const partnerName =
          dialog.author._id === userId
            ? dialog.partner.fullname
            : dialog.author.fullname;
        return partnerName.toLowerCase().indexOf(value.toLowerCase()) >= 0;
      }),
    );
  };

  return (
    <BaseDialogs
      user={user}
      items={filter}
      onChange={onChange}
      inputValue={inputValue}
    />
  );
};

export default Dialogs;
