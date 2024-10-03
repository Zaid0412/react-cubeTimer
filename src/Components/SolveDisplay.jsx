import React from 'react'
import { getCurPzlType } from '../Pages/Solves'
import { displayScramble } from '../assets/Scramble'

export default function SolveDisplay({solve, setOpenDialog}) {
    let [solveDisplayDate, yearAndTime] = solve.date.split(',')
    let [_ ,year, time] = yearAndTime.split(' ')

    const handleSolveClick = () => {
        console.log(solve)
        setOpenDialog(solve)
        setTimeout(() => {
          // console.log(document.querySelector('.solve-scrambleDisplay'))
          displayScramble(solve.scramble, solve.type, document.querySelector('.solve-scrambleDisplay'))
        }, 100);

    }
  return (
    <div className="solve" data-solveid={solve.id} data-solvetype={getCurPzlType(solve.type)} onClick={handleSolveClick}>
    <h2 className="solve-date">{solveDisplayDate}, {year}</h2>
    <div className="solve-type">{getCurPzlType(solve.type)}</div>
    <h1 className="solve-time">{solve.time}</h1>
    </div>
  )
}
