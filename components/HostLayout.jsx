import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

/**
 * Challenge - part 2:
 * Make the host navbar indicate the currently-active route.
 * 
 * Use the following CSS rules:
 *      font-weight: bold;
 *      text-decoration: underline;
 *      color: #161616;
 * 
 * I'd recommend using an inline style this time.
 * 
 * NOTE: There will be a small bug that we'll fix 
 * after you do the challenge.
 */

export default function HostLayout() {

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <nav className="host-nav">
                <NavLink to="/host" end style={({ isActive }) => isActive ? activeStyle : undefined}>Dashboard</NavLink>
                <NavLink to="/host/income" style={({ isActive }) => isActive ? activeStyle : undefined}>Income</NavLink>
                <NavLink to="/host/reviews" style={({ isActive }) => isActive ? activeStyle : undefined}>Reviews</NavLink>
            </nav>
            <Outlet />
        </>

    )
}
