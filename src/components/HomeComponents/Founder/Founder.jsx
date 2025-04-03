import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Founder() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const credentials = [
    "Formado pela UFMG",
    "Cardiologista Clínico titular da SBC",
    "Médico Titular da SBHCI",
    "Coordenador do curso de intervenções extracardiacas",
    "Membro do NICOOP UNIMEDBH",
    "Especialização em Gestão pela FGV",
    "Especialização em cooperativas médicas pela FDC",
    "RQE 36060 | RQE 36061",
    "Diretor de Hemodinâmica: Evangélico, Lifecenter, Semper, Santa Rita"
  ];

  const hospitals = ['Semper', 'Lifecenter', 'Mater Dei', 'Santa Rita', 'Evangélico'];

  return (
    <section id="founder" className="relative py-10 md:py-16 bg-[#f8fafc]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-10"
          ref={ref}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-[#003366] mb-3">
            Conheça Nosso Fundador
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[#4b5563] max-w-2xl mx-auto">
            Liderança e expertise em cardiologia intervencionista
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-6 bg-white rounded-lg shadow-sm p-4 md:p-5 max-w-5xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="lg:w-2/5 flex flex-col"
          >
            <div className="relative overflow-hidden rounded-lg h-60 sm:h-72 md:h-120">
              <img 
                src="/assets/PhotoDoctors/PhotoDrCarlosEduardo.jpeg" 
                alt="Dr. Carlos Eduardo Diniz Couto"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#ffffffcc] p-3 text-center">
                <h3 className="text-[13px] font-bold text-[#003366] md:text-xl">Dr. Carlos Eduardo Diniz Couto</h3>
                <p className="text-[#005b96] text-[12px]">Cardiologista Intervencionista</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="lg:w-3/5 flex flex-col justify-between"
          >
            <div>
              <motion.div variants={itemVariants} className="mb-4">
                <h3 className="text-xl font-bold text-[#003366] mb-2">Referência Nacional</h3>
                <p className="text-[#374151] text-sm">
                  Especialista em procedimentos minimamente invasivos para diagnóstico e tratamento de doenças cardiovasculares.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-5">
                <h4 className="font-semibold text-[#005b96] mb-2">Credenciais e Títulos</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {credentials.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-4 h-4 bg-[#b3dff0] rounded-full flex items-center justify-center mr-2 mt-1">
                        <svg className="w-2 h-2 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[#374151] text-xs sm:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div variants={itemVariants} className="border-t border-[#edf2f7] pt-3 mb-4">
                <h4 className="font-semibold text-[#005b96] mb-2">Atuação Hospitalar</h4>
                <div className="flex flex-wrap gap-1.5">
                  {hospitals.map((hospital, index) => (
                    <span key={index} className="bg-[#e6f2ff] text-[#005b96] px-2.5 py-1 rounded text-xs">
                      {hospital}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
                <a href="https://www.doctoralia.com.br" target="_blank" rel="noopener noreferrer"
                  className="bg-[#005b96] hover:bg-[#003366] text-white px-5 py-4 rounded text-xs sm:text-sm flex items-center">
                  <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    <path d="M12 6c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
                  </svg>
                  Ver Credenciais
                </a>
                
                <a href='/team'
                  className="text-[#005b96] hover:bg-[#005b96] flex items-center hover:text-white px-5 py-4 rounded text-xs sm:text-sm"
                  style = {
                    { borderColor: '#003366', borderWidth: '1px', borderStyle: 'solid' }
                  }
                  >
                  Conheça a equipe
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}