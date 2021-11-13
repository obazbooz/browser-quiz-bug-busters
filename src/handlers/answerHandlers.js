import { SCORE_CONTAINER_ID } from '../constants.js';
import { clearDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { getScoreElement } from '../views/scoreView.js';
import { timerOffFn } from '../views/timer.js';

// This code always run even if the user did not select an
//answer and goes to next question directly

export const createSelectAnswerHandler = (question) => {
  return (event) => {
    if (question.selected === null) {
      const answerLi = document.querySelectorAll('li');
      // user can select an answer for each question.
      // Initialize the attribute data-answer-key with answers keys
      for (const key in question.answers) {
        if (key === event.target.getAttribute('data-answer-key')) {
          question.selected = key;
        }
      }
      // The user can know which questions are correct and incorrect.
      if (question.selected !== question.correct) {
        event.target.classList.add('incorrectChoice');
      }
      timerOffFn();
      for (const element of answerLi) {
        if (element.getAttribute('data-answer-key') === question.correct) {
          element.classList.add('correctChoice');
        }
      }
    }

    const scoreContainer = getDOMElement(SCORE_CONTAINER_ID);
    // we used this clear to avoid the duplication of the score element
    clearDOMElement(scoreContainer);

    scoreContainer.appendChild(getScoreElement());
  };
};
