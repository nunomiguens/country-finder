import React from 'react';

import './details.page.css';

import { CountryDetailsList } from '../../components/country-details-list/country-details-list';
import CountryDetails from '../../components/country-details/country-details';

class DetailsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(dataAPI => this.setState({ countries: dataAPI }));
  }

  render() {
    const { countries } = this.state;
    console.log(countries);

    return (
      <div className='details'>
        <CountryDetailsList countries={countries} />
      </div>
    );
  }
}

export default DetailsPage;
