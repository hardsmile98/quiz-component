// onComplete - a quiz summary object will be returned to the function
// onQuestionSubmit - A user response for a question will be returned
// quiz - quiz json object
// shuffle - mixing questions
// locale - object to override text
type QuizProps = {
  onComplete?: Function,
  onQuestionSubmit?: Function,
  quiz: Quiz,
  shuffle?: boolean,
  locale?: Locale,
};

type QuestionsProps = {
  onComplete?: Function,
  onQuestionSubmit?: Function,
  questions: Array<Question>,
  locale: Locale,
};

type Quiz = {
  title?: string
  description?: string
  questions: Array<Question>
};

type Question = {
  question: string
  image?: string,
  answers: Array<string>
  correctAnswer: number
  point?: number
  messageForCorrectAnswer?: string
  messageForIncorrectAnswer?: string
};

type Locale = {
  questionText?: string
  nextButton?: string
  resultText?: string
  endText?: string
  correctText?: string
  incorrectText?: string
};

export {
  QuizProps,
  QuestionsProps,
  Quiz,
  Question,
  Locale,
};
