import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import FunilStepper from "../../FunilStepper/FunilStepper";

export default function AboutUs() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [showFunnel, setShowFunnel] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const openFunnel = () => {
    setShowFunnel(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideInVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <>
    <section id="about" className="relative py-16 md:py-24 bg-[#ffffff] overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ x: -100, y: -100, opacity: 0 }}
          animate={isInView ? { x: -40, y: -40, opacity: 0.05 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -left-40 -top-40 w-80 h-80 md:w-96 md:h-96 bg-[#dbeafe] rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div 
          initial={{ x: 100, y: 100, opacity: 0 }}
          animate={isInView ? { x: 40, y: 40, opacity: 0.05 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -right-40 -bottom-40 w-80 h-80 md:w-96 md:h-96 bg-[#fee2e2] rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-25"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[#003366] mb-6"
          >
            Quem Somos  
          </motion.h2>

          <p className="text-lg text-[#4b5563] max-w-2xl mx-auto">
            Conectando pacientes aos melhores especialistas em saúde cardiovascular
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={ref}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={slideInVariants}
            className="space-y-6"
          >
            <motion.p 
              variants={fadeInVariants}
              transition={{ delay: 0.2 }}
              className="text-lg font-bold text-[#4b5563] leading-relaxed"
            >
              A AngioStar é uma clínica especializada em exames e procedimentos de alta precisão na área vascular e cardiológica, conectando pacientes aos melhores especialistas e unidades hospitalares em diversos municípios. Nosso compromisso é garantir um atendimento ágil, seguro e de excelência, utilizando tecnologia avançada para oferecer diagnósticos precisos e um suporte completo aos pacientes.  
            </motion.p>
            
            <motion.p 
              variants={fadeInVariants}
              transition={{ delay: 0.3 }}
              className="text-lg text-[#4b5563] leading-relaxed"
            >
              Nosso time é formado por especialistas altamente qualificados, prontos para proporcionar um atendimento humanizado e soluções eficientes para a sua saúde cardiovascular.  
            </motion.p>
            
            <motion.div
              variants={fadeInVariants}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.3)"
                }}
                onClick={openFunnel}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-[#dc2626] to-[#ef4444] text-[#ffffff] font-medium py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                Agendar Exame
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.2,
                  duration: 0.8,
                  ease: "easeOut"
                }
              }
            }}
            className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl bg-[#e5e7eb]"
          >
            
            <div className="absolute inset-0 bg-[#60a5fa] opacity-40"></div>
            <img
              src="assets/group-doctors-colleagues-looking-lungs-x-ray.jpg"
              alt="Equipe Médica"
              className="w-full h-full object-cover object-center"
            />

          </motion.div>
        </div>
      </div>
    </section>

    {showFunnel && <FunilStepper onClose={() => setShowFunnel(false)} />}
    </>
  );
}