import React, { useEffect, useState } from 'react'
import SolveDisplay from '../Components/SolveDisplay';
import SolveInfoModal from '../Components/SolveInfoModal';
import { saveSolve, saveSolvesToStorage } from './Timer';
import NoSolves from '../Components/NoSolves';
import SolvePageDropdown from '../Components/Dropdown';


let allSolves = JSON.parse(localStorage.getItem("allSolvesStorage"))
  ? JSON.parse(localStorage.getItem("allSolvesStorage"))
  : [{'222': []},{'333':[]}, {'444': []}, {'555': []}, {'666' : []}, {'777' : []}];


export const findSolve = (id, type) => {
      switch (type) {
        case '222':
    return allSolves[0]['222'].find(solve => solve.id === id)
        case '333':
    return allSolves[1]['333'].find(solve => solve.id === id)
        case '444':
    return allSolves[2]['444'].find(solve => solve.id === id)
        case '555':
    return allSolves[3]['555'].find(solve => solve.id === id)
        case '666':
    return allSolves[4]['666'].find(solve => solve.id === id)
        case '777':
    return allSolves[5]['777'].find(solve => solve.id === id)
    }
}


export const findSolveIndex = (solve) => {
    switch (solve.type) {
        case '222':
    return allSolves[0]['222'].indexOf(solve)
        case '333':
    return allSolves[1]['333'].indexOf(solve)
        case '444':
    return allSolves[2]['444'].indexOf(solve)
        case '555':
    return allSolves[3]['555'].indexOf(solve)
        case '666':
    return allSolves[4]['666'].indexOf(solve)
        case '777':
    return allSolves[5]['777'].indexOf(solve)
    }
}


export const deleteSolve = (solveID, solveType) =>{

  const solve = findSolve(solveID, solveType)
  const solveIndex = findSolveIndex(solve)

  
  switch (solveType) {
      case '222':
  allSolves[0]['222'].splice(solveIndex, 1)
  saveSolvesToStorage()
      case '333':
  allSolves[1]['333'].splice(solveIndex, 1)
  saveSolvesToStorage()
      case '444':
  allSolves[2]['444'].splice(solveIndex, 1)
  saveSolvesToStorage()
      case '555':
  allSolves[3]['555'].splice(solveIndex, 1)
  saveSolvesToStorage()
      case '666':
  allSolves[4]['666'].splice(solveIndex, 1)
  saveSolvesToStorage()
      case '777':
  allSolves[5]['777'].splice(solveIndex, 1)
  saveSolvesToStorage()

   }

}


export const getCurPzlType = (curPzl) =>{
  switch (curPzl) {
      case '222':
          return '2x2'
      case '333':
          return '3x3'
      case '444':
          return '4x4'
      case '555':
          return '5x5'
      case '666':
          return '6x6'
      case '777':
          return '7x7'
  }
  
}

export default function Solves() {

  const [solves, setSolves] = useState([])
  const [openDialog, setOpenDialog] = useState(null)
  const [type, setType] = useState('333')

  useEffect(() => {
    let s;
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
  }, [type])

  return (
    <div className='solves-page'>
      <div className="top-header">
        <h1 className='heading'>Solves</h1>
        <SolvePageDropdown setType={setType}/>
      </div>
      <div className="container">
        {solves.length == 0 ? <NoSolves /> : solves.slice().reverse().map(solve => {
          return (
            <SolveDisplay solve={solve} setOpenDialog={setOpenDialog} key={solve.id}/>
          )
        })}
        {openDialog && <SolveInfoModal solve={openDialog} solves={solves} setSolves={setSolves} setDialogOpen={setOpenDialog}/>}
      </div>
    </div>
  )
}
