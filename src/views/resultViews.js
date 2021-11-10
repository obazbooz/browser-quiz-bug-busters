import { clearDOMElement } from '../utils/DOMUtils.js';
import { getDOMElement } from '../utils/DOMUtils.js';
import { NEXT_QUESTION_BUTTON_ID, QUIZ_CONTAINER_ID } from '../constants.js';
import { getScoreElement } from './scoreView.js';
import { quizData } from '../data.js';

// handler function to clear quiz container and create  and append a new header
// to show our quiz result
export const showFinalResult = () => {
  const quizContainer = getDOMElement(QUIZ_CONTAINER_ID);
  clearDOMElement(quizContainer);
  const result = getScoreElement();

  quizContainer.appendChild(result);
};

// calculated score and change the label of next question button to Show Score
export const showResultButton = () => {
  clearDOMElement(getDOMElement(NEXT_QUESTION_BUTTON_ID));
  const showResultButton = getDOMElement(NEXT_QUESTION_BUTTON_ID);
  showResultButton.textContent = 'Show Score';
  showResultButton.addEventListener('click', showFinalResult);
};
