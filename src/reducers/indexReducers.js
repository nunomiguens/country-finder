import counter from './counter';
import favoriteReducer from './favoriteReducer';
import currentUser from './currentUser';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counter,
  favoriteReducer,
  currentUser,
});

export default rootReducer;
