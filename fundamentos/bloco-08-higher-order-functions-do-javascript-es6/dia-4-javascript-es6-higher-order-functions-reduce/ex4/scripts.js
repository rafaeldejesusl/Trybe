const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  let media = grades.map((book) => book.reduce((total, grade) => total = total + grade, 0) / book.length);
  let result = students.map((student, index) => {
    return {student: student, average: media[index]}
  })
   return result;
}
console.log(studentAverage());