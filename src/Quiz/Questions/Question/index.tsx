import React from 'react';

type Props = {
  onMakeAnswer: Function,
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
      <h3 className="quiz-mb">
        {question}
      </h3>

      {image && (
        <div className="quiz-mb quiz-image">
          <img src={image} alt="" />
        </div>
      )}

      <form>
        {answers.map((answerItem, index) => {
          const isAnswer = answer !== null && answer === index;
          const cls = isAnswer
            ? answer === correctAnswer - 1
              ? 'quiz-correct'
              : 'quiz-incorrect'
            : '';

          const isDisabled = answer !== null && answer !== index;

          return (
            <button
              className={`quiz-mb quiz-button ${cls}`}
              key={answerItem}
              onClick={() => onMakeAnswer(index)}
              type="button"
              disabled={isDisabled}
            >
              {answerItem}
            </button>
          );
        })}
      </form>
    </>
  );
}

export default Question;
