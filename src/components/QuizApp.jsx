import React, { useCallback } from "react";
import useStore from "../store/useStore";
const QuizApp = () => {
  const {
    questions,
    currentQuestion,
    score,
    nextQuestion,
    upadateScore,
    reset,
    isFinish,
  } = useStore();

  const checkAnswer = useCallback(
    (answer) => {
      if (questions[currentQuestion].answer === answer) {
        upadateScore();
      }
      nextQuestion();
    },
    [currentQuestion, questions]
  );

  const handleReplayQuiz = useCallback(() => {
    reset();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-5 p-3 shadow-lg">
      <h1 className="text-xl font-bold text-center">Quiz App</h1>
      {isFinish ? (
        <div className="space-y-2">
          <h3>Score: {score}</h3>
          <h4 className="text-green-500 font-bold">Correct: {score}</h4>
          <h4 className="text-red-500 font-bold">
            Incorrect: {questions.length - score}
          </h4>
          <button
            className="w-full py-2 px-3 bg-green-500 text-white mt-4 cursor-pointer rounded-md"
            onClick={handleReplayQuiz}
          >
            Replay
          </button>
        </div>
      ) : (
        <div className="px-3 py-2 space-y-3">
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => {
            return (
              <button
                key={index}
                onClick={() => checkAnswer(option)}
                className={`w-full py-2 px-3 bg-gray-200 cursor-pointer rounded-md focus:bg-green-500 focus:text-white transition-colors`}
              >
                {option}
              </button>
            );
          })}
          <progress
            className="w-full"
            value={currentQuestion}
            max={questions.length}
          ></progress>
          <h3>
            Question {currentQuestion + 1} / {questions.length}
          </h3>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
