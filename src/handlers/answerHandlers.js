export const createSelectAnswerHandler = (question) => {

    return (event) => {
      // user can select an answer for each question. 
        for (const key in question.answers) {
          if (question.answers[key] === event.target.textContent){
            question.selected = key;
          }
        }
        // The user can know which questions are correct and incorrect.
        if (question.selected === question.correct) {
         event.target.classList.add('correctChoice');
        }
        else {
          event.target.classList.add('incorrectChoice');
        }

    }
}


