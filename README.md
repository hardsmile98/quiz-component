# quiz-component-react
:blue_book: React Quiz Component 

quiz-component-react is a React component allowing users to attempt a quiz.

## Features
- Progress bar
- Allow retry
- Custom result page
- New question types
- Allow markdown in question


## Installing
```
npm i quiz-component-react
```
## Importing quiz-component-react
```
import Quiz from 'quiz-component-react';
```

## Props

|Name|Type|Default|Required|Description|
|:--|:--:|:-----:|:--|:----------|
|quiz|`object`|`null`|Y|Quiz Json Object|
|shuffle|`boolean`|`false`|N|Shuffle the questions|
|onComplete|`function`|`null`|N|Function after end quiz|
|onQuestionSubmit|`function`|`null`|N|Function after question|
|locale|`function`|`locale`|N|Text in quiz|

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
