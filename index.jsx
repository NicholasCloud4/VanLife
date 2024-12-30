import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';
import Layout from './components/Layout';
import "./server"



function App() {

    /**
   * Challenge: set up the code so we can use a layout route!
   * 
   * 1. Create a folder called "components"
   * 2. Create 2 new component files: Layout.jsx and Header.jsx
   * 3. Move the <header> code below to the Header component file. 
   *    (DON'T import that Header component here!)
   */

    return (
        <BrowserRouter>

            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vans" element={<Vans />} />
                    <Route path="/vans/:id" element={<VanDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App />);