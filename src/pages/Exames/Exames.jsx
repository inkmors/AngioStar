import { useEffect } from "react";
import ExamesHero from "../../components/ExamesComponents/ExamesHero/ExamesHero";
import ExamesDisplay from "../../components/ExamesComponents/ExamesTabs/ExamesTabs";
import ExamesCategory from "../../components/ExamesComponents/ExamesCategory/ExamesCategory";
import ExamesCTA from "../../components/ExamesComponents/ExamesCTA/ExamesCTA";

export default function Exames() {
  useEffect(() => {
    document.title = "Nossos Exames e Procedimentos | AngioStar";
  }, []);

  return (
    <div className="font-sans bg-gray-50">
      <ExamesHero />
      <ExamesDisplay />

      <ExamesCTA />
    </div>
  );
}