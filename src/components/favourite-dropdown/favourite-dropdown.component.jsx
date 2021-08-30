import React from 'react';

import './favourite-dropdown.styles.css';

import { useSelector } from 'react-redux';
import CardItem from '../card-item/card-item';

const FavouriteDropdown = props => {
  const favorite = useSelector(state => state.favoriteReducer);

  return (
    <div className='cart-dropdown'>
      <h2>Favorites</h2>
      <div className='cart-items'>{favorite}</div>
    </div>
  );
};

export default FavouriteDropdown;
