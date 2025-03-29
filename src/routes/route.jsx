import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home"
import Team from "../pages/Team/Team"
import Exames from "../pages/Exames/Exames"
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
                <Route path="/team" element={<Team />} />
                <Route path="/exames" element={<Exames />} />
                
                <Route path="*" element={<Error />} />
            </Routes>
        <Footer/>    
        </BrowserRouter>
    );
}

export default RoutesPages;
