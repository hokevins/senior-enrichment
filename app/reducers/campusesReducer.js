import axios from 'axios';
import {
  GOT_CAMPUSES,
  gotCampuses,
  GOT_CAMPUS,
  gotCampus
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
export const writeCampus = (newState, history) => {
  return function thunk (dispatch) {
    axios.post('/api/campuses', newState)
    .then(res => res.data)
    .then(newCampus => {
      dispatch(gotCampus(newCampus));
      history.push('/campuses');
    })
    .catch(console.error);
  };
};
export const deleteCampus = (id) => {
  return function thunk (dispatch) {
    axios.delete(`/api/campuses/${id}`)
    .then(() => {
      dispatch(fetchCampuses());
    })
    .catch(console.error);
  };
};

// reducer
const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_CAMPUSES:
      return action.campuses;
    case GOT_CAMPUS:
      return [...state, action.campus];
    default:
      return state;
  }
};

export default campusesReducer;
