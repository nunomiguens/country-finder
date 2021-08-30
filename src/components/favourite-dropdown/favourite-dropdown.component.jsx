import React from 'react';

import './favourite-dropdown.styles.css';

import { useSelector } from 'react-redux';
import CardItem from '../card-item/card-item';

const FavouriteDropdown = () => {
  const favorite = useSelector(state => state.favoriteReducer);

  return (
    <div className='cart-dropdown'>
      <h2>Favorites</h2>
      <div className='cart-items'>
        {favorite.map(country => (
          <CardItem country={country} key={country.alpha3Code} />
        ))}
      </div>
    </div>
  );
};

export default FavouriteDropdown;
