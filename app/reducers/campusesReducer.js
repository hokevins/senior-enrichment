import axios from 'axios';

// action type
const GOT_CAMPUSES = 'GOT_CAMPUSES';

// action creator
const gotCampuses = (campuses) => {
  return {
    type: GOT_CAMPUSES,
    campuses: campuses
  };
};

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

const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
};

export default campusesReducer;
