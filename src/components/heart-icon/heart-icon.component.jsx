import React from 'react';
import { ReactComponent as HeartIcon } from '../../heart-outline-svgrepo-com.svg';
import './heart-icon.styles.css';

import { useSelector } from 'react-redux';

const FavouriteIcon = props => {
  const counter = useSelector(state => state.counter);

  return (
    <div className='favourite-icon'>
      <HeartIcon className='heart-icon' />
      <div className='item-count'>{counter}</div>
    </div>
  );
};
export default FavouriteIcon;
