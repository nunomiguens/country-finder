import React from 'react';
import { CountryDetails } from '../country-details/country-details';
import './country-details-list.css';

export const CountryDetailsList = props => {
  /*console.log(props);*/
  return (
    <div className='card-list'>
      {props.countries.map(country => (
        <CountryDetails key={country.alpha3Code} country={country} />
      ))}
    </div>
  );
};
