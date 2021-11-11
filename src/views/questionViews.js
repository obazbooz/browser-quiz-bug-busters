'use strict';

import {
  NEXT_QUESTION_BUTTON_ID, GET_A_HINT_BUTTON_ID,
  RESOURCE_CONTAINER_ELEMENT_ID, HINT_CONTAINER_ID
} from '../constants.js';
import { nextQuestion } from '../listeners/questionListeners.js';
import { createDOMElement, getDOMElement, clearDOMElement } from '../utils/DOMUtils.js';
import { createSelectAnswerHandler } from '../handlers/answerHandlers.js';
import { showHint } from "../handlers/hintHandlers.js";

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
 * Create an Resource element
 */
// STEP 1: creates a source element which is a list element
// contains an anchor/link
export const createResourceElement = (resourceText, resourceHref) => {
  const resourceListElement = createDOMElement('li');
  resourceListElement.style.listStyle = 'none';
  const resourceElement = createDOMElement('a');
  resourceElement.innerText = resourceText;
  resourceElement.setAttribute('href', resourceHref);
  resourceElement.setAttribute('alt', resourceText);
  resourceElement.setAttribute('target', '_blank');
  resourceListElement.appendChild(resourceElement);
  return resourceListElement;
}

/**
 * Create a full question element
 */
export const createQuestionElement = (question) => {
  const container = createDOMElement('div');

  const title = createDOMElement('h1');
  title.innerText = question.text;
  container.appendChild(title);

  const answerContainer = createDOMElement('ol');
  for (const answerKey in question.answers) {
    const answer = createAnswerElement(answerKey, question.answers[answerKey]);
    // shows correct or incorrect answer
    answer.addEventListener('click', createSelectAnswerHandler(question));
    answerContainer.appendChild(answer);
  }
  container.appendChild(answerContainer);

  // STEP 3: creates show/hide button for sources
  // and append it inside hint-container
  const hintContainer = getDOMElement(HINT_CONTAINER_ID);

  const hintButton = createDOMElement('button', {
    id: GET_A_HINT_BUTTON_ID,
  });

  hintButton.innerText = 'Show Hints';
  hintButton.addEventListener('click', showHint);
  clearDOMElement(getDOMElement(HINT_CONTAINER_ID));
  hintContainer.appendChild(hintButton);



  // STEP 2: creates and initialize list of resources with ul
  const resourceContainer = createDOMElement('ul');
  resourceContainer.setAttribute('id', RESOURCE_CONTAINER_ELEMENT_ID);
  resourceContainer.style.display = 'none';
  for (const link of question.links) {
    const resource = createResourceElement(link.text, link.href);
    resourceContainer.appendChild(resource);
  }

  hintContainer.appendChild(resourceContainer);
  container.appendChild(hintContainer);

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

