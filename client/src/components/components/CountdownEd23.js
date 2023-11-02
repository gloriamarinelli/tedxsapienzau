import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import global from "../../resources/global.json";

const CountdownEd23 = ({ onComplete }) => {
  const targetDate = new Date("2023-11-15T09:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      onComplete();
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const countdownStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "2rem",
    padding: "20px",
  };

  const itemStyle = {
    margin: "10px 0",
  };

  return (
    <div style={countdownStyle}>
      <div style={itemStyle}>
        <span style={{ fontSize: "40px" }}>{timeLeft.days}</span>
        <span> days : {' '}</span>
      </div>
      <div style={itemStyle}>
        <span style={{ fontSize: "40px" }}>{timeLeft.hours}</span>
        <span> hours : {' '}</span>
      </div>
      <div style={itemStyle}>
        <span style={{ fontSize: "40px" }}>{timeLeft.minutes}</span>
        <span> minutes : {' '}</span>
      </div>
      <div style={itemStyle}>
        <span style={{ fontSize: "40px" }}>{timeLeft.seconds}</span>
        <span> seconds </span>
      </div>
    </div>
  );
}
  

export default CountdownEd23;
