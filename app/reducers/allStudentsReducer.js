import axios from 'axios';
import {
  GOT_ALL_STUDENTS,
  gotAllStudents
} from './actionCreators';

// thunk creator
export const fetchAllStudents = () => {
  return function thunk (dispatch) {
    axios.get('/api/students')
    .then(response => {
      dispatch(gotAllStudents(response.data));
    })
    .catch(console.error);
  };
};

const allStudentsReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_ALL_STUDENTS:
      return action.allStudents;
    default:
      return state;
  }
};

export default allStudentsReducer;
