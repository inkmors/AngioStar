import { useState } from 'react';
import FunilStepper from "../../FunilStepper/FunilStepper";
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [showFunnel, setShowFunnel] = useState(false);

  const openFunnel = () => {
    setShowFunnel(true);
  };

  const navigate = useNavigate();
  
  return (
    <>
    <section className="relative text-white overflow-hidden h-screen max-h-[900px] lg:max-h-[60rem]">
      <div className="absolute inset-0 z-0">
        <img
          loading="lazy"
          src="assets/young-handsome-physician-medical-robe-with-stethoscope.jpg"
          alt="Médico cardiologista"
          className="w-full h-full object-cover object-center transition-opacity duration-300"
          style={{
            opacity: 0.8,
            filter: "brightness(0.7) contrast(1.2)",
          }}
        />
        <div
          className="absolute inset-0 bg-[#1E3A8A] opacity-70 sm:opacity-0 transition-opacity duration-300"
        />

        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, #1E3A8A 0%, rgba(29, 78, 216, 0.1) 100%)",
            transition: "all 0.5s ease-in-out"
          }}
        />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-[15rem] pointer-events-none"
        style={{
          background: "linear-gradient(to top, #FFFFFF 0%, rgba(255, 255, 255, 0.95) 15%, rgba(255, 255, 255, 0.85) 25%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.25) 75%, rgba(255, 255, 255, 0) 100%)",
          transition: "all 0.5s ease-in-out"
        }}
      ></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-10 h-full flex items-center relative z-10">
        <div className="max-w-2xl w-full pb-32 sm:pb-36">
          <div
            className="inline-flex items-center rounded-full px-3 py-1 mb-4 sm:mb-5"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span className="font-medium text-[0.7rem] sm:text-sm md:text-base">
              Referência em Cardiologia Intervencionista
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-bold mb-4 sm:mb-6 leading-tight">
            Tratamento Cardiovascular <br className="hidden sm:block"/>Preciso e Humanizado
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed opacity-90 max-w-[90%]">
            Tecnologia de ponta e especialistas renomados para diagnósticos precisos e tratamentos minimamente invasivos.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <button
              onClick={openFunnel}
              className="cursor-pointer flex items-center justify-center bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-2 px-5 sm:py-2.5 sm:px-7 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Agendar Meu Exame
            </button>

            <button
              onClick={() => navigate('/team')}
              className="cursor-pointer flex items-center justify-center border text-white font-medium py-2 px-5 sm:py-2.5 sm:px-7 rounded-full transition-all duration-300 hover:scale-[1.02]"
              style={{
                borderColor: "rgba(255, 255, 255, 0.6)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              Conheça Nossos Especialistas
            </button>
          </div>

          <div className="max-w-[31rem] flex justify-between items-center flex flex-wrap gap-x-3 sm:gap-x-6 gap-y-3 sm:justify-start text-sm sm:text-base">
            <div className="flex items-center mb-1 sm:mb-0">
              <svg
                className="w-3 h-3 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-[#FACC15]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold text-[10px] sm:text-[15px]">4.9/5 (200+ avaliações)</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 sm:w-6 sm:h-6 mr-1 sm:mr-2 text-[#22C55E]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-[10px] sm:text-[15px]">+5.000 procedimentos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {showFunnel && <FunilStepper onClose={() => setShowFunnel(false)} />}
    </>
  )
}