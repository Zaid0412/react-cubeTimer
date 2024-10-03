import React from 'react'
import { Box } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NoSolves() {
  return (
    <div className='no-solves-container'>
        <Link to={'/'}>
        <Box size={50}/>
        <h1>No Solves Yet!</h1>
        </Link>
    </div>
  )
}
