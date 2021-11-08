export const createSelectAnswerHandler = (question) => {
    return (event) => {
        console.log(event);
        question.selected = event.target.id;
    }
}