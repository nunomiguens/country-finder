import React from 'react';

import './country-details.css';

export const CountryDetails = props => (
  <div className='card-container'>
    <img className='flag-img' alt='country' src={props.country.flag} />
    <div className='country-text'>
      <h2>{props.country.name}</h2>
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
