import React from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
// import Layout from "./pages/Layout";
import About from "./pages/About";
// import NoPage from "./pages/Nopage";
// import Contact from "./pages/Contact";
import Home from "./pages/Home";

export default function Block4() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} /> 
                </Routes>
            </BrowserRouter>
        </div>        
    )
}

//12/20강의
