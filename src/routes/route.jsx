import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home"
import AboutPage from "../Pages/AboutPage/AboutPage"
import Error from "../Pages/Error/Error"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

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
