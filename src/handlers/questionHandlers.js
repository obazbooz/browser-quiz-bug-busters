'use strict';

import { QUESTION_CONTAINER_ID } from '../constants.js';
import { createQuestionElement } from '../views/questionViews.js';
import { clearDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { quizData } from '../data.js';
import { showFinalResult, showResultButton } from '../views/resultViews.js';
import { TimerOnFn } from '../views/timer.js';
import { showNumOfQues } from '../views/questionViews.js';

//supportive function
export const showCurrentQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionDOM = createQuestionElement(currentQuestion);
  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  clearDOMElement(questionContainer);
  questionContainer.appendChild(showNumOfQues());
  questionContainer.appendChild(questionDOM);
  TimerOnFn();
};

// to show current question or final result
export const handleNextQuestion = () => {
  quizData.currentQuestionIndex++;
  if (quizData.questions.length !== quizData.currentQuestionIndex) {
    showCurrentQuestion();
  }
  if (quizData.currentQuestionIndex === quizData.questions.length - 1) {
    showResultButton();
  }
};
