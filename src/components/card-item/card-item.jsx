import React from 'react';
import './card-item.css';

import { useDispatch } from 'react-redux';
import allActions from '../../actions/indexActions.js';

const CardItem = props => {
  const dispatch = useDispatch();
  const country = props.country;

  return (
    <div>
      <img
        className='flag-details-img'
        alt='country'
        src={props.country.flag}
      />
      <p>
        <strong>Name: </strong>
        {props.country.name}
      </p>
      <button
        onClick={() =>
          dispatch(allActions.favoriteActions.removeCountry(country)) &&
          dispatch(allActions.counterActions.decrement())
        }
      >
        <i class='fa fa-trash'></i>
      </button>
    </div>
  );
};

export default CardItem;
