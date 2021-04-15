import readTick from 'assets/img/double-tick-indicator.svg';
import sentTick from 'assets/img/single-tick-indicator.svg';
import PropTypes from 'prop-types';

const IconRead = ({ isRead }) =>
  isRead ? (
    <img className="message__checkedTick" src={sentTick} alt="" />
  ) : (
    <img className="message__checkedTick" src={readTick} alt="" />
  );

IconRead.propTypes = {
  isRead: PropTypes.bool,
};

export default IconRead;
