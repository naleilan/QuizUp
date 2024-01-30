import React from "react";

function Finishedscreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;
  // console.log(points, maxPossiblePoints);
  return (
    <p className="result">
      You scored <strong>{points}</strong>
      out of {maxPossiblePoints}({Math.ceil(percentage)}%)
    </p>
  );
}

export default Finishedscreen;
