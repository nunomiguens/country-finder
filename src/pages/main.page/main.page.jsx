import React from 'react';

import './main.page.css';

import { CardList } from '../../components/card-list/card-list.component';
import { SearchBox } from '../../components/search-box/search-box.component';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(dataAPI => this.setState({ countries: dataAPI }));
  }

  render() {
    const { countries, searchField } = this.state;
    const filteredCountries = countries.filter(country =>
      country.name.toLowerCase().includes(searchField.toLowerCase())
    );
    //console.log(countries);
    return (
      <div className='main'>
        <h1>Country Finder</h1>
        <SearchBox
          placeholder='Search Country'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList countries={filteredCountries} />
      </div>
    );
  }
}

export default MainPage;
