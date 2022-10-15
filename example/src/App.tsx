import React from 'react';
import { Quiz } from '../../src';
import quiz from './quiz';

function App() {
  return (
    <Quiz quiz={quiz} shuffle />
  );
}

export default App;
