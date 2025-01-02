import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'



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
                <NavLink to="/host/vans" style={({ isActive }) => isActive ? activeStyle : undefined}>Vans</NavLink>
                <NavLink to="/host/reviews" style={({ isActive }) => isActive ? activeStyle : undefined}>Reviews</NavLink>
            </nav>
            <Outlet />
        </>

    )
}
