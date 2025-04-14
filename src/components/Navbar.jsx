import React from 'react'
import { NavLink } from 'react-router'
import './Navbar.css'
const Navbar = () => {
  return (
    <div id="navbar-container">
        <NavLink to={"/"} 
        className={({isActive})=>(isActive)? "active":"navlink"}>
            Home
        </NavLink>

        <NavLink to={"/pastes"} 
        className={({isActive})=>(isActive)? "active":"navlink"}>
            All paste
        </NavLink>
    </div>
  )
}

export default Navbar
