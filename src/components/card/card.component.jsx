import React from 'react';
import './card.styles.css';
import { Link } from 'react-router-dom';

const Card = props => {
  return (
    <div className='card-container'>
      <img className='flag-img' alt='country' src={props.country.flag} />
      <h2>{props.country.name}</h2>
      <div>
        <p>
          <strong>Population: </strong>
          {props.country.population.toLocaleString()}
        </p>
        <p>
          <strong>Capital : </strong>
          {props.country.capital}
        </p>
        <p>
          <strong>Region: </strong>
          {props.country.region}
        </p>
      </div>
    </div>
  );
};

export default Card;
