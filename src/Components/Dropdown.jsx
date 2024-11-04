import React from 'react'
import { DropdownMultiple, Dropdown } from 'reactjs-dropdown-component';

const options = [
    {
        label: '2x2',
        value: '222',
    },
    {
      label: '3x3',
      value: '333',
    },
    {
      label: '4x4',
      value: '444',
    },
    {
      label: '5x5',
      value: '555',
    },
    {
        label: '6x6',
        value: '666',
    },
    {
        label: '7x7',
        value: '777',
    },
];


const algSetOptions = [
  {
      label: 'OLL',
      value: 'OLL',
  },
  {
    label: 'PLL',
    value: 'PLL',
  },
  {
    label: 'F2L',
    value: 'F2L',
  },
];


export function TimerPageDropdown({setType}) {

    const changeTimer = (item) => {
        setType(item.value)
    }

  return (
    <Dropdown
    name="location"
    title="3x3"
    list={options}
    onChange={changeTimer}
    />
  )
}

export default function SolvePageDropdown({setType}) {
    
    const displaySolves = (item) => {
          setType(item.value)
    }

    return (
    <>
        <Dropdown
        name="PzlType"
        title="3x3"
        list={options}
        onChange={displaySolves}
        />
    </>
  )
}


export function AlgSetDropdown({setCurAlgSet, setCategory}) {
    
  const displaySolves = (item) => {
        setCurAlgSet(item.value)
        setCategory('All')
  }

  return (
  <>
      <Dropdown
      name="PzlType"
      title="OLL"
      list={algSetOptions}
      onChange={displaySolves}
      />
  </>
)
}

