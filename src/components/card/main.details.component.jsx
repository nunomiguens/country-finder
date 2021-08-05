import React from 'react';

const MainDetails = props => {
  return (
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
      <p>
        <strong>SubRegion: </strong>
        {props.country.subregion}
      </p>
      <p>
        <strong>Native Name: </strong>
        {props.country.nativeName}
      </p>
      <p>
        <strong>Demonym: </strong>
        {props.country.demonym}
      </p>
      <p>
        <strong>Capital : </strong>
        {props.country.capital}
      </p>
      <p>
        <strong>Currency: </strong>{' '}
        {props.country.currencies.map((currency, index) => {
          return (
            <span key={currency.name}>
              {index + 1 !== props.country.currencies.length
                ? `${currency.name}, `
                : currency.name}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default MainDetails;
