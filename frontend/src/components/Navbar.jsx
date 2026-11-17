import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <NavLink to="/">Home</NavLink>
    <NavLink to="/ask">Query</NavLink>
    <NavLink to="/history">History</NavLink>
    </nav>
    </>
  )
}
