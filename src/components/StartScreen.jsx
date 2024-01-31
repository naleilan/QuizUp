import React from "react";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <div className="start-btns">
        <select className="btn btn-ui">
          <option value="0" style={{ color: "green", borderRadius: "10px" }}>
            All
          </option>
          <option value="10" style={{ color: "green", borderRadius: "10px" }}>
            Easy
          </option>
          <option value="20" style={{ color: "orange", borderRadius: "10px" }}>
            Medium
          </option>
          <option value="30" style={{ color: "red", borderRadius: "10px" }}>
            Hard
          </option>
        </select>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "start" })}
        >
          Let's Start!
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
