import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Dialogs as BaseDialogs } from '../components';
import socket from '../core/socket';
import { dialogsActions } from '../redux/actions';
import { selectAllDialogs } from '../redux/selectors';

const Dialogs = ({ ...props }) => {
  const [inputValue, setValue] = React.useState('');
  const [filter, setFilter] = React.useState([]);

  const items = useSelector(selectAllDialogs);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!items) {
      dispatch(dialogsActions.fetchDialogs());
    } else {
      setFilter(items);
    }
  }, [dispatch, items]);

  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
    setFilter(
      items.filter(
        (dialog) =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0,
      ),
    );
  };
  socket.on("SERVER:DIALOG_CREATED", (data)=> {
    console.log(data);
    dispatch(dialogsActions.fetchDialogs());
  })

  return (
    <BaseDialogs
      {...props}
      items={filter}
      onChange={onChange}
      inputValue={inputValue}
    />
  );
};

export default Dialogs;
