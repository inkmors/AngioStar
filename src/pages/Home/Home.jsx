import Founder from "../../components/HomeComponents/Founder/Founder";
import Hero from "../../components/HomeComponents/Hero/Hero";
import MiomaPortal from "../../components/HomeComponents/MiomaPortal/MiomaPortal";
import Partners from "../../components/HomeComponents/Partners/Partners";
import Specialties from "../../components/HomeComponents/Specialties/Specialties";
import Testimonials from "../../components/HomeComponents/Testimonials/Testimonials";
import AboutUs from "../../components/HomeComponents/AboutUs/AboutUs";

// export default function Home() {
//   const [name, setName] = useState("");

//   return (
//     <div className="app-container">
//       <Stepper
//         initialStep={1}
//         onStepChange={(step) => console.log(`Step: ${step}`)}
//         onFinalStepCompleted={() => console.log("All steps completed!")}
//         backButtonText="Previous"
//         nextButtonText="Next"
//       >
//         <Step>
//           <h2>Welcome to the React Stepper!</h2>
//           <p>Click "Next" to continue.</p>
//         </Step>

//         <Step>
//           <h2>Step 2</h2>
//           <img style={{ height: "100px", width: "100%", objectFit: "cover", borderRadius: "15px", marginTop: "1em" }} 
//                src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894" />
//           <p>Custom step content!</p>
//         </Step>

//         <Step>
//           <h2>How about an input?</h2>
//           <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name?" />
//         </Step>

//         <Step>
//           <h2>Final Step</h2>
//           <p>You made it!</p>
//         </Step>
//       </Stepper>
//     </div>
//   );
// }

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
