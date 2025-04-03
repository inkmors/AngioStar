import Founder from "../../components/HomeComponents/Founder/Founder";
import Hero from "../../components/HomeComponents/Hero/Hero";
import MiomaPortal from "../../components/HomeComponents/MiomaPortal/MiomaPortal";
import Partners from "../../components/HomeComponents/Partners/Partners";
import Specialties from "../../components/HomeComponents/Specialties/Specialties";
import Testimonials from "../../components/HomeComponents/Testimonials/Testimonials";
import AboutUs from "../../components/HomeComponents/AboutUs/AboutUs";

export default function Home() {
    return (
        <div className="font-sans bg-gray-50">
            <Hero/>
         
            <AboutUs/>
            <Specialties/>
            <Founder/>
            <Testimonials/>
            <Partners/>
            <MiomaPortal/>
    
        </div>
    );
}
