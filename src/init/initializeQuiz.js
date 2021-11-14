'use strict';

import {
  QUESTION_CONTAINER_ID,
  QUIZ_CONTAINER_ID,
  SCORE_CONTAINER_ID,
  HINT_CONTAINER_ID,
  TIMER_ID,
} from '../constants.js';
import { showCurrentQuestion } from '../handlers/questionHandlers.js';
import { createDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { createNextQuestionButtonElement } from '../views/questionViews.js';
import { quizData } from '../data.js';

const initializeQuiz = () => {
  quizData.currentQuestionIndex = 0;
  setupQuizHTML();
  showCurrentQuestion();
};

const setupQuizHTML = () => {
  const userInterfaceContainer = getDOMElement('user-interface');
  const quizContainer = createDOMElement('div', { id: QUIZ_CONTAINER_ID });
  const questionContainer = createDOMElement('div', {
    id: QUESTION_CONTAINER_ID,
  });
  const timerElement = createDOMElement('div', { id: TIMER_ID });
  const scoreContainer = createDOMElement('div', { id: SCORE_CONTAINER_ID });
  const hintContainer = createDOMElement('div', { id: HINT_CONTAINER_ID });
  const nextQuestionButton = createNextQuestionButtonElement();

  userInterfaceContainer.appendChild(quizContainer);
  quizContainer.appendChild(timerElement);
  quizContainer.appendChild(scoreContainer);
  quizContainer.appendChild(questionContainer);
  questionContainer.appendChild(hintContainer);
  quizContainer.appendChild(nextQuestionButton);
};

// Step one initialize the quiz
window.addEventListener('load', initializeQuiz);
