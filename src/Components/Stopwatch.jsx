import { useState, useEffect, useRef} from 'react'
import { saveSolve, saveSolvesToStorage } from '../Pages/Timer';

// let allSolves = JSON.parse(localStorage.getItem("allSolvesStorage"))
//   ? JSON.parse(localStorage.getItem("allSolvesStorage"))
//   : [{'222': []},{'333':[]}, {'444': []}, {'555': []}, {'666' : []}, {'777' : []}];

// export const saveSolve = (time, scramble, type = '333') => {
//         switch (type) {
//             case '222':
//         allSolves[0]['222'].push(new Solve(time, scramble, type))
//                 break;
//             case '333':
//         allSolves[1]['333'].push(new Solve(time, scramble, type))
//                 break;
//         case '444':
//         allSolves[2]['444'].push(new Solve(time, scramble, type))
//                 break;
//         case '555':
//         allSolves[3]['555'].push(new Solve(time, scramble, type))
//                 break;
//         case '666':
//         allSolves[4]['666'].push(new Solve(time, scramble, type))
//                 break;
//         case '777':
//         allSolves[5]['777'].push(new Solve(time, scramble, type))
//                 break;
//         }
//         console.log(allSolves)
//         saveSolvesToStorage()
// }

// export const saveSolvesToStorage = () => { 
//     localStorage.clear()
//     localStorage.setItem('allSolvesStorage', JSON.stringify(allSolves))
// }

const Stopwatch = ({ inspection = false, inspectionDuration = 0, scramble, type = '333', setFinishSolve, allSolves, setSolves}) => {

  const [display, setDisplay] = useState('0.00');

  var startTime = 0;

  var isTiming = useRef(false);
  var isInspection = useRef(false);
  var elapsedTime = useRef(0);
  var timeInterval = useRef(0);
  var inspectionTimeInterval = useRef(0);

  useEffect(() => {
    document.addEventListener('keyup', startAndStopTimerWithSpaceBar);

    return () => {
      document.removeEventListener('keyup', startAndStopTimerWithSpaceBar);
    }
  })

  function startAndStopTimerWithSpaceBar(e) {
    if(inspection) {
      
      if(e.key === ' ') {
        if(isTiming.current === false) {
          if(isInspection.current === false) {
            isInspection.current = true
            var inspectionTime = (inspectionDuration*1000);
            var newStartTime = Date.now();
            inspectionTimeInterval.current = setInterval(() => {
              inspectionTime -= (Date.now() - newStartTime);
              if(inspectionTime <= 0) {
                clearInterval(inspectionTimeInterval.current);
                isTiming.current = true;
                start();
              } else {
                newStartTime = Date.now();
                setDisplay(timeToString(inspectionTime));

              }
            }, 5);
          } else if(isInspection.current === true) {
            isInspection.current = false
            clearInterval(inspectionTimeInterval.current);
            setDisplay('00:00.00');
          }
        } else if(isTiming.current === true) {
          isTiming.current = false;
          isInspection.current = false
          stop();
        }
      }

    } else {
      if(e.key === ' ') {
        if(isTiming.current === false) {
          isTiming.current = true;
          start();
        } else if(isTiming.current === true) {
          isTiming.current = false;
          stop();
        }
      }
    }
  }

  function start() {
    console.log('start');
    startTime = Date.now();
    timeInterval.current = setInterval(() => {
      elapsedTime.current = Date.now() - startTime;
      setDisplay(timeToString(elapsedTime.current));
    }, 5);
  }

  function stop() {
    console.log('stop');
    clearInterval(timeInterval.current);
    // updateTimesArray(elapsedTime.current);
    saveSolve(display, scramble, type)
    setSolves(allSolves)
    saveSolvesToStorage()
    setFinishSolve(true)
    console.log(allSolves);
    
    elapsedTime.current = 0;
  }

  function timeToString(time) {    
        let hours = Math.floor(time / (1000 * 60 * 60));
        let minutes = Math.floor(time / (1000 * 60) % 60);
        let seconds = Math.floor(time / (1000) % 60);
        let milliseconds = Math.floor((time % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        if (minutes === '00') {   
            return `${seconds}.${milliseconds}` // Return the time at which the stop watch was stopped to get the solve time
        }else if (minutes !== '00') {
            return `${minutes}:${seconds}`
        }
  }

  return (
    <>
        {display}
    </>
  )
}

export default Stopwatch