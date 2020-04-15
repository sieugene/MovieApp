import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className='grey lighten-5'>
            <div className="container">
                <div className="nav-wrapper">
                    <NavLink to="/" className="brand-logo black-text text-darken-2">
                        MovieApp
                    </NavLink>
                   
                </div>
            </div>
        </nav>
    )
}

export default Navbar