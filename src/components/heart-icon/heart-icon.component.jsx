import React from 'react';

import { ReactComponent as HeartIcon } from '../../heart-outline-svgrepo-com.svg';

import './heart-icon.styles.css';

const FavouriteIcon = () => {
  return (
    <div className='favourite-icon'>
      <HeartIcon className='heart-icon' />
    </div>
  );
};
export default FavouriteIcon;
