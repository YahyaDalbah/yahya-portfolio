import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

export default function Nav() {
  const [hidden, sethidden] = useState(true)
  return (
    <nav className='flex justify-between items-center px-8 md:px-16 pt-6 text-BLACK'>
        <h1 className=' font-bold text-4xl'>YD</h1>
        <div className='sm:flex gap-x-10 hidden'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <div className='sm:hidden text-xl' onClick={() =>{sethidden(prev => !prev)}}>{hidden ? <RiMenu3Line /> : <RiCloseLine />}</div>
        {!hidden && <div className='flex items-end sm:hidden flex-col gap-y-6 py-3 position-list border border-gray-100 px-5 slide-bottom rounded-md'>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>}
    </nav>
    
  )
}
