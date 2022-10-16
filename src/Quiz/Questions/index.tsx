import React, { useState } from 'react';
import { QuestionsProps } from '../../types';
import Question from './Question';
import Finish from './Finish';

function Questions(props: QuestionsProps) {
  const {
    onComplete,
    onQuestionSubmit,
    questions,
    locale,
    shuffle,
  } = props;

  const {
    questionText,
    nextButton,
    resultText,
    endText,
  } = locale;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Array<number>>([]);
  const [points, setPoints] = useState(0);
  const [answer, setAnswer] = useState<null | number>(null);
  const [isCorrect, setIsCorrent] = useState<null | boolean>(null);

  const currentQuestion = questions[currentQuestionIndex] || {};

  const {
    question,
    image,
    answers,
    correctAnswer,
    point = 0,
    messageForCorrectAnswer,
    messageForIncorrectAnswer,
  } = currentQuestion;

  const isVisibleMessage = messageForCorrectAnswer && messageForIncorrectAnswer && answer !== null;

  const questionItem = {
    question, image, answers, correctAnswer,
  };

  const endQuiz = currentQuestionIndex === questions.length;

  const onMakeAnswer = (answerIndex: number) => {
    if (answer === null) {
      setAnswer(answerIndex);
      setIsCorrent(answerIndex + 1 === correctAnswer);
    }
  };

  const onNext = () => {
    if (answer !== null) {
      const currentPoint = isCorrect ? point : 0;

      setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
      setPoints((prevPoints) => prevPoints + currentPoint);
      setCurrentQuestionIndex((index) => index + 1);
      setAnswer(null);
      setIsCorrent(null);
    }
  };

  if (endQuiz) {
    return (
      <Finish
        points={points}
        resultText={resultText}
        endText={endText}
      />
    );
  }

  return (
    <>
      <div className="quiz-mb">
        {`${questionText} №${currentQuestionIndex + 1}`}
      </div>

      <Question
        onMakeAnswer={onMakeAnswer}
        questionItem={questionItem}
        answer={answer}
      />

      <div>
        {answer !== null && (
          <button
            className="quiz-mb quiz-button quiz-next"
            onClick={onNext}
            type="button"
          >
            {nextButton}
          </button>
        )}

        {isVisibleMessage && (
          <div className="quiz-message">
            {isCorrect
              ? messageForCorrectAnswer
              : messageForIncorrectAnswer}
          </div>
        )}
      </div>
    </>
  );
}

export default Questions;
