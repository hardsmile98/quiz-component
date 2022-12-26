# quiz-component-react
:orange_book: React Quiz Component 

[![NPM version](https://img.shields.io/npm/v/quiz-component-react.svg)](https://www.npmjs.com/package/quiz-component-react) [![License](https://img.shields.io/npm/l/quiz-component-react.svg)](https://github.com/wingkwong/quiz-component-react/blob/main/LICENSE)

quiz-component-react is a React component allowing users to attempt a quiz.

## Features
- Progress bar ✓
- Allow retry ✓
- Custom result page
- New question types
- Allow markdown in question


## Installing
```
npm i quiz-component-react
```
## Importing quiz-component-react
```
import { Quiz } from 'quiz-component-react';
```

## Defining Your Quiz Source
The quiz source is a JSON object.
```javascript
export const quiz =  {
  "title": "Title quiz",
  "questions": [
    {
      "question": "Paul can't touch the ceiling because he is too ______.",
      "image": "src image",
      "answers": [
        "shortening",
        "shortly",
        "short",
        "shortness"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "point": "20"
    },
  ]
} 
```

### Locale Customization 
If you want to use your customized text, you can send props locale
```javascript
 "locale": {
    "questionText": "Question",
    "nextButton": "Next",
    "resultText": "Your result",
    "endText": "Сongratulations you passed the quiz",
    "correctText": "Correct answers",
    "incorrectText": "Incorrect answers",
    "retryText": "Retry",
  } 
```

## Props

|Name|Type|Default|Required|Description|
|:--|:--:|:-----:|:--|:----------|
|quiz|`object`|`null`|Y|Quiz Json Object|
|shuffle|`boolean`|`false`|N|Shuffle the questions|
|onComplete|`function`|`null`|N|Function after end quiz|
|onQuestionSubmit|`function`|`null`|N|Function after question|
|locale|`function`|`locale`|N|Text in quiz|
|isPorgressBar|`boolean`|`false`|N|Show progress bar|
|isAllowRetry|`boolean`|`false`|N|Allow retry quiz|
|isNoShowAnswer|`boolean`|`false`|N|Don't show answer after select|

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
