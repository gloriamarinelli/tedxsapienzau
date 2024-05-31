import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "../../resources/styles/countdown.css";
import { func } from "three/examples/jsm/nodes/Nodes.js";
import global from "../../resources/global.json";

const finalDate = new Date("2024-05-31T09:00:00+02:00").getTime(); // Data di fine del countdown
const labelsInItalian = ["GIORNI", "ORE", "MINUTI", "SECONDI"];
const labelsInEnglish = ["DAYS", "HOURS", "MINUTES", "SECONDS"];
var expired = Date.now() >= finalDate;

function setExpired() {
  window.location.reload();
}

export default function Countdown({ language = "it" }) {
  const labelsLanguage = language === "en" ? labelsInEnglish : labelsInItalian;
  return (
    <div className="root">
      {expired !== true ? (
        <>
          <tr>
            <td>
              <FlipClockCountdown
                to={finalDate}
                className="flip-clock-days mb-5 mt-5 me-5"
                renderMap={[true, false, false, false]}
                labels={labelsLanguage}
                onComplete={setExpired}
              />
            </td>
            <td>
              <FlipClockCountdown
                to={finalDate}
                className="flip-clock-hours mb-5 mt-5"
                renderMap={[false, true, false, false]}
                labels={labelsLanguage}
                onComplete={setExpired}
              />
            </td>
            <td>
              <h1 className="colon">:</h1>
            </td>
            <td>
              <FlipClockCountdown
                to={finalDate}
                className="flip-clock-minutes mb-5 mt-5"
                renderMap={[false, false, true, false]}
                labels={labelsLanguage}
                onComplete={setExpired}
              />
            </td>
            <td>
              <h1 className="colon">:</h1>
            </td>
            <td>
              <FlipClockCountdown
                to={finalDate}
                className="flip-clock-seconds mb-5 mt-5"
                renderMap={[false, false, false, true]}
                labels={labelsLanguage}
                onComplete={setExpired}
              />
            </td>
          </tr>
        </>
      ) : (
        <h1 style={{ color: global.COLORS.GIALLO_COUNTDOWN }}>
          L'evento è iniziato
        </h1>
      )}
    </div>
  );
}

// Every countdown has a final date that can be changed by changing the value of the finalDate variable
// The language of the countdown can be changed by changing the value of the labelsLanguage variable
// The style of every countdown can be changed by changing the values in the CSS file located at client/src/resources/styles/countdown.css
// The font family of the countdown can be changed by changing root class in the CSS file located at client/src/resources/styles/countdown.css

// Documentation for the FlipClockCountdown component can be found at https://github.com/sLeeNguyen/react-flip-clock-countdown

// onComplete={function} is a prop that can be added to the FlipClockCountdown component to execute a function when the countdown is completed
