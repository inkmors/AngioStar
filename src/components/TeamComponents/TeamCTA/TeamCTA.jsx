import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react'
import FunilStepper from "../../FunilStepper/FunilStepper";
import { useNavigate } from 'react-router-dom';

export default function TeamCTA() {
  const [showFunnel, setShowFunnel] = useState(false);

  const openFunnel = () => {
    setShowFunnel(true);
  };

  const navigate = useNavigate();

  return (
    <>
    <section className="relative py-12 md:py-20 bg-[#005B96] text-[#FFFFFF]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
            Pronto para ser atendido por nossa equipe de especialistas?
          </h2>
          
          <p className="text-sm sm:text-base mb-6 sm:mb-8 opacity-90 leading-relaxed">
            Agende sua consulta e tenha acesso a profissionais altamente qualificados e tecnologia de ponta no cuidado cardiovascular.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <motion.button
              onClick={openFunnel}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="text-xs sm:text-sm bg-[#FB2C36] hover:bg-[#E0242D] text-[#FFFFFF] font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Agendar Consulta
            </motion.button>
            
            <motion.button
              onClick={() => navigate('/exams')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="text-xs sm:text-sm bg-transparent border border-[#FFFFFF] text-[#FFFFFF] font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-[#FFFFFF]/[0.1] transition-all duration-300"
            >
              Conhecer Procedimentos
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
    {showFunnel && <FunilStepper onClose={() => setShowFunnel(false)} />}
    </>
  );
};
