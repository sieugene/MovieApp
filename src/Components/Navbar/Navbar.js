import React from 'react'

const Navbar = (props) => {
    return (
        <nav className='grey lighten-5'>
            <div className="container">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo black-text text-darken-2">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a className='black-text text-darken-2' href="sass.html">Sass</a></li>
                        <li><a className='black-text text-darken-2' href="badges.html">Components</a></li>
                        <li><a className='black-text text-darken-2' href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar