'use strict';

import { QUESTION_CONTAINER_ID, QUIZ_CONTAINER_ID } from '../constants.js';
import { showCurrentQuestion } from '../handlers/questionHandlers.js';
import { createDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { createNextQuestionButtonElement } from '../views/questionViews.js';
import { quizData } from '../data.js';

// Step 1 : created realTimeResult to catch h3 element "score"
let workOnce = true;
export let realTimeResult;

// Step 2 : initialized realTimeResult and returns realTimeResult
export const showRealTimeResult = () => {
  const realTimeResult = createDOMElement('h3');
  if (workOnce) {
    realTimeResult.textContent = `Your score is 0 out of ${quizData.questions.length}`;
    workOnce = false;
  }
  return realTimeResult;
}

const initializeQuiz = () => {
  quizData.currentQuestionIndex = 0;

  setupQuizHTML();
  showCurrentQuestion();
};

const setupQuizHTML = () => {
  const userInterfaceContainer = getDOMElement('user-interface');
  const quizContainer = createDOMElement('div', { id: QUIZ_CONTAINER_ID });
  // Step 3 : append score element above quizContainer
  realTimeResult = showRealTimeResult();
  quizContainer.appendChild(realTimeResult);

  const questionContainer = createDOMElement('div', {
    id: QUESTION_CONTAINER_ID,
  });

  quizContainer.appendChild(questionContainer);

  const nextQuestionButton = createNextQuestionButtonElement();
  quizContainer.appendChild(nextQuestionButton);

  console.log(quizContainer);
  userInterfaceContainer.appendChild(quizContainer);
};

window.addEventListener('load', initializeQuiz);
