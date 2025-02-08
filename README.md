# Quiz App

A simple React-based quiz application using Zustand for state management.

## Features
- Displays multiple-choice questions.
- Tracks user score.
- Displays results at the end of the quiz.
- Allows replaying the quiz.
- Uses Zustand for efficient state management.

## Tech Stack
- React.js
- Zustand (State Management)
- Tailwind CSS (for styling)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RofixWork/Quiz-App-Reactjs-and-Zustand-.git
   cd quiz-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Project Structure
```
quiz-app/
│-- src/
│   ├── components/
│   │   ├── QuizApp.js
│   ├── store/
│   │   ├── useStore.js
│   ├── data/
│   │   ├── Questions.js
│   ├── App.js
│   ├── index.js
│-- public/
│-- package.json
│-- README.md
```

## Usage
- Start the app and answer the questions.
- At the end of the quiz, your score will be displayed.
- Click the **Replay** button to restart the quiz.

## Zustand Store (State Management)
Located in `src/store/useStore.js`, Zustand manages the state:
- `questions`: Stores the quiz questions.
- `currentQuestion`: Tracks the index of the current question.
- `score`: Keeps track of the user's score.
- `nextQuestion()`: Moves to the next question.
- `updateScore()`: Increases the score when the user answers correctly.
- `reset()`: Resets the quiz to the initial state.
- `isFinish`: Boolean indicating if the quiz has ended.

## Contributing
Feel free to contribute by submitting pull requests or issues.

## License
This project is licensed under the MIT License.

