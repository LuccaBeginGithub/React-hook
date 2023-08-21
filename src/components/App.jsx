import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  let [count, countState] = useState(time);

  function setTime() {
    const now = new Date().toLocaleTimeString();
    countState(now);
  }
  setInterval(setTime, 1000);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={setTime}>Get Time</button>
    </div>
  );
}

export default App;
