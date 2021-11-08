export const createSelectAnswerHandler = (question) => {

    return (event) => {
        for (const key in question.answers) {
          if (question.answers[key] === event.target.textContent){
            question.selected = key;
          }
        }
    }
}
