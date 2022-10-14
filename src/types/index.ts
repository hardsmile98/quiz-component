// isShowAllQuestions - show all questions at once
// onComplete - a quiz summary object will be returned to the function
// onQuestionSubmit - A user response for a question will be returned
// quiz - quiz json object
// shuffle - mixing questions
// locale - object to override text
type QuizProps = {
    isShowAllQuestions?: boolean,
    onComplete?: Function,
    onQuestionSubmit?: Function,
    quiz: Quiz,
    shuffle?: boolean,
    locale?: Locale,
}

type Quiz = {
    title?: string
    description?: string
    questions: Array<Question>
}

type Question = {
    question: string
    image?: string,
    answers: Array<string>
    correctAnswer: number
    point?: number
    messageForCorrectAnswer?: string
    messageForIncorrectAnswer?: string
}

type Locale = {
    question?:  string
    nextButton?: string
    resultButton?: string
    correctAnswer?: string
    incorrectAnswer?: string
};

export {
    QuizProps,
    Quiz,
    Question,
    Locale,
}