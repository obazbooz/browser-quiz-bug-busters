'use strict';

import {
  QUESTION_CONTAINER_ID,
  QUIZ_CONTAINER_ID,
  SCORE_CONTAINER_ID,
  HINT_CONTAINER_ID,
  TIMER_DO
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

  const scoreContainer = createDOMElement('div', {
    id: SCORE_CONTAINER_ID,
  });

  const timerDo = createDOMElement('div', { id: TIMER_DO });
  quizContainer.appendChild(timerDo);

  const hintContainer = createDOMElement('div', { id: HINT_CONTAINER_ID });

  quizContainer.appendChild(scoreContainer);
  questionContainer.appendChild(hintContainer);
  quizContainer.appendChild(questionContainer);

  const nextQuestionButton = createNextQuestionButtonElement();
  quizContainer.appendChild(nextQuestionButton);

  userInterfaceContainer.appendChild(quizContainer);
};

window.addEventListener('load', initializeQuiz);
