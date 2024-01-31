import React, { useEffect } from "react";

function Timer({ dispatch, secoundsRemain }) {
  const mins = Math.floor(secoundsRemain / 60);
  const seconds = secoundsRemain % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "clock" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
