import React, { useState } from 'react';
import { QuestionsProps } from '../../types';
import Question from './Question';

function Questions(props: QuestionsProps) {
  const {
    onComplete,
    onQuestionSubmit,
    questions,
    locale,
  } = props;

  const {
    question,
  } = locale;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <div>
        {`${question} №${currentQuestionIndex + 1}`}
      </div>

      <Question
        currentQuestion={currentQuestion}
      />
    </>
  );
}

export default Questions;
