import React from 'react';
import { QuizProps } from '../types';
import { DEFAULT_LOCALE } from '../constants';
import Questions from './Questions';
import '../styles/styles.css';

function Quiz(props: QuizProps) {
  const {
    onComplete,
    onQuestionSubmit,
    quiz,
    shuffle = false,
    locale,
  } = props;

  const diffLocale = { ...DEFAULT_LOCALE, ...locale };

  const {
    title,
    questions,
  } = quiz;

  return (
    <div className="quiz">
      {title && (
        <h3 className="quiz-mb">
          {title}
        </h3>
      )}

      <Questions
        onComplete={onComplete}
        onQuestionSubmit={onQuestionSubmit}
        shuffle={shuffle}
        questions={questions}
        locale={diffLocale}
      />
    </div>
  );
}

export default Quiz;
