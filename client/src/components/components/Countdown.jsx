import React from "react";
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import "../../resources/styles/countdown.css"

const finalDate = new Date('2024-05-31T00:00:00+02:00').getTime() // Data di fine del countdown
const labelsInItalian = ['GIORNI','ORE','MINUTI', 'SECONDI']
const labelsInEnglish = ['DAYS','HOURS','MINUTES', 'SECONDS']

export default function Countdown({ language = 'it' }){
  const labelsLanguage = language === 'en' ? labelsInEnglish : labelsInItalian
  return (
    <div className="root"> 
      <tr>
        <td>
          <FlipClockCountdown to={finalDate} className='flip-clock-days mb-5 mt-5 me-5' renderMap={[true, false, false, false]} labels={labelsLanguage} />
        </td>
        <td>
          <FlipClockCountdown to={finalDate} className='flip-clock-hours mb-5 mt-5' renderMap={[false, true, false, false]} labels={labelsLanguage} />
        </td>
        <td>
        <h1 className="colon">:</h1>
        </td>
        <td>
          <FlipClockCountdown to={finalDate} className='flip-clock-minutes mb-5 mt-5' renderMap={[false, false, true, false]} labels={labelsLanguage} />
        </td>
        <td>
          <h1 className="colon">:</h1>
        </td>
        <td>
          <FlipClockCountdown to={finalDate} className='flip-clock-seconds mb-5 mt-5' renderMap={[false, false, false, true]} labels={labelsLanguage} />
        </td>
      </tr>
    </div>
  );
}


// Every countdown has a final date that can be changed by changing the value of the finalDate variable
// The language of the countdown can be changed by changing the value of the labelsLanguage variable
// The style of every countdown can be changed by changing the values in the CSS file located at client/src/resources/styles/countdown.css
// The font family of the countdown can be changed by changing root class in the CSS file located at client/src/resources/styles/countdown.css

// Documentation for the FlipClockCountdown component can be found at https://github.com/sLeeNguyen/react-flip-clock-countdown
// Component created by @Leonard013
