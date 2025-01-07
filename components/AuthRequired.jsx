import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function AuthRequired() {
    const authenticated = false;

    if (authenticated === false) {
        return <Navigate to="/login" />;
    } else {
        return <Outlet />
    }
}
