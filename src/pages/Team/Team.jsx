import { useEffect } from "react";

import TeamHero from "../../components/TeamComponents/TeamHero/TeamHero";
import DoctorsGrid from "../../components/TeamComponents/DoctorsGrid/DoctorsGrid";
import TeamValues from "../../components/TeamComponents/TeamValues/TeamValues";
import TeamStats from "../../components/TeamComponents/TeamStats/TeamStats";
import TeamTestimonials from "../../components/TeamComponents/TeamTestimonials/TeamTestimonials";
import TeamCTA from "../../components/TeamComponents/TeamCTA/TeamCTA";

export default function Team() {
  useEffect(() => {
    document.title = "Nosso Time | AngioStar";
  }, []);

  return (
    <div className="font-sans bg-gray-50 overflow-hidden">
      <TeamHero />
      <DoctorsGrid />
      <TeamValues />
      <TeamStats />
      <TeamTestimonials />
      <TeamCTA />
    </div>
  );
}