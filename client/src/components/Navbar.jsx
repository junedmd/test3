import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav className='bg-blue-500 text-center items-center py-4 flex justify-evenly text-white text-2xl'>
        <Link to="/">Home</Link> 
        <Link to="/table">Table </Link> 
        
      </nav>
    </div>
  )
}

export default Navbar

