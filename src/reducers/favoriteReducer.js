const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case 'favoriteCountry/addCountry':
      return [...state, action.payload];
    case 'favoriteCountry/removeCountry':
      return state.filter(
        country => country.alpha3Code !== action.payload.alpha3Code
      );
    default:
      return state;
  }
};

export default favoriteReducer;
