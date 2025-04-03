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
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  const slideInFromLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInFromRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="founder" className="relative py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: -50, opacity: 0.05 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-1/4 -left-40 w-64 h-64 rounded-full bg-[#003366] mix-blend-multiply filter blur-3xl"
        />
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 50, opacity: 0.05 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-1/4 -right-40 w-64 h-64 rounded-full bg-[#005B96] mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
          ref={ref}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[#003366] mb-6"
          >
            Conheça Nosso Fundador
          </motion.h2>
          
          <motion.p 
            variants={fadeInVariants}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Liderança e expertise em cardiologia intervencionista
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-10 items-center bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-6 max-w-6xl mx-auto overflow-hidden"
        >
          <motion.div 
            variants={slideInFromLeft}
            className="lg:w-2/5"
          >
            <div className="relative overflow-hidden rounded-lg border-4 border-white shadow-md md:h-[35rem] group">
              <motion.img 
                initial={{ scale: 1.05 }}
                animate={controls}
                variants={{
                  visible: {
                    scale: 1,
                    transition: { delay: 0.5, duration: 0.8 }
                  }
                }}
                loading="lazy"
                src="/assets/PhotoDrCarlosEduardo.jpeg" 
                alt="Dr. Carlos Eduardo Diniz Couto"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <motion.div 
                initial={{ y: 50 }}
                animate={controls}
                variants={{
                  visible: {
                    y: 0,
                    transition: { delay: 0.7, duration: 0.6 }
                  }
                }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4"
              >
                <h3 className="text-xl font-bold text-white">Dr. Carlos Eduardo Diniz Couto</h3>
                <p className="text-[#B3DFF0] text-sm">Cardiologista Intervencionista</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={slideInFromRight}
            className="lg:w-3/5"
          >
            <div className="space-y-6">
              <motion.div
                variants={fadeInVariants}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-[#003366] mb-2">Referência Nacional</h3>
                <p className="text-gray-700">
                  Especialista em procedimentos minimamente invasivos para diagnóstico e tratamento de doenças cardiovasculares, com atuação nos principais hospitais de Belo Horizonte.
                </p>
              </motion.div>

              <motion.div 
                variants={containerVariants}
                className="space-y-5 mb-8"
              >
                {[
                  "Formado pela Universidade Federal de Minas Gerais (UFMG)",
                  "Especialista em Cardiologia e hemodinâmica",
                  "Membro da Sociedade Brasileira de Hemodinâmica e Cardiologia Intervencionista",
                  "Membro da Sociedade brasileira de cardiologia",
                  "Um dos preceptores do curso de intervenções Extracardíacas da SBHCI"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={{
                      hidden: { x: 20, opacity: 0 },
                      visible: { 
                        x: 0, 
                        opacity: 1,
                        transition: { delay: 0.7 + index * 0.1 }
                      }
                    }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#B3DFF0] rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                variants={fadeInVariants}
                transition={{ delay: 1.2 }}
                className="border-t border-[#EDF2F7] pt-4"
              >
                <h4 className="text-lg font-semibold text-[#005B96] mb-4">Atuação Hospitalar</h4>
                <div className="flex flex-wrap gap-2">
                  {['Hospital Semper', 'Lifecenter', 'Mater Dei', 'Santa Rita', 'Hospital Evangélico'].map((hospital, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={controls}
                      variants={{
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { 
                            delay: 1.3 + index * 0.1,
                            duration: 0.5
                          }
                        }
                      }}
                    >
                      <span className="bg-[#B3DFF0] text-[#005B96] px-3 py-1 rounded-md text-sm font-medium">{hospital}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInVariants}
                transition={{ delay: 1.6 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.a
                  whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0, 83, 150, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  href="https://www.doctoralia.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cursor-pointer bg-[#005B96] hover:bg-[#003366] text-white px-5 py-2.5 rounded-md flex items-center text-sm font-medium transition-all"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    <path d="M12 6c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
                  </svg>
                  Ver Credenciais
                </motion.a>
                
                <motion.a
                  href='/team'
                  whileHover={{ y: -2, backgroundColor: "#005B96", color: "#fff" }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer border border-[#005B96] text-[#005B96] hover:bg-[#005B96] hover:text-white px-5 py-2.5 rounded-md flex items-center text-sm font-medium transition-all"
                >
                  Conheça a equipe completa
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}