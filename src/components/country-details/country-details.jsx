import React from 'react';
import { useParams } from 'react-router-dom';
import './country-details.css';

const CountryDetails = props => {
  console.log(props);

  let { id } = useParams();

  return (
    <div id={id} className='country-container'>
      <img
        className='flag-details-img'
        alt='country'
        src={props.country.flag}
      />
      <div className='country-info'>
        <h2>{props.country.name}</h2>
        <p>
          <strong>Native Name: </strong>
          {props.country.nativeName}
        </p>
        <p>
          <strong>Demonym: </strong>
          {props.country.demonym}
        </p>
        <p>
          <strong>Population: </strong>
          {props.country.population.toLocaleString()}
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
        <p>
          <strong>Languages: </strong>
          {props.country.languages.map((language, index) => {
            return (
              <span key={language.name}>
                {index + 1 !== props.country.languages.length
                  ? `${language.name}, `
                  : language.name}
              </span>
            );
          })}
        </p>
        <p>
          <strong>Borders: </strong>
          {props.country.borders.map(border => {
            return <span> {border},</span>;
          })}
        </p>
      </div>
    </div>
  );
};

export default CountryDetails;
