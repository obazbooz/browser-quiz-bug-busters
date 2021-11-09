import { clearDOMElement } from "../utils/DOMUtils.js";
import { getDOMElement } from "../utils/DOMUtils.js";
import { NEXT_QUESTION_BUTTON_ID } from "../constants.js";
import { QUIZ_CONTAINER_ID } from "../constants.js";
import { createDOMElement } from "../utils/DOMUtils.js";
import { realTimeResult } from "../init/initializeQuiz.js";

// handler function to clear quiz container and create  and append a new header 
// to show our quiz result
const showScore = (numOfQuestions, score) => {
  clearDOMElement(getDOMElement(QUIZ_CONTAINER_ID));
  const result = createDOMElement('h1');
  result.textContent = `Your score is ${score} out of ${numOfQuestions}`;
  const container = getDOMElement(QUIZ_CONTAINER_ID);
  container.appendChild(result);
}

// Step 4 : we reach realTimeResult from ../init/initializeQuiz.js 
// showRealTimeScore updates real time score
const showRealTimeScore = (numOfQuestions, score) => {
  realTimeResult.textContent = `Your score is ${score} out of ${numOfQuestions}`;
}

// calculated score and change the label of next question button to Show Score
export const showQuizResult = (questions, currentQuestionIndex) => {
  let scoreCounter = 0;
  for (const question of questions) {
    if (question.correct === question.selected) {
      scoreCounter++;
    }
  }
  showRealTimeScore(questions.length, scoreCounter);
  if (questions.length === currentQuestionIndex) {
    clearDOMElement(getDOMElement(NEXT_QUESTION_BUTTON_ID));
    const showResultButton = getDOMElement(NEXT_QUESTION_BUTTON_ID);
    showResultButton.textContent = 'Show Score';
    showResultButton.addEventListener('click', showScore(questions.length, scoreCounter));
  }
}

