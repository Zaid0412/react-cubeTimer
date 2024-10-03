import { takeRight, getFastestSingle, getSlowestSingle, getMean, getAo5, getAo12, getAo50, getAo100 } from '../assets/StatsFinder';
import React, { useContext, useEffect, useState } from 'react'
import { typeContext, solvesContext } from '../Pages/Timer';
import { ChevronDown } from 'lucide-react';


function Stats() {
    
    const type = useContext(typeContext)    
    const allSolves = useContext(solvesContext)
    const [solves, setSolves] = useState(allSolves)
    let s
    
    useEffect(() => {
        if (type == '222') {
            s = allSolves[0]['222']
        }else if (type == '333') {
            s = allSolves[1]['333']
        }else if (type == '444') {
            s = allSolves[2]['444']
        }else if (type == '555') {
            s = allSolves[3]['555']
        }else if (type == '666') {
            s = allSolves[4]['666']
        }else if (type == '777') {
            s = allSolves[5]['777']
        }
        setSolves(s)
        setBestSingle(getFastestSingle(solves))
        setAverage(getMean(solves))
        setCurAo5(getAo5(solves))
        setCurAo12(getAo12(solves))
        setCurAo50(getAo50(solves))
        setCurAo100(getAo100(solves))
    }, [type, allSolves, solves])
    

    const [bestSingle, setBestSingle] = useState(0.00)
    const [deviation, setDeviation] = useState(0.00)
    const [average, setAverage] = useState(0.00)
    const [curAo5, setCurAo5] = useState(0.00)
    const [curAo12, setCurAo12] = useState(0.00)
    const [curAo50, setCurAo50] = useState(0.00)
    const [curAo100, setCurAo100] = useState(0.00)

    const handleCaret = (e) => {
        const stats = document.querySelector('.stats')
        if (!stats.classList.contains('closed')) {
            e.target.classList.add('rotate')
            stats.classList.add('closed')
        }else{
            e.target.classList.remove('rotate')
            stats.classList.remove('closed')
        }
    }

    return (
    <div className="stats closed">
        <div className="section1">
            <p className="best-ao5">Deviation: <span>{deviation == 0 ? '0.00' : deviation}</span></p>
            <p className="best-ao12">Average: <span>{average == setAverage ? '0.00' : average}</span></p>
            <p className="best-single">Best: <span>{bestSingle == 0 ? '0.00' : bestSingle.time}</span></p>
            <p className="solve-count">Counter: <span>{solves.length}</span></p>
        </div>
        <ChevronDown onClick={handleCaret} className='rotate'/>
        <div className="section2">
            <p className="cur-ao5">Ao5: <span>{curAo5 == 0 ? '--' : curAo5}</span></p>
            <p className="cur-ao12">Ao12: <span>{curAo12 == 0  || !curAo12 ? '--' : curAo12}</span></p>
            <p className="cur-ao50">Ao50: <span>{curAo50 == 0 || !curAo50? '--' : curAo50}</span></p>
            <p className="cur-ao100">Ao100: <span>{curAo100 == 0 || !curAo100 ? '--' : curAo100}</span></p>
        </div>
    </div>
  )
}

export default Stats
