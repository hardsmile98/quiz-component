import React from 'react';

type Props = {
  index: number,
  countAll: number,
};

function ProgressBar({ index, countAll }: Props) {
  const percen = Math.round((index / countAll) * 100);

  return (
    <div className="quiz-progress">
      <div style={{ width: `${percen}%` }} />
    </div>
  );
}

export default ProgressBar;
