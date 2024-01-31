import React from "react";
import Options from "./Options";

function Question({ question, dispatch, answer, selectQuestion }) {
  // console.log(question);
  if (!question) return null;

  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        dispatch={dispatch}
        answer={answer}
        selectQuestion={selectQuestion}
      />
    </div>
  );
}

export default Question;
