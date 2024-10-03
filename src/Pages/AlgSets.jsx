import React, { useEffect, useState } from 'react'

import AlgDisplay from '../Components/AlgDisplay';
import PllAlgs_ from '../Algs/PllAlgs'
import OllAlgs_ from '../Algs/OllAlg'
import {OLLCategoryBtns, PLLCategoryBtns} from '../Components/CategoryBtns';
import { AlgSetDropdown } from '../Components/Dropdown';


export default function AlgSets() {

  const [category, setCategory] = useState('All')
  const [curAlgSet, setCurAlgSet] = useState("OLL")
  const [OllAlgs, setOllAlgs] = useState(OllAlgs_)
  const [PllAlgs, setPllAlgs] = useState(PllAlgs_)

  const handleCategory = (categ) => {
    setCategory(c => c = categ)
  }
  
  useEffect(() => {
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
      </div>
      <div className="algs">
      {curAlgSet == 'OLL' && OllAlgs.map(alg => {
        return (
          <AlgDisplay algObj={alg} key={alg.id}/> 
        )
      })}
      {curAlgSet == 'PLL' && PllAlgs.map(alg => {
        return (
          <AlgDisplay algObj={alg} key={alg.id}/> 
        )
      })}
      </div>
    </div>
  )
}
