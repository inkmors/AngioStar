import { useEffect, useRef } from "react";
import { HiUserGroup, HiLocationMarker, HiCheckCircle, HiOutlineHeart, HiOutlineChartBar, HiOutlineUserGroup, HiOutlineShieldCheck } from "react-icons/hi";
import { motion, useAnimation, useInView } from "framer-motion";

export default function AboutUs() {
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

  const scaleUpVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="relative py-16 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ x: -100, y: -100, opacity: 0 }}
          animate={isInView ? { x: -40, y: -40, opacity: 0.2 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -left-40 -top-40 w-80 h-80 md:w-96 md:h-96 bg-[#B3DFF0] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        ></motion.div>
        <motion.div 
          initial={{ x: 100, y: 100, opacity: 0 }}
          animate={isInView ? { x: 40, y: 40, opacity: 0.2 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -right-40 -bottom-40 w-80 h-80 md:w-96 md:h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div variants={itemVariants} className="inline-block relative">
            <h2 className="text-3xl md:text-5xl font-bold text-[#003366] mb-4 relative z-10">
              Quem Somos
            </h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 left-0 w-full h-2 bg-[#B3DFF0] transform origin-left"
              style={{ zIndex: -1 }}
            />
          </motion.div>
          <motion.p variants={itemVariants} className="text-base md:text-lg font-semibold text-[#005B96] max-w-2xl mx-auto mt-2 md:mt-4">
            Conectando pacientes aos melhores especialistas em saúde cardiovascular
          </motion.p>
        </motion.div>

        <div className="relative" ref={ref}>
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={scaleUpVariants}
            className="relative bg-white rounded-xl md:rounded-3xl shadow-lg md:shadow-2xl p-6 md:p-10 mb-12 md:mb-16 border border-[#B3DFF0] transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={controls}
              variants={{
                visible: { 
                  scale: [0, 1.2, 1],
                  transition: { delay: 0.2, duration: 0.6 }
                }
              }}
              className="absolute -top-5 -left-5 md:-top-6 md:-left-6 w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-lg flex items-center justify-center text-white"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>
            
            <motion.p variants={fadeInVariants} className="text-base md:text-xl text-gray-700 mb-4 md:mb-6 leading-relaxed font-semibold">
              A AngioStar é uma clínica especializada em exames e procedimentos de alta precisão na área vascular e cardiológica, conectando pacientes aos melhores especialistas e unidades hospitalares em diversos municípios.
            </motion.p>
            
            <motion.p 
              variants={fadeInVariants}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed"
            >
              Nosso compromisso é garantir um atendimento ágil, seguro e de excelência, utilizando tecnologia avançada para oferecer diagnósticos precisos e um suporte completo aos pacientes.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch"
          >
            <motion.div 
              variants={itemVariants}
              className="lg:w-2/3 bg-gradient-to-br from-[#F0F4F8] to-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md md:shadow-lg border border-[#B3DFF0]"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-4 md:mb-6 flex items-center">
                <motion.span 
                  initial={{ rotate: -90, scale: 0 }}
                  animate={controls}
                  variants={{
                    visible: { 
                      rotate: 0, 
                      scale: 1,
                      transition: { delay: 0.4 }
                    }
                  }}
                  className="w-8 h-8 md:w-10 md:h-10 bg-[#005B96] rounded-full flex items-center justify-center text-white mr-3"
                >
                  <HiUserGroup className="w-4 h-4 md:w-5 md:h-5" />
                </motion.span>
                Nosso Time
              </h3>
              <motion.p 
                variants={fadeInVariants}
                transition={{ delay: 0.5 }}
                className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed font-semibold"
              >
                Nosso time é formado por especialistas altamente qualificados, prontos para proporcionar um atendimento humanizado e soluções eficientes para a sua saúde cardiovascular.
              </motion.p>
              
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6 md:mt-8"
              >
                {[
                  { name: 'Cardiologistas', icon: <HiOutlineHeart className="w-5 h-5 text-red-500" /> },
                  { name: 'Vasculares', icon: <HiOutlineChartBar className="w-5 h-5 text-red-500" /> },
                  { name: 'Hemodinâmicos', icon: <HiOutlineUserGroup className="w-5 h-5 text-red-500" /> },
                  { name: 'Enfermeiros', icon: <HiOutlineShieldCheck className="w-5 h-5 text-red-500" /> }
                ].map((especialidade, index) => (
                  <motion.div 
                    key={index}
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { 
                        y: 0, 
                        opacity: 1,
                        transition: { delay: 0.6 + index * 0.1 }
                      }
                    }}
                    className="bg-white/80 backdrop-blur-sm p-2 md:p-3 rounded-lg border border-[#B3DFF0] text-center hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-1 md:mb-2">
                      {especialidade.icon}
                    </div>
                    <span className="text-xs md:text-sm font-medium text-[#003366]">{especialidade.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.8, duration: 0.6 }
                }
              }}
              className="lg:w-1/3 bg-gradient-to-br from-[#005B96] to-[#003366] p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md md:shadow-lg flex flex-col justify-center"
            >
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Pronto para cuidar da sua saúde cardiovascular?</h3>
              <p className="text-xs md:text-sm text-[#B3DFF0] mb-4 md:mb-6 font-semibold">Agende seu exame com rapidez e segurança.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 md:py-4 md:px-6 rounded-full shadow-md md:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center"
              >
                Agendar Meu Exame
                <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ scale: 0 }}
            animate={controls}
            variants={{
              visible: { 
                scale: 1,
                transition: { delay: 1.2 }
              }
            }}
            className="absolute -right-10 md:-right-20 top-1/4 w-20 h-20 md:w-40 md:h-40 bg-red-500 rounded-full opacity-10 -z-10"
          ></motion.div>
          <motion.div 
            initial={{ scale: 0 }}
            animate={controls}
            variants={{
              visible: { 
                scale: 1,
                transition: { delay: 1.4 }
              }
            }}
            className="absolute -left-5 md:-left-10 bottom-1/4 w-16 h-16 md:w-32 md:h-32 bg-[#005B96] rounded-full opacity-10 -z-10"
          ></motion.div>
        </div>
        
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mt-12 md:mt-20"
        >
          {[
            { number: '+5.000', label: 'Procedimentos', color: 'text-[#FB2C36]', icon: <HiCheckCircle className="w-6 h-6 md:w-8 md:h-8" /> },
            { number: '15+', label: 'Municípios', color: 'text-[#005B96]', icon: <HiLocationMarker className="w-6 h-6 md:w-8 md:h-8" /> },
            { number: '100%', label: 'Qualificados', color: 'text-[#003366]', icon: <HiUserGroup className="w-6 h-6 md:w-8 md:h-8" /> }
          ].map((item, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { 
                  y: 0, 
                  opacity: 1,
                  transition: { delay: 1.6 + index * 0.2 }
                }
              }}
              whileHover={{ y: -5 }}
              className="text-center bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-center mb-2">
                <div className={`p-2 rounded-full ${index === 0 ? 'bg-red-100' : index === 1 ? 'bg-blue-100' : 'bg-[#003366]/10'}`}>
                  {item.icon}
                </div>
              </div>
              <div className={`text-3xl md:text-5xl font-bold ${item.color} mb-1 md:mb-2`}>{item.number}</div>
              <div className="text-gray-600 text-sm md:text-base">{item.label}</div>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={controls}
                variants={{
                  visible: { 
                    scaleX: 1,
                    transition: { delay: 2.2 + index * 0.1 }
                  }
                }}
                className={`w-12 md:w-16 h-1 ${index === 0 ? 'bg-red-500' : index === 1 ? 'bg-[#005B96]' : 'bg-[#003366]'} mx-auto mt-3 md:mt-4 transform origin-left`}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}