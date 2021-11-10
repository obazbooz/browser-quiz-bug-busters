import { QUIZ_CONTAINER_ID } from '../constants.js';
import { quizData } from '../data.js';
import { createDOMElement } from '../utils/DOMUtils.js';
import { calculateScore } from '../utils/scoreUtils.js';

// Step 1 : created realTimeResult to catch h3 element "score"

// Step 4 : we reach realTimeResult from ../init/initializeQuiz.js
// showRealTimeScore updates real time score
const showRealTimeScore = (numOfQuestions, score) => {
  return `Your score is ${score} out of ${numOfQuestions}`;
};
// Step 2 : initialized realTimeResult and returns realTimeResult
export const showRealTimeResult = () => {
  const realTimeResult = createDOMElement('h3');
  realTimeResult.textContent = showRealTimeScore(
    quizData.questions.length,
    calculateScore(quizData.questions)
  );
  return realTimeResult;
};
