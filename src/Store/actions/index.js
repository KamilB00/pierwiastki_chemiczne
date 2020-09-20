export const chooseQuestion = () => ({
  type: "CHOOSE_QUESTION",
});

export const markQuestionCorrect = (choice) => ({
  type: "MARK_QUESTION_AS_CORRECT",
  choice,
});

export const markQuestionWrong = (choice) => ({
  type: "MARK_QUESTION_AS_WRONG",
  choice,
});


export const removeFromAllData = (choice) => ({
  type: "REMOVE_FROM_ALLDATA",
  choice,
});