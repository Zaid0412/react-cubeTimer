import { Settings, TableOfContents, Tally4, Timer } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav() {
  return (
    <div className='nav'>
        <Link to={'/'}> <Timer size={50} color='black' /> </Link> 
        <Link to={'/solves'}> <TableOfContents size={50} color='black' /> </Link>
        <Link to={'/algset'} > <Tally4 size={50} color='black' /> </Link>
        <Link to={'/settings'} > <Settings size={50} color='black' /> </Link>
    </div>
  )
}
