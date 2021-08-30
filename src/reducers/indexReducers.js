import counter from './counter';
import favoriteReducer from './favoriteReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counter,
  favoriteReducer,
});

export default rootReducer;
