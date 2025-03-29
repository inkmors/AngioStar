import React from 'react';
import { motion } from 'framer-motion';

const TeamCTA = () => {
  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-br from-[#003366] to-[#005B96] text-white">
      <div className="container mx-auto px-4 sm:px-6">
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="text-xs sm:text-sm bg-[#FB2C36] hover:bg-[#e0242d] text-white font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Agendar Consulta
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="text-xs sm:text-sm bg-transparent border border-white text-white font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Conhecer Procedimentos
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamCTA;