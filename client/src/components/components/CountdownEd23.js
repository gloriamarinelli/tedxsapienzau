import React, { useState, useEffect } from "react";
import global from "../../resources/global.json";
import { useOutletContext } from "react-router";

const CountdownEd23 = ({ onComplete }) => {
  const [windowSize, setWindowSize] = useOutletContext();

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

  const countdownStyleMobile = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  };

  const itemStyleMobile = {
    margin: "10px 0",
  };

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    return (
      <div style={countdownStyle}>
        <div style={itemStyle}>
          <span style={{ fontSize: "40px" }}>{timeLeft.days}</span>
          <span> days : </span>
        </div>
        <div style={itemStyle}>
          <span style={{ fontSize: "40px" }}>{timeLeft.hours}</span>
          <span> hours : </span>
        </div>
        <div style={itemStyle}>
          <span style={{ fontSize: "40px" }}>{timeLeft.minutes}</span>
          <span> minutes : </span>
        </div>
        <div style={itemStyle}>
          <span style={{ fontSize: "40px" }}>{timeLeft.seconds}</span>
          <span> seconds </span>
        </div>
      </div>
    );
  } else {
    return (
      <div style={countdownStyleMobile}>
        <div style={itemStyleMobile}>
          <span style={{ fontSize: "20px" }}>{timeLeft.days}</span>
          <span style={{ fontSize: "20px" }}> days</span>
        </div>
        <div style={itemStyleMobile}>
          <span style={{ fontSize: "20px" }}>{timeLeft.hours}</span>
          <span style={{ fontSize: "20px" }}> hours</span>
        </div>
        <div style={itemStyleMobile}>
          <span style={{ fontSize: "20px" }}>{timeLeft.minutes}</span>
          <span style={{ fontSize: "20px" }}> minutes</span>
        </div>
        <div style={itemStyleMobile}>
          <span style={{ fontSize: "20px" }}>{timeLeft.seconds}</span>
          <span style={{ fontSize: "20px" }}> seconds </span>
        </div>
      </div>
    );
  }
};

export default CountdownEd23;
