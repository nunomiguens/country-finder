const addCountry = country => {
  return {
    type: 'favoriteCountry/addCountry',
    payload: country,
  };
};

const removeCountry = country => {
  return {
    type: 'favoriteCountry/removeCountry',
    payload: country,
  };
};

export default {
  addCountry,
  removeCountry,
};
