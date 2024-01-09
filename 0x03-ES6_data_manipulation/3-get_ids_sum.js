export default function getStudentIdsSum(list) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.reduce((accumulator, student) => accumulator + student.id, 0);
}
