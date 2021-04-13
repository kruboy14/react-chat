import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Time = ({date}) => {
  const time = typeof date === "string" ? Date.parse(date) : date;
 return formatDistanceToNow(time, { addSuffix: true });
};

export default Time;
