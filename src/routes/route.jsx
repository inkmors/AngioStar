import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/"
import AboutPage from "../pages/AboutPage/"
import Error from "../pages/Error/Error"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function RoutesPages() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                
                <Route path="*" element={<Error />} />
            </Routes>
        <Footer/>    
        </BrowserRouter>
    );
}

export default RoutesPages;
