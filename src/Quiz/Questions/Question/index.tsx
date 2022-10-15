import React from 'react';
import { Question as QuestionProps } from '../../../types';

type Props = {
  currentQuestion: QuestionProps
};

function Question({ currentQuestion }: Props) {
  const {
    question,
    image,
    answers,
    correctAnswer,
    point,
    messageForCorrectAnswer,
    messageForIncorrectAnswer,
  } = currentQuestion;

  return (
    <>
      <h3>
        {question}
      </h3>

      {image && (
        <div>
          <img src={image} alt="" />
        </div>
      )}
    </>
  );
}

export default Question;
