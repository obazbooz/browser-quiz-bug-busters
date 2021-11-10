import { clearDOMElement } from '../utils/DOMUtils.js';
import { getDOMElement } from '../utils/DOMUtils.js';
import { createDOMElement } from '../utils/DOMUtils.js';
import { NEXT_QUESTION_BUTTON_ID, QUIZ_CONTAINER_ID } from '../constants.js';
import { showResult } from "./scoreView.js";

// handler function to clear quiz container and create  and append a new header 
// to show our quiz result
export const showFinalResult = () => {
  clearDOMElement(getDOMElement(QUIZ_CONTAINER_ID));
  const result = showResult();
  //result.textContent = `Your score is ${score} out of ${numOfQuestions}`;
  const container = getDOMElement(QUIZ_CONTAINER_ID);
  container.appendChild(result);
};


// calculated score and change the label of next question button to Show Score
export const showQuizResult = () => {

  showFinalResult();


  if (questions.length === currentQuestionIndex) {
    clearDOMElement(getDOMElement(NEXT_QUESTION_BUTTON_ID));
    const showResultButton = getDOMElement(NEXT_QUESTION_BUTTON_ID);
    showResultButton.textContent = 'Show Score';
    showResultButton.addEventListener(
      'click',
      showFinalResult
    );
  
}};