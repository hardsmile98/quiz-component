/* eslint-disable react/require-default-props */
import React from 'react';

type Props = {
  onMakeAnswer?: Function,
  questionItem: {
    question: string,
    image?: string,
    answers: Array<string>
    correctAnswer: number
  },
  answer: number | null,
};

function Question({
  onMakeAnswer,
  questionItem,
  answer,
}: Props) {
  const {
    question,
    image,
    answers,
    correctAnswer,
  } = questionItem;

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

      <form>
        {answers.map((answerItem, index) => (
          <button
            key={answerItem}
            onClick={() => (onMakeAnswer ? onMakeAnswer(index) : undefined)}
            type="button"
          >
            {answerItem}
          </button>
        ))}
      </form>
    </>
  );
}

export default Question;
