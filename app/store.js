import { createStore, combineReducers, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunk from 'redux-thunk';
import campusesReducer from './reducers/campusesReducer';

const mainReducer = combineReducers({
  campuses: campusesReducer
});

const store = createStore(mainReducer, applyMiddleware(thunk, loggingMiddleware));

export default store;
