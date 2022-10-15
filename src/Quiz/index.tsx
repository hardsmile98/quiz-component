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

  return <div>INIT xxx 12313 1312yyyyxxx</div>;
}

export default Quiz;
