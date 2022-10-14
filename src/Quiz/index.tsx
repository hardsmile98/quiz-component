import React from 'react';
import { QuizProps } from '../types';
import { DEFAULT_LOCALE } from '../constants';

function Quiz(props: QuizProps) {
  const {
    isShowAllQuestions,
    onComplete,
    onQuestionSubmit,
    quiz,
    shuffle,
    locale = DEFAULT_LOCALE,
  } = props;

  return <div>INIT</div>;
}

export default Quiz;
