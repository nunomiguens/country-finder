import React from 'react';

import { useState, useEffect } from 'react';

import './main.page.css';

import { CardList } from '../../components/card-list/card-list.component';
import { SearchBox } from '../../components/search-box/search-box.component';

const MainPage = () => {
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(dataAPI => setCountries(dataAPI));
  }, []);

  const filteredCountries = countries.filter(
    country =>
      country.name.toLowerCase().includes(searchField.toLowerCase()) &&
      country.region === region
  );

  console.log(countries);

  return (
    <div className='main'>
      <h1>Country Finder</h1>
      <h3>Select Region</h3>
      <div className='main-buttons'>
        <button onClick={() => setRegion('Americas')}>Americas</button>
        <button onClick={() => setRegion('Europe')}>Europe</button>
        <button onClick={() => setRegion('Asia')}>Asia</button>
        <button onClick={() => setRegion('Africa')}>Africa</button>
        <button onClick={() => setRegion('Oceania')}>Oceania</button>
      </div>
      <SearchBox
        placeholder='Search Country'
        handleChange={e => setSearchField(e.target.value)}
      />
      <CardList countries={filteredCountries} />
    </div>
  );
};

export default MainPage;
