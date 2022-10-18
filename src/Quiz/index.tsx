import React, { useEffect, useState } from 'react';
import { QuizProps, Question } from '../types';
import { DEFAULT_LOCALE } from '../constants';
import Questions from './Questions';
import { shuffleArray } from '../utils';
import '../styles/styles.css';

function Quiz(props: QuizProps) {
  const {
    onComplete,
    onQuestionSubmit,
    quiz,
    shuffle = false,
    locale,
  } = props;

  const {
    title,
    questions: questionsQuiz,
  } = quiz;

  const [questions, setQuestions] = useState<Array<Question>>([]);

  const diffLocale = { ...DEFAULT_LOCALE, ...locale };

  useEffect(() => {
    setQuestions(shuffle ? shuffleArray(questionsQuiz) : questionsQuiz);
  }, []);

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
        questions={questions}
        locale={diffLocale}
      />
    </div>
  );
}

export default Quiz;
