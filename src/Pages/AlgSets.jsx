import React, { useEffect, useState } from 'react'

import AlgDisplay from '../Components/AlgDisplay';
import PllAlgs_ from '../Algs/PllAlgs'
import OllAlgs_ from '../Algs/OllAlg'
import F2lAlgs_ from '../Algs/F2lAlgs';
import {OLLCategoryBtns, PLLCategoryBtns, F2LCategoryBtns} from '../Components/CategoryBtns';
import { AlgSetDropdown } from '../Components/Dropdown';


export default function AlgSets() {

  const [category, setCategory] = useState('All')
  const [curAlgSet, setCurAlgSet] = useState("OLL")
  const [OllAlgs, setOllAlgs] = useState(OllAlgs_)
  const [PllAlgs, setPllAlgs] = useState(PllAlgs_)
  const [F2lAlgs, setF2lAlgs] = useState(F2lAlgs_)

  const handleCategory = (categ) => {
    setCategory(c => c = categ)
  }
  
  useEffect(() => {
    console.log(category)
    if (category && curAlgSet == 'OLL') {
      console.log(category)
      if (category == 'All') {
        setOllAlgs(OllAlgs_.filter(alg => alg))
      }else {
        setOllAlgs(OllAlgs_.filter(alg => alg.category == category ))
      }
    }else if(category && curAlgSet == 'PLL'){
      console.log(category)
      if (category == 'All') {
        setPllAlgs(PllAlgs_.filter(alg => alg))
      }else {
        setPllAlgs(PllAlgs_.filter(alg => alg.category == category ))
      }
    }else if(category && curAlgSet == 'F2L'){
      if (category == 'All') {
        setF2lAlgs(F2lAlgs_.filter(alg => alg))
      }else {
        setF2lAlgs(F2lAlgs_.filter(alg => alg.category == category ))
      }
    }
  }, [category])

  return (
    <div className='algset-page'>
      <div className="title">
      <h1>Alg Sets</h1>
      <AlgSetDropdown setCurAlgSet={setCurAlgSet} setCategory={setCategory}/>
      </div>
      <div className="header">
      {curAlgSet == 'OLL' && <OLLCategoryBtns setCategory={handleCategory}/>}
      {curAlgSet == 'PLL' && <PLLCategoryBtns setCategory={handleCategory} />}
      {curAlgSet == 'F2L' && <F2LCategoryBtns setCategory={handleCategory} />}
      </div>
      <div className="algs">
      {curAlgSet == 'OLL' && OllAlgs.map(alg => {
        return (
          <AlgDisplay algObj={alg} setCategory={setCategory} key={alg.id}/> 
        )
      })}
      {curAlgSet == 'PLL' && PllAlgs.map(alg => {
        return (
          <AlgDisplay algObj={alg} setCategory={setCategory} key={alg.id}/> 
        )
      })}
      {curAlgSet == 'F2L' && F2lAlgs.map(alg => {
        return (
          <AlgDisplay algObj={alg} setCategory={setCategory} key={alg.id}/> 
        )
      })}
      </div>
    </div>
  )
}
