import { QUIZ_CONTAINER_ID } from '../constants.js';
import { quizData } from '../data.js';
import { createDOMElement } from '../utils/DOMUtils.js';
import { calculateScore } from '../utils/scoreUtils.js';

import { getDOMElement } from '../utils/DOMUtils.js';

// Step 1 : created realTimeResult to catch h3 element "score"

// Step 4 : we reach realTimeResult from ../init/initializeQuiz.js
// showRealTimeScore updates real time score
const getScoreText = (numOfQuestions, score) => {
  return `Your score is ${score} out of ${numOfQuestions}`;
};
// Step 2 : initialized realTimeResult and returns realTimeResult

export const getScoreElement = () => {
  const result = createDOMElement('h3');
  result.textContent = getScoreText(
    quizData.questions.length,
    calculateScore(quizData.questions)
  );

  return result;
};
