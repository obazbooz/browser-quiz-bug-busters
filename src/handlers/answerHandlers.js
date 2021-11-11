// import { showQuizResult } from "../views/resultViews.js";
// import { quizData } from "../data.js";

import { SCORE_CONTAINER_ID } from '../constants.js';
import { clearDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { getScoreElement } from '../views/scoreView.js';

export const createSelectAnswerHandler = (question) => {
  return (event) => {
    // user can only choose once
    if (question.selected === null) {
      const answerLi = document.querySelectorAll('li');
      // user can select an answer for each question.
      for (const key in question.answers) {
        if (key === event.target.getAttribute('data-answer-key')) {
          question.selected = key;
        }
      }
      // The user can know which questions are correct and incorrect.
      if (question.selected !== question.correct) {
        event.target.classList.add('incorrectChoice');
      }
      for (const element of answerLi) {
        if (element.getAttribute('data-answer-key') === question.correct) {
          element.classList.add('correctChoice');
        }
      }
    }

    const scoreContainer = getDOMElement(SCORE_CONTAINER_ID);
    clearDOMElement(scoreContainer);
    scoreContainer.appendChild(getScoreElement());
  };
};
