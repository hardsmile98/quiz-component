import React from 'react';

type Props = {
  points: number,
  resultText?: string,
  endText?: string,
};

function Finish({ points, resultText, endText }: Props) {
  return (
    <div>
      {endText && (
        <div className="quiz-mb">
          {endText}
        </div>
      )}

      {!!(resultText && points) && (
        <div className="quiz-mb">
          {`${resultText}: ${points}`}
        </div>
      )}
    </div>
  );
}

export default Finish;
