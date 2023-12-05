const getListStudentIds = (students) => {
  let studentsIds = [];
  if (!(students instanceof Array)) {
    return studentsIds;
  }
  studentsIds = students.map((pupil) => pupil.id);
  return studentsIds;
};

export default getListStudentIds;
