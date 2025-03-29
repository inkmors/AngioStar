import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
    { value: 15, suffix: "+", label: "Especialistas", color: "text-[#FB2C36]"},
    { value: 5000, suffix: "+", label: "Procedimentos/ano", color: "text-[#FFF]"},
    { value: 98, suffix: "%", label: "Satisfação", color: "text-[#00A86B]"},
    { value: 24, suffix: "/7", label: "Plantão", color: "text-[#FFA500]"}
];

export default function TeamStats(){
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#003366] to-[#005B96] text-white overflow-hidden">

      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-[#FB2C36] mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-[#005B96] mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -right-20 top-1/3 w-64 h-64 rounded-full bg-[#00A86B] mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/assets/medical-pattern-white.svg')] bg-repeat bg-[length:200px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Nossa <span className="text-[#B3DFF0]">Excelência</span> em Números
          </h2>
          <p className="text-lg text-[#B3DFF0] max-w-3xl mx-auto">
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
              <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 p-6 md:p-8 flex flex-col items-center text-center">
                
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                  <CountUp 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>

                <div className="text-lg text-[#B3DFF0] font-medium mb-2">
                  {stat.label}
                </div>
                
                <div className="w-16 h-1 bg-current opacity-30 mt-2"></div>
                
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl pointer-events-none transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};