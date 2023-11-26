import React from "react";
function Time(props) {
  return (
    <div className="timeNames">
      <h1>{props.timeNum}</h1>
      <p>{props.timeName}</p>
    </div>
  );
}
export default Time;
