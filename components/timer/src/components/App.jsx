import React, { useState } from "react";
import Time from "./Time";

function App() {
  setInterval(updateTime, 1000);
  const deadline = new Date("2023-12-15T23:59:59+05:30");
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  function calculateRemainingTime() {
    const timeDiff = deadline - new Date();
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");

    return { days, hours, minutes, seconds };
  }

  function updateTime() {
    setRemainingTime(calculateRemainingTime());
  }

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <p>PRAGYATHA</p>

      <div className="timeDiv">
        <Time timeNum={remainingTime.days} timeName="Days" />
        <Time timeNum={remainingTime.hours} timeName="Hours" />
        <Time timeNum={remainingTime.minutes} timeName="Minutes" />
        <Time timeNum={remainingTime.seconds} timeName="Seconds" />
      </div>
    </div>
  );
}

export default App;
