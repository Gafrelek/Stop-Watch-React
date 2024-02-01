import { useState, useEffect } from "react";

function Stopwatch() {
  //setting up useStates hook to manage time state.
  // Initialize with 0 to represent the starting time.
  // Running State to manage a boolean state representing running/stopped state
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 100); //Increment time by 100 miliseconds
      }, 100);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [running]);

  function stopwatchStart() {
    return setRunning(true);
  }

  function stopwatchStop() {
    return setRunning(false);
  }

  function stopwatchReset() {
    return setRunning(false), setTime(0);
  }

  function formatTime(milliseconds) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = ((milliseconds % 60000) / 1000).toFixed(1);
    return `${minutes}:${seconds}`;
  }

  return (
    <>
      <h1>Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      {!running ? (
        <button onClick={stopwatchStart}>START</button>
      ) : (
        <button onClick={stopwatchStop}>STOP</button>
      )}
      <br />
      <button onClick={stopwatchReset}>RESET</button>
    </>
  );
}

export default Stopwatch;
