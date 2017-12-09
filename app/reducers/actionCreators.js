// action types
export const GOT_CAMPUSES = 'GOT_CAMPUSES';
export const GOT_ALL_STUDENTS = 'GOT_ALL_STUDENTS';
export const GOT_STUDENT = 'GOT_STUDENT';
// export const DELETE_STUDENT = 'DELETE_STUDENT';

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
export const gotStudent = (student) => {
  return {
    type: GOT_STUDENT,
    student: student
  };
};
// export const deleteStudent = () => {
//   return {
//     type: DELETE_STUDENT
//   };
// };
