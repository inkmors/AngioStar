import { motion } from "framer-motion";

export default function TeamHero() {
  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/vecteezy_group-of-medical-staff-at-hospital-handsome-doctor-in-front_12140570.jpg"
          alt="Equipe médica"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#003366]/80 bg-gradient-to-r from-[#003366]/90 via-[#003366]/70 to-transparent"></div>
      </div>
      
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute -right-20 -top-20 w-96 h-96 bg-[#B3DFF0] rounded-full mix-blend-multiply filter blur-3xl"
      />
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute -left-20 -bottom-20 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"
      />

      <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left max-w-2xl"
        >
          <span className="inline-block bg-[#B3DFF0] text-[#003366] px-4 py-1 rounded-full text-sm font-medium mb-4">
            Excelência em Cardiologia
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            <span className="block">Sua Saúde Cardiovascular</span>
            <span className="text-[#B3DFF0]">em Boas Mãos</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
            Nossa equipe multidisciplinar combina expertise técnica com atendimento humanizado para os melhores resultados.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <button className="bg-white text-[#003366] px-8 py-3 rounded-full font-bold hover:bg-[#B3DFF0] transition-all duration-300 flex items-center group shadow-lg hover:shadow-xl">
              Agendar Consulta
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
            
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-6 items-center"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#B3DFF0] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white/90">Certificação Internacional</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#B3DFF0] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white/90">Tecnologia de Ponta</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce w-8 h-14 rounded-full border-2 border-white flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}