import React,{ useEffect, useState, createContext } from 'react'
import {getScramble, displayScramble, displayScramblText} from '../assets/Scramble'
import { Copy ,RotateCcw } from 'lucide-react'

import Stopwatch from '../Components/Stopwatch'
import Stats from '../Components/Stats'
import {Solve} from '../Components/Solve'
import { TimerPageDropdown } from '../Components/Dropdown'

let allSolves = JSON.parse(localStorage.getItem("allSolvesStorage"))
  ? JSON.parse(localStorage.getItem("allSolvesStorage"))
  : [{'222': []},{'333':[]}, {'444': []}, {'555': []}, {'666' : []}, {'777' : []}];

export const saveSolve = (time, scramble, type = '333') => {
        switch (type) {
            case '222':
        allSolves[0]['222'].push(new Solve(time, scramble, type))
                break;
            case '333':
        allSolves[1]['333'].push(new Solve(time, scramble, type))
                break;
        case '444':
        allSolves[2]['444'].push(new Solve(time, scramble, type))
                break;
        case '555':
        allSolves[3]['555'].push(new Solve(time, scramble, type))
                break;
        case '666':
        allSolves[4]['666'].push(new Solve(time, scramble, type))
                break;
        case '777':
        allSolves[5]['777'].push(new Solve(time, scramble, type))
                break;
        }
        console.log(allSolves)
        saveSolvesToStorage()
}

export const saveSolvesToStorage = () => { 
    localStorage.clear()
    localStorage.setItem('allSolvesStorage', JSON.stringify(allSolves))
    console.log(allSolves)
}



export const typeContext = createContext('333')
export const solvesContext = createContext(null)

export default function Timer() {
    const [type, setType] = useState('333')
    const [solves, setSolves] = useState(allSolves)
    const [scramble, setScramble] = useState(getScramble(type))
    const [finishSolve, setFinishSolve] = useState(false)

    useEffect(() => {
      setScramble(getScramble(type))
    }, [type])
  
    useEffect(() => {
      setTimeout(() => {
        displayScramblText(scramble.scramble, document.querySelector('.scrambleText-display'))
        displayScramble(scramble.scramble, scramble.type, document.querySelector('.scramble-display'))
      }, 100);
    }, [scramble])

    useEffect(() => {
      if (finishSolve) {
        newScramble()
        setFinishSolve(s => s = false)
        console.log(finishSolve);
      }
    }, [finishSolve])
    
    const handleCopy = () => {
      navigator.clipboard.writeText(scramble.scramble);
    }
  
    const newScramble = () => {
      setScramble(getScramble(type))
    }

    const setSolveState = () => {
      setFinishSolve(true) 
    }

  return (
    <div className="timer-page">
      <solvesContext.Provider value={solves}>
      <typeContext.Provider value={type}>
        <Stats />
      <TimerPageDropdown setType={setType}/>
      </typeContext.Provider>
      </solvesContext.Provider>
      <div className="page">
      <div className="timer">
      <div className="scrambleText-display"></div>
      <div className="scramble-controls">
      <Copy size={20} onClick={handleCopy} /> <RotateCcw size={20} onClick={newScramble} />
      </div>
    <div className="timer-diplay"><Stopwatch scramble={scramble.scramble} type={scramble.type} setFinishSolve={setSolveState} allSolves={solves} setSolves={setSolves}/></div>
      </div>
      <div className="scramble-display"></div>
      </div>
    </div>
  )
}
