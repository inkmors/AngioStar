import { useEffect } from "react";

import DoctorsGrid from "../../components/TeamComponents/DoctorsGrid/DoctorsGrid";
import TeamStats from "../../components/TeamComponents/TeamStats/TeamStats";
import TeamTestimonials from "../../components/TeamComponents/TeamTestimonials/TeamTestimonials";
import TeamCTA from "../../components/TeamComponents/TeamCTA/TeamCTA";

export default function Team() {
  useEffect(() => {
    document.title = "Nosso Time | AngioStar";
  }, []);

  return (
    <div className="font-sans bg-gray-50 overflow-hidden">
      <DoctorsGrid />
      <TeamStats />
      <TeamTestimonials />
      <TeamCTA />
    </div>
  );
}