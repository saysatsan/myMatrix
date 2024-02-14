import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardReducer from './sources/cards/reducer';

const rootReducer = combineReducers({
  cardReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
