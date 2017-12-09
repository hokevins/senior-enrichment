import axios from 'axios';

import {
  GOT_ALL_STUDENTS,
  gotAllStudents,
  GOT_STUDENT,
  gotStudent
} from './actionCreators';

// thunk creators
export const fetchAllStudents = () => {
  return function thunk (dispatch) {
    axios.get('/api/students')
    .then(response => {
      dispatch(gotAllStudents(response.data));
    })
    .catch(console.error);
  };
};
export const writeStudent = (newState, history) => {
  return function thunk (dispatch) {
    axios.post('/api/students', newState)
    .then(res => res.data)
    .then(newStudent => {
      dispatch(gotStudent(newStudent));
      history.push('/students');
    })
    .catch(console.error);
  };
};
export const deleteStudent = (id) => {
  return function thunk (dispatch) {
    axios.delete(`/api/students/${id}`)
    .then(() => {
      dispatch(fetchAllStudents());
    })
    .catch(console.error);
  };
};
export const editStudent = (newState, id, history) => {
  return function thunk (dispatch) {
    axios.put(`/api/students/${id}`, newState)
    .then(res => res.data)
    .then(newStudent => {
      dispatch(gotStudent(newStudent));
      dispatch(fetchAllStudents());
      history.push(`/students/${id}`);
    })
    .catch(console.error);
  };
};

// reducer
const allStudentsReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_ALL_STUDENTS:
      return action.allStudents;
    case GOT_STUDENT:
      return [...state, action.student];
    default:
      return state;
  }
};

export default allStudentsReducer;
