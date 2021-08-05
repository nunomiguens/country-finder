import React from 'react';

import CountryDetails from '../country-details/country-details';
import './country-details-list.css';

export const CountryDetailsList = props => {
  /*console.log(props)*/

  return (
    <div className='country-list'>
      {props.countries.map(country => (
        <CountryDetails country={country} id={country.alpha3Code} />
      ))}
    </div>
  );
};
