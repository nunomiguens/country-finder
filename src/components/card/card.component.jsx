import React from 'react';
import './card.styles.css';
import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import allActions from '../../actions/indexActions.js';

import MainDetails from './main.details.component';
import CardItem from '../card-item/card-item';

const Card = props => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div className='card-container'>
      <img className='flag-img' alt='country' src={props.country.flag} />
      <h2>{props.country.name}</h2>
      <div className='card-container-buttons'>
        <button className='button-details' onClick={handleClick}>
          See Details
        </button>
        <button
          className='button-favourite'
          onClick={() =>
            dispatch(
              allActions.favoriteActions.addCountry(
                <CardItem
                  country={props.country}
                  key={props.country.alpha3Code}
                />
              )
            )
          }
        >
          <i class='fa fa-heart'></i>
        </button>
      </div>
      <div>
        <p className='listDetails'>
          {isToggleOn && <MainDetails country={props.country} />}
        </p>
      </div>
    </div>
  );
};

export default Card;
