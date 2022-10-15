import React, { useEffect, useState } from 'react';
import { QuizProps } from '../types';
import { shuffleArray } from '../helpers';
import { DEFAULT_LOCALE } from '../constants';
import Questions from './Questions';
import '../styles/styles.css';

function Quiz(props: QuizProps) {
  const {
    isShowAllQuestions,
    onComplete,
    onQuestionSubmit,
    quiz,
    shuffle,
    locale = DEFAULT_LOCALE,
  } = props;

  const {
    title,
    questions: questionsQuiz,
  } = quiz;

  const [questions, setQuestions] = useState(questionsQuiz);

  useEffect(() => {
    if (shuffle) {
      setQuestions(shuffleArray(questionsQuiz));
    }
  }, [shuffle]);

  return (
    <div>
      <h3>
        {title}
      </h3>

      <Questions
        isShowAllQuestions={isShowAllQuestions}
        onComplete={onComplete}
        onQuestionSubmit={onQuestionSubmit}
        questions={questions}
        locale={locale}
      />
    </div>
  );
}

export default Quiz;
