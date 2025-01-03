import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Vans/Home"
import About from "./pages/Vans/About"
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVanDetail from './pages/Host/HostVanDetail';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';

import "./server"
import HostVanInfo from './pages/Host/HostVanInfo';




function App() {

    /**
   * Challenge: Add the routes necessary so we can access
   * /host/vans/:id/pricing and /host/vans/:id/photos.
   * 
   * Add stubbed-out components in separate files for
   * these routes (e.g. <h2>Pricing view here</h2>). I already
   * made the `HostVanInfo.jsx`, `HostVanPricing.jsx` and
   * `HostVanPhotos.jsx` files for you, but they're empty.
   * 
   * Don't forget: you'll need to use a special tool from
   * React Router so we can keep the top info (and 
   * eventually the navbar we build) on the page while going
   * from nested route to nested route. This will require some
   * slight changes to HostVanDetail.jsx
   * 
   * Since we don't have the navbar yet, you can test them
   * by manually navigating to e.g. /host/vans/1/pricing.
   */

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<VanDetail />} />

                    <Route path='host' element={<HostLayout />} >
                        <Route index element={<Dashboard />} />
                        <Route path='income' element={<Income />} />
                        <Route path='reviews' element={<Reviews />} />
                        <Route path='vans' element={<HostVans />} />
                        <Route path='vans/:id' element={<HostVanDetail />} >
                            <Route index element={<HostVanInfo />} />
                            <Route path='pricing' element={<HostVanPricing />} />
                            <Route path='photos' element={<HostVanPhotos />} />
                        </Route>

                    </Route>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App />);