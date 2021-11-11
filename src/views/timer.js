import { quizData } from '../data.js';
import { getDOMElement } from '../utils/DOMUtils.js';
import { nextQuestion } from '../listeners/questionListeners.js';
import { showFinalResult } from './resultViews.js';
import { TIMER_DO } from '../constants.js';

// Timer
export let timerDo;
export let activeTimer;
// turn on timer
export const TimerOnFn = () => {
  // console.log(timerDo);
  timerDo = getDOMElement(TIMER_DO);
  timerDo.textContent = quizData.questions[quizData.currentQuestionIndex].timer;
  activeTimer = window.setInterval(counter, 1000);
};
// timer off
export const timerOffFn = () => {
  clearInterval(activeTimer);
};
// counter
export let counter = () => {
  timerDo = getDOMElement(TIMER_DO);

  let timeValue = parseFloat(timerDo.textContent);
  if (
    quizData.currentQuestionIndex === quizData.questions.length - 1 &&
    timeValue <= 0
  ) {
    showFinalResult();
  }
  if (timeValue > 0) {
    timerDo.textContent = timeValue - 1;
  } else {
    timerOffFn();
    nextQuestion();
  }
};
