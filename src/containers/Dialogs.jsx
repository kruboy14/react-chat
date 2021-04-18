import React from 'react';
import { Dialogs as BaseDialogs } from '../components';

const Dialogs = ({ items, ...props }) => {
  const [inputValue, setValue] = React.useState('');
  const [filter, setFilter] = React.useState([...items]);
  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
    setFilter(
      items.filter((dialog) => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0),
      );

      console.log(filter);
  };
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
