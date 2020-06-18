import React from "react";
import "./App.css";
import { useState, useEffect } from "react";


function Timer() {
    let [minutes, newMinutes] = useState(15);
    let [seconds, newSeconds] = useState(0);
    let [timerOn, setTimerOn] = useState(false);

    if (timerOn) {
      if (seconds !== 0) {
        setTimeout(() => newSeconds(seconds - 1),
          1000)
          // if (seconds < 10) {
          //   newSeconds(`0  ${seconds - 1}`)
          // }
          if (minutes < 0) {
            newMinutes(minutes = 15)
            newSeconds(seconds = 0)
          }
      };
      if (seconds == 0) {
        newMinutes(minutes - 1);
        newSeconds(seconds = 59);
      }
    }
    return (
        <div>
            <div className="timer">{minutes}:{seconds<10?(`0${seconds}`) : seconds }</div>
             <button className="buttons" onClick={() => setTimerOn(timerOn == !setTimerOn)}> Start </button>
        </div>
    );
  }

  export default Timer;