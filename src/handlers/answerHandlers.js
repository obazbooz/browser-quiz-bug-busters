import { createQuestionElement } from "../views/questionViews.js";

export const createSelectAnswerHandler = (question) => {

    return (event) => {
      const answerLi =  document.querySelectorAll('li');
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
    }


