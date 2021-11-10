'use strict';

import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { nextQuestion } from '../listeners/questionListeners.js';
import { createDOMElement } from '../utils/DOMUtils.js';
import { createSelectAnswerHandler } from '../handlers/answerHandlers.js';
import { showRealTimeResult } from './scoreView.js';

/**
 * Create an Answer element
 */
export const createAnswerElement = (answerKey, answerText) => {
  const answerElement = createDOMElement('li');
  answerElement.innerText = answerText;
  answerElement.setAttribute('data-answer-key', answerKey);

  return answerElement;
};

/**
 * Create a full question element
 */
export const createQuestionElement = (question) => {
  const container = createDOMElement('div');
  container.appendChild(showRealTimeResult());
  const title = createDOMElement('h1');
  title.innerText = question.text;
  container.appendChild(title);
  const answerContainer = createDOMElement('ol');
  for (const answerKey in question.answers) {
    const answer = createAnswerElement(answerKey, question.answers[answerKey]);

    answer.addEventListener('click', createSelectAnswerHandler(question));
    answerContainer.appendChild(answer);
  }

  container.appendChild(answerContainer);

  return container;
};

/**
 * Creates and returns the next questions button
 */
export const createNextQuestionButtonElement = () => {
  const buttonElement = createDOMElement('button', {
    id: NEXT_QUESTION_BUTTON_ID,
  });

  buttonElement.innerText = 'Next question';
  buttonElement.addEventListener('click', nextQuestion);

  return buttonElement;
};


