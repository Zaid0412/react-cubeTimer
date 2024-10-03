import React from 'react'
import { X } from 'lucide-react'
import { deleteSolve } from '../Pages/Solves'
import { getCurPzlType } from '../Pages/Solves'
import { saveSolvesToStorage } from '../Pages/Timer'

export default function SolveInfoModal({solve, setSolves, setDialogOpen}) {

    const handleDelete = () => {
        deleteSolve(solve.id, solve.type)
        saveSolvesToStorage()
        handleClose()
    }

    const handleClose = () => {
        setDialogOpen(null)
    }

    const handlePlus2 = (e) => {
        let ogSolveTime = solve.time
        if (!solve.DNF) {
            
            if (!solve.plus2) {   
                solve.time = Number(solve.time) + 2
                solve.plus2 = true
                e.target.classList.add('plus2-active')
            }else if (solve.plus2) {
                solve.time = Number(ogSolveTime)
                solve.plus2 = false
                e.target.classList.remove('plus2-active')
            }
            console.log(solve)
            saveSolvesToStorage()
        }
    }

    const handleDNF = (e) => {
        if (!solve.DNF) {
            solve.DNF = true
            e.target.classList.add('DNF-active')
            solve.time = 'DNF'
            saveSolvesToStorage()
        }
        solve.time
    }

  return (
    <dialog className="solve-info" open>
        <section className="section-1">
            <div className="btns">
                <button className="delete-btn" onClick={handleDelete}>Delete</button>
                <X onClick={handleClose}/>               
                {/* <img src=${closeIcon} className="close-icon icon" alt="Close Button" role="button"> */}
            </div>
            <div className="solve-time"><h1>{solve.time}</h1></div>
            <div className="solve-options">
                 <button disabled>{getCurPzlType(solve.type)}</button>
                <button onClick={handlePlus2} id="plus2-btn" className={solve.plus2 ? "plus2-active" : ''}>+2</button>
                <button onClick={handleDNF} id="DNF-btn" className={solve.DNF ? "DNF-active" : ''}>DNF</button>
            </div>
            <div className="solve-date">${solve.date}</div>
        </section>
        <section className="section-2">
            <div className="solve-scrambleDisplay">{}</div>
            <div className="solve-scramble">{solve.scramble}</div>
        </section>
    </dialog>
  )
}
