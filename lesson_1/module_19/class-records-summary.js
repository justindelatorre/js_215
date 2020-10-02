const EXAM_WEIGHT = 0.65;
const EXERCISES_WEIGHT = 1.00 - EXAM_WEIGHT;
const A_LOWER_BOUND = 93;
const B_UPPER_BOUND = 92;
const B_LOWER_BOUND = 85;
const C_UPPER_BOUND = 84;
const C_LOWER_BOUND = 77;
const D_UPPER_BOUND = 76;
const D_LOWER_BOUND = 69;
const E_UPPER_BOUND = 68;
const E_LOWER_BOUND = 60;
const NUMBER_OF_EXAMS = 4;

const studentScores = {
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

function getExamAverage(scoreArray) {
  let length = scoreArray.length;
  return scoreArray.reduce((total, score) => total + score, 0) / length;
}

function getExercisesTotal(scoreArray) {
  return scoreArray.reduce((total, score) => total + score, 0);
}

function calculateFinalGrade(examAverage, exercisesTotal) {
  return Math.round((examAverage * EXAM_WEIGHT) + (exercisesTotal * EXERCISES_WEIGHT));
}

function isA(numberGrade) {
  return numberGrade >= A_LOWER_BOUND;
}

function isB(numberGrade) {
  return numberGrade >= B_LOWER_BOUND && numberGrade <= B_UPPER_BOUND;
}

function isC(numberGrade) {
  return numberGrade >= C_LOWER_BOUND && numberGrade <= C_UPPER_BOUND;
}

function isD(numberGrade) {
  return numberGrade >= D_LOWER_BOUND && numberGrade <= D_UPPER_BOUND;
}

function isE(numberGrade) {
  return numberGrade >= E_LOWER_BOUND && numberGrade <= E_UPPER_BOUND;
}

function getLetterGrade(numberGrade) {
  if (isA(numberGrade)) {
    return 'A';
  } else if (isB(numberGrade)) {
    return 'B';
  } else if (isC(numberGrade)) {
    return 'C';
  } else if (isD(numberGrade)) {
    return 'D';
  } else if (isE(numberGrade)) {
    return 'E';
  } else {
    return 'F';
  }
}

function sortScoresLowToHigh(scoresArray) {
  return scoresArray.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
}

function generateClassRecordSummary(scores) {
  let perStudentScores = {};
  let studentNumbers = Object.keys(scores);
  studentNumbers.forEach(student => {
    let studentExamAverage = getExamAverage(scores[student]['scores']['exams']);
    let studentExercisesTotal = getExercisesTotal(scores[student]['scores']['exercises']);
    let weightedScore = calculateFinalGrade(studentExamAverage, studentExercisesTotal);

    perStudentScores[student] = {
      examAverage: studentExamAverage,
      exercisesTotal: studentExercisesTotal,
      weightedScore: weightedScore,
      letterGrade: getLetterGrade(weightedScore), 
    };
  });

  let studentGradesArray = studentNumbers.map(student => {
    let weightedScore = perStudentScores[student]['weightedScore'];
    let letterGrade = perStudentScores[student]['letterGrade'];
    return `${weightedScore} (${letterGrade})`; 
  });

  let examStats = {};
  studentNumbers.forEach(student => {
    for (let idx = 0; idx < NUMBER_OF_EXAMS; idx += 1) {
      examStats[idx + 1] = examStats[idx + 1] || [];
      examStats[idx + 1].push(scores[student]['scores']['exams'][idx]);
    }
  });

  let examNumbers = Object.keys(examStats);
  let examsArray = [];
  examNumbers.forEach(examNumber => {
    let examAverage = getExamAverage(examStats[examNumber]);
    let examMin = sortScoresLowToHigh(examStats[examNumber])[0];
    let examMax = sortScoresLowToHigh(examStats[examNumber])[examStats[examNumber].length - 1];

    examsArray.push({
      average: examAverage,
      minimum: examMin,
      maximum: examMax,
    });
  });

  return { studentGrades: studentGradesArray, exams: examsArray };
}

generateClassRecordSummary(studentScores);

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
