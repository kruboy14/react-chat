import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Avatar.scss';
import { generateAvatarFromHash } from 'utils/helpers';

const Avatar = ({user}) => {
  if (user.avatar) {
    return <img src={user.avatar} alt={user.fullname} />;
  } else {
   const {color, colorLighten} =generateAvatarFromHash(user.id); 
   return <div style={{background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 97%)`}} className="avatar avatar-symbol">{user.fullname.substr(0,2)}</div>
  }
};

Avatar.propTypes = {
};

export default Avatar;
