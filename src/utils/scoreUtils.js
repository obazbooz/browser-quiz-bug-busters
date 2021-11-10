

export const calculateScore = (questions) => {
  let scoreCounter = 0;
  for (const question of questions) {
    if (question.correct === question.selected) {
      scoreCounter++;
    }
  }
  return scoreCounter;
};
