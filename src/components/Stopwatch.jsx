import { useState } from "react";

function Stopwatch() {
  //setting up useStates hook to manage time state.
  // Initialize with 0 to represent the starting time.
  // Running State to manage a boolean state representing running/stopped state
  const [time, setTime] = useState(0);
  let [running, setRunning] = useState(false);

  function stopwatchStart() {
    return setRunning(true);
  }

  function stopwatchStop() {
    return setRunning(false);
  }

  function stopwatchReset() {
    return setRunning(false), setTime(0);
  }

  while (setRunning == true) {
    setInterval(() => {
      setTime();
    }, 1000); // 1000 milliseconds = 1 second
  }

  return (
    <>
      <h1>stopper</h1>
      <h2>{time}</h2>
      <button onClick={stopwatchStart}>START</button>
      <br />
      <button onClick={stopwatchStop}>STOP</button>
      <br />
      <button onClick={stopwatchReset}>RESET</button>
    </>
  );
}

export default Stopwatch;
