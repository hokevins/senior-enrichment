import axios from 'axios';
import {
  GOT_CAMPUSES,
  gotCampuses
} from './actionCreators';

// thunk creator
export const fetchCampuses = () => {
  return function thunk (dispatch) {
    axios.get('/api/campuses')
    .then(response => {
      dispatch(gotCampuses(response.data));
    })
    .catch(console.error);
  };
};

// reducer
const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
};

export default campusesReducer;
