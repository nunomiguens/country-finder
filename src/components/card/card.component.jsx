import React from 'react';
import './card.styles.css';

import MainDetails from './main.details.component';

class Card extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      isToggleOn: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div className='card-container'>
        <img className='flag-img' alt='country' src={this.props.country.flag} />
        <h2>{this.props.country.name}</h2>
        <div className='card-container-buttons'>
          <button className='button-details' onClick={this.handleClick}>
            See Details
          </button>
          <button className='button-favourite'>
            <i class='fa fa-heart'></i>
          </button>
        </div>
        <div>
          <p className='listDetails'>
            {this.state.isToggleOn && (
              <MainDetails country={this.props.country} />
            )}
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
