import React, { useEffect, useState } from "react";

const EffectHook = () => {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("play");

  useEffect(() => {
    let timer;
    if (action === "play") {
      timer = setInterval(() => {
        setCount(count + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [count, action]);

  return (
    <div className="flex-column-container">
      <h1>UseEffect example:</h1>
      <h3>Stopwatch</h3>
      <h3>Time: {count}</h3>

      <div>
        <button onClick={() => setAction("play")}>Start</button>
        <button onClick={() => setAction("stop")}>Stop</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default EffectHook;
