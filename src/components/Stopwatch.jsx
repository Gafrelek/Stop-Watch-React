import { useState, useEffect } from "react";
import moment from "moment";

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

  function formatTime(time) {
    const minutes = moment.duration(time).get("minutes");
    const seconds = moment.duration(time).get("seconds");
    const milliseconds = moment.duration(time).get("milliseconds")/100;

    return `${minutes}:${seconds}:${milliseconds}`;
  }
  //
  return (
    // Global container
    <div className="bg-slate-700 h-screen flex justify-center items-center">
      <div className="bg-slate-950 border-2 rounded-xl border-slate-800 w-full mx-5 p-6 md:w-2/3">
        <div className="flex flex-col bg-slate-800 text-white justify-center text-center  rounded-lg shadow-xl h-full space-y-16 py-20">
          <h2 className="text-7xl">{formatTime(time)}</h2>
          <div className="flex flex-row justify-around space-x-4 md:pt-20 group">
            {!running ? (
              <button
                className="bg-green-900 w-3/12 py-3 rounded-md border-2 border-green-500 text-xl hover:bg-green-600 duration-300 md:border-4"
                onClick={stopwatchStart}>
                START
              </button>
            ) : (
              <button
                className="bg-red-900 w-3/12 py-3 rounded-md border-2 border-red-500 text-xl hover:bg-red-700 duration-300 md:border-4"
                onClick={stopwatchStop}>
                STOP
              </button>
            )}
            <button
              className="bg-yellow-800 w-3/12 py-3 rounded-md border-2 border-orange-500 text-xl md:border-4 hover:bg-orange-600 duration-300"
              onClick={stopwatchReset}>
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
