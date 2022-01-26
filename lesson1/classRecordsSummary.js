/*
problem:
create a function that takes an object with nested objects as an argument `studentScores`
and return an object that contains 2 key/value pairs
studentGrades and an array of the numeric score and letter grade in string format
exams and an array of 4 objects that each contain the avg, min and max scores for that exam
input- object of sub objects (studentScores)
output- object of sub objects (summary)

examples:
student 1
exams: [90, 95, 100, 80],
exercises: [20, 15, 10, 19, 15]
avg exam score = 90+95+100+80/4 = 91.25
total ex. score = 20+15+10+19+15 = 79
weights-
91.25 * .65 + 79 *.35 = 86.9625 ~ 87
87 (B)

student 2
exams: [50, 70, 90, 100],
exercises: [0, 15, 20, 15, 15],
avg exam score = 50+70+90+100/4 = 77.5
total ex. score = 0+15+20+15+15 = 65
weights-
77.5 * .65 + 65 *.35 ~ 73.125 = 73
73 (D)

data structures:
objects, arrays, strings, numbers

algorithm:
helper function that takes the avg of exam score of a student

helper function that sums a student's exercises score

helper function that gets the final percentage grade and rounds to nearest integer

helper that gets the letter grade and returns the percent grade and letter grade together


function that takes an array and function where the function does something to that array

function that takes student exams array and studen exs array, and then call back function
that calculates avgExamScore and sumExScore then gets the percent grade and letter grade

get arrays for each exam, exam1 exam2, etc
iterate through each student exams scores array
create a new

*/
let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

const examWeight = .65;
const exerciseWeight = .35;

function sumScore(scores) {
  return scores.reduce((total, score) => total + score);
}

function avgScore(scores) {
  return sumScore(scores) / scores.length;
}

function percentGrade(examScores, exerciseScores) {
  let examGrade = avgScore(examScores);
  let exerciseGrade = sumScore(exerciseScores);
  return Math.round((examGrade * examWeight) + (exerciseGrade * exerciseWeight));
}

function letterGrade(percentGrade) {
  if (percentGrade >= 93) return 'A';
  if (percentGrade >= 85) return 'B';
  if (percentGrade >= 77) return 'C';
  if (percentGrade >= 69) return 'D';
  if (percentGrade >= 60) return 'E';
  return 'F';
}

function formatStudentGrade(examScores, exerciseScores) {
  let percentageGrade = percentGrade(examScores, exerciseScores);
  return `${percentageGrade} (${letterGrade(percentageGrade)})`;
}

function transposeExamScores(scores) {
  return scores[0].map((col, idx) => scores.map(row => row[idx]));
}

function formatExamValues(studentScores) {
  let examScores = transposeExamScores(studentScores);
  return examScores.map(exam => {
    return {
      average: avgScore(exam),
      minimum: Math.min(...exam),
      maximum: Math.max(...exam),
    };
  });
}

function generateClassRecordSummary(scores) {
  let studentGrades = Object.values(scores).map(student => {
    return formatStudentGrade(student.scores.exams, student.scores.exercises);
  });

  let allStudentExamScores = Object.values(scores).map(student => {
    return student.scores.exams;
  });

  return {
    studentGrades: studentGrades,
    exams: formatExamValues(allStudentExamScores),
  };
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }