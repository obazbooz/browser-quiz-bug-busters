import { showQuizResult } from "./resultHandlers.js";
import { quizData } from "../data.js";

export const createSelectAnswerHandler = (question) => {

  return (event) => {
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
    showQuizResult(quizData.questions, quizData.currentQuestionIndex + 1);
  }
}



