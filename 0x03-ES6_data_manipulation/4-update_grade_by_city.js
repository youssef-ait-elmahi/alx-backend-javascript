export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find(
        (grade) => grade.studentId === student.id,
      );
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
