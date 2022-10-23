import React, { useState } from 'react';
import { QuestionsProps } from '../../types';
import Question from './Question';
import Finish from './Finish';
import ProgressBar from './ProgressBar';

function Questions(props: QuestionsProps) {
  const {
    onComplete,
    onQuestionSubmit,
    questions,
    locale,
    isPorgressBar,
    isAllowRetry,
  } = props;

  const {
    questionText,
    nextButton,
    resultText,
    endText,
    correctText,
    incorrectText,
    retryText,
  } = locale;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [points, setPoints] = useState<null | number>(null);
  const [answer, setAnswer] = useState<null | number>(null);
  const [isCorrect, setIsCorrent] = useState<null | boolean>(null);
  const [countCorrect, setCountCorrect] = useState(0);

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

  const finishText = {
    resultText, endText, correctText, incorrectText,
  };

  const countQuestions = questions.length;

  const endQuiz = currentQuestionIndex === countQuestions;

  const countIncorrect = countQuestions - countCorrect;

  const onMakeAnswer = (answerIndex: number) => {
    if (answer === null) {
      const isCorrectAnswer = answerIndex + 1 === correctAnswer;

      setAnswer(answerIndex);
      setIsCorrent(isCorrectAnswer);

      if (isCorrectAnswer) {
        setCountCorrect((prev) => prev + 1);
      }
    }
  };

  const onNext = () => {
    if (answer !== null) {
      const currentPoint = isCorrect ? point : 0;

      if (currentPoint) {
        setPoints((prevPoints) => (prevPoints === null ? currentPoint : prevPoints + currentPoint));
      }

      setCurrentQuestionIndex((index) => index + 1);

      setAnswer(null);
      setIsCorrent(null);
    }

    if (typeof onQuestionSubmit === 'function') {
      onQuestionSubmit();
    }
  };

  const onRetry = () => {
    setCurrentQuestionIndex(0);
    setPoints(null);
    setAnswer(null);
    setIsCorrent(null);
    setCountCorrect(0);
  };

  if (endQuiz) {
    return (
      <Finish
        points={points}
        finishText={finishText}
        countCorrect={countCorrect}
        countIncorrect={countIncorrect}
        onComplete={onComplete}
        isAllowRetry={isAllowRetry}
        retryText={retryText}
        onRetry={onRetry}
      />
    );
  }

  return (
    <>
      {isPorgressBar && (
        <div className="quiz-mb">
          <ProgressBar
            index={currentQuestionIndex}
            countAll={countQuestions}
          />
        </div>
      )}

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
