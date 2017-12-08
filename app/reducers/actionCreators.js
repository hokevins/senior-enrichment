// action types
export const GOT_CAMPUSES = 'GOT_CAMPUSES';
export const GOT_ALL_STUDENTS = 'GOT_ALL_STUDENTS';

// action creators
export const gotCampuses = (campuses) => {
  return {
    type: GOT_CAMPUSES,
    campuses: campuses
  };
};
export const gotAllStudents = (allStudents) => {
  return {
    type: GOT_ALL_STUDENTS,
    allStudents: allStudents
  };
};
