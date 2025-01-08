import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function AuthRequired() {
    const authenticated = true;

    if (authenticated === false) {
        return <Navigate to="/login" state={{ message: "You must log in to view this page" }} />;
    } else {
        return <Outlet />
    }
}
