import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
    { value: 15, suffix: "+", label: "Especialistas", color: "#FB2C36"},
    { value: 5000, suffix: "+", label: "Procedimentos/ano", color: "#FFFFFF"},
    { value: 98, suffix: "%", label: "Satisfação", color: "#00A86B"},
    { value: 24, suffix: "/7", label: "Plantão", color: "#FFA500"}
];

export default function TeamStats(){
  return (
    <section className="relative py-16 md:py-24 bg-[#003366] text-white overflow-hidden">

      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-[#FB2C36] mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-[#005B96] mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -right-20 top-1/3 w-64 h-64 rounded-full bg-[#00A86B] mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 bg-[#003366]">
        <div className="absolute inset-0 bg-[url('/assets/medical-pattern-white.svg')] bg-repeat bg-[length:200px] opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Nossa <span style={{color: "#B3DFF0"}}>Excelência</span> em Números
          </h2>
          <p className="text-lg" style={{color: "#B3DFF0", maxWidth: "48rem"}}>
            Dados que refletem nosso compromisso com a saúde cardiovascular
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div 
                className="h-full rounded-2xl overflow-hidden p-6 md:p-8 flex flex-col items-center text-center"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.5s ease",
                }}
              >
                
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{color: stat.color}}>
                  <CountUp 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>

                <div className="text-lg font-medium mb-2" style={{color: "#B3DFF0"}}>
                  {stat.label}
                </div>
                
                <div className="w-16 h-1" style={{backgroundColor: "currentColor", opacity: 0.3, marginTop: "0.5rem"}}></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};