import React from 'react'
import { Link, NavLink } from 'react-router-dom'

/**
     * Challenge - part 1:
     * Make the main navbar indicate the currently-active route. (You can
     * leave the home link alone, since it's doubling as our logo. Only
     * make changes to the /host, /about, and /vans links)
     * 
     * Use the following CSS rules:
     *      font-weight: bold;
     *      text-decoration: underline;
     *      color: #161616;
     * 
     * You can use either inline styles or a className.
     */

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink to="/host" style={({ isActive }) => isActive ? activeStyles : null}>Host</NavLink>
                <NavLink to="/about" style={({ isActive }) => isActive ? activeStyles : null} >About</NavLink>
                <NavLink to="/vans" style={({ isActive }) => isActive ? activeStyles : null} >Vans</NavLink>
            </nav>
        </header>
    )
}
