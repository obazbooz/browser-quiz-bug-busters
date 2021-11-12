export const getNumOfQues = (quizData) => {
  return `Question ${quizData.currentQuestionIndex + 1} out of ${
    quizData.questions.length
  }`;
};
