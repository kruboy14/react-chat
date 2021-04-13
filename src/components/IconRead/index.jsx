import readTick from 'assets/img/double-tick-indicator.svg';
import sentTick from 'assets/img/single-tick-indicator.svg';
import PropTypes from 'prop-types';


const IconRead = ({ isRead }) => {
  return isRead === 'sent' ? (
    <img className="message__checkedTick" src={sentTick} alt="" />
  ) : isRead === 'read' ? (
    <img className="message__checkedTick" src={readTick} alt="" />
  ) : null;
};

IconRead.propTypes = {
  isRead: PropTypes.string
}

export default IconRead;
