import React, { useEffect } from 'react';

type Props = {
  points: number | null
  finishText: {
    resultText?: string
    endText?: string
    correctText?: string
    incorrectText?: string
  }
  countCorrect: number
  countIncorrect: number
  onComplete?: Function,
  retryText?: string,
  isAllowRetry: boolean,
  onRetry: Function,
};

function Finish({
  points,
  finishText,
  countCorrect,
  countIncorrect,
  onComplete,
  isAllowRetry,
  retryText,
  onRetry,
}: Props) {
  const {
    endText, resultText, correctText, incorrectText,
  } = finishText;

  useEffect(() => {
    if (typeof onComplete === 'function') {
      onComplete();
    }
  }, []);

  return (
    <div>
      {endText && (
        <div className="quiz-mb">
          {endText}
        </div>
      )}

      {correctText && (
        <div className="quiz-mb">
          {`${correctText} : `}
          <b>{countCorrect}</b>
        </div>
      )}

      {incorrectText && (
        <div className="quiz-mb">
          {`${incorrectText} : `}
          <b>{countIncorrect}</b>
        </div>
      )}

      {resultText && points !== null && (
        <div className="quiz-mb">
          {`${resultText}: ${points}`}
        </div>
      )}

      {isAllowRetry && (
        <button
          type="button"
          className="quiz-mb quiz-button quiz-retry"
          onClick={() => onRetry()}
        >
          {retryText}
        </button>
      )}
    </div>
  );
}

export default Finish;
