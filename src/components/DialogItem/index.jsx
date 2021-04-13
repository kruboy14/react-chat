import React from 'react';

import './DialogItem.scss';
import { Time, IconRead } from '..';
import classNames from 'classnames';

const getAvatar = (avatar) => {
  if (avatar) {
    return <img src={avatar} alt="" />;
  } else {
    // make
  }
};

const DialogItem = ({ user, message, unread }) => {
  return (
    <div className={classNames("dialog__item", {
      "dialog__item-online": user.isOnline
    })}>
      <div className="dialog__item-avatar">
        {/* <img src={user.avatar} alt={`${user.fullname} avatar`}/> */}
        {getAvatar(
          'https://99px.ru/sstorage/1/2010/04/image_10704101336437444814.jpg',
        )}
      </div>
      <div className="dialog__item-content">
        <div className="dialog__item-content-top">
          <div className="dialog__item-content-name">
            <span>Artem Ministr</span>
          </div>
          <div className="dialog__item-content-time">12:12</div>
        </div>
        <div className="dialog__item-content-bottom">
          <div className="dialog__item-content-text">
            <p>
              Breaking news and analysis on politics, business, world national
              news, entertainment more. In-depth DC, Virginia, Maryland
            </p>
          </div>
          <div className="dialog__item-content-tick">
            <IconRead isRead={'read'} />
          </div>
          {unread > 0 && <div className="dialog__item-content-count">{unread > 9 ? "+9" : unread}</div>}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
