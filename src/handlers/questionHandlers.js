'use strict';

import { QUESTION_CONTAINER_ID } from '../constants.js';
import { createQuestionElement } from '../views/questionViews.js';
import { clearDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { quizData } from '../data.js';
import { showQuizResult } from '../views/resultViews.js';

export const showCurrentQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionDOM = createQuestionElement(currentQuestion);

  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  clearDOMElement(questionContainer);
  questionContainer.appendChild(questionDOM);
};


// bug here
export const handleNextQuestion = () => {
if(quizData.currentQuestionIndex < quizData.questions.length){
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
    showCurrentQuestion();
    console.log(quizData.currentQuestionIndex);
}else if (quizData.questions.length === quizData.currentQuestionIndex ){
    showQuizResult();
    console.log(quizData.currentQuestionIndex);
  }

};
