import { useEffect, useState } from "react";
import "../../resources/styles/RFWstyle.css";

function CountdownTimer() {
  const [expiryTime, setExpiryTime] = useState("13 sept 2023 17:00:00");
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "",
    countdownHours: "",
    countdownlMinutes: "",
    countdownSeconds: "",
  });

  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  });

  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="btn-group">
          {expiryTime !== false ? (
            <>
              <button type="button" className="btn">
                {countdownTime.countdownDays} Days
              </button>
              <button type="button" className="btn">
                :
              </button>
              <button type="button" className="btn">
                {countdownTime.countdownHours} Hours
              </button>
              <button type="button" className="btn">
                :
              </button>
              <button type="button" className="btn">
                {countdownTime.countdownMinutes} Minutes
              </button>
              <button type="button" className="btn">
                :
              </button>
              <button type="button" className="btn">
                {countdownTime.countdownSeconds} Seconds
              </button>
            </>
          ) : (
            <p>L'evento è finito!</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default CountdownTimer;
