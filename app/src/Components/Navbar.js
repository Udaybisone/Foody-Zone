import React from 'react'
import './Navbar.css'
export default function Navbar(props) {
  return (
    <div className='navbar'>
        <div>
        <img src="/logo.svg" alt="logo" />
        </div>
        <div className="searchbar">
            <input type="text" placeholder='Search Food...'
            onChange={props.searchfood}
            />
        </div>
    </div>
  )
}
