import React from 'react';

import { useState, useEffect } from 'react';

import './main.page.css';

import { CardList } from '../../components/card-list/card-list.component';
import { SearchBox } from '../../components/search-box/search-box.component';
import FavouriteIcon from '../../components/heart-icon/heart-icon.component';
import FavouriteDropdown from '../../components/favourite-dropdown/favourite-dropdown.component';

const MainPage = () => {
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
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
      <div className='header'>
        <h1>Country Finder</h1>

        <div className='favourite-icon'>
          <FavouriteIcon />
        </div>
        <FavouriteDropdown country={countries} />
      </div>

      <h2>Select Region</h2>

      <div className='main-buttons'>
        <button onClick={() => setRegion('Americas')}>America</button>
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
