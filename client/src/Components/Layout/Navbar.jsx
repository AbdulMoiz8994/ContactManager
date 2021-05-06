import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export const Navbar = ({title,icon}) => {
    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon}/>  {title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}
Navbar.prototype={
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}
Navbar.defaultProps={
    title: "Contact Managment",
    // icoon name from fontawsome which we downlaod
    icon: 'fas fa-id-card-alt'
}