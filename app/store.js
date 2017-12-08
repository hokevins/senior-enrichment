import { createStore, combineReducers, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunk from 'redux-thunk';
import campusesReducer from './reducers/campusesReducer';
import allStudentsReducer from './reducers/allStudentsReducer';

const mainReducer = combineReducers({
  campuses: campusesReducer,
  allStudents: allStudentsReducer
});

const store = createStore(mainReducer, applyMiddleware(thunk, loggingMiddleware));

export default store;
