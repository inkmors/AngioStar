import React from 'react';
import { motion } from 'framer-motion';

const doctors = [
  {
    id: 1,
    name: "Dr. Carlos Eduardo Diniz Couto",
    specialty: "Cardiologia Intervencionista",
    experience: "15+ anos",
    quote: "A precisão no diagnóstico é o primeiro passo para um tratamento eficaz.",
    photo: "/assets/PhotoDoctors/pexels-cristian-rojas-8460094.jpg",
    expertise: ["Cateterismo", "Angioplastia", "TAVI"]
  },
  {
    id: 2,
    name: "Dra. Ana Paula Mendes",
    specialty: "Hemodinâmica",
    experience: "12+ anos",
    quote: "Cada paciente recebe atenção individualizada e tratamento personalizado.",
    photo: "/assets/PhotoDoctors/medium-shot-woman-working-as-doctor.jpg",
    expertise: ["Hemodinâmica", "Ecocardiografia", "Check-up"]
  },
  {
    id: 3,
    name: "Dr. Rafael Torres",
    specialty: "Cirurgia Vascular",
    experience: "10+ anos",
    quote: "Tecnologia avançada aliada à experiência clínica para melhores resultados.",
    photo: "/assets/PhotoDoctors/close-up-health-worker.jpg",
    expertise: ["Cirurgia Vascular", "Angiografia", "Tratamento de Varizes"]
  },
  {
    id: 4,
    name: "Dra. Mariana Costa",
    specialty: "Ecocardiografia",
    experience: "8+ anos",
    quote: "A saúde do coração começa com prevenção e acompanhamento especializado.",
    photo: "/assets/PhotoDoctors/doctor-uniform-standing-white.jpg",
    expertise: ["Ecocardiograma", "Doppler", "Cardiologia Preventiva"]
  }
];

export default function DoctorsGrid(){
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#F7FAFC] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            Nossos Especialistas
          </h2>
          <div className="w-20 h-1 bg-[#005B96] mx-auto mb-6"></div>
          <p className="text-lg text-[#005B96] max-w-3xl mx-auto leading-relaxed">
            Conheça nossa equipe de cardiologistas altamente qualificados, dedicados a oferecer o melhor cuidado cardiovascular com tecnologia de ponta e abordagem humanizada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:gap-16 lg:gap-20">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-2xl overflow-hidden shadow-xl transition-all hover:shadow-2xl ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex-row`}
            >
              <div className="w-full md:w-5/12 h-80 md:h-[28rem] relative group overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <img 
                    src={doctor.photo}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    style={{
                      objectPosition: index >= 2 ? 'top center' : 'center center'
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="inline-block bg-white/90 text-[#003366] px-4 py-2 rounded-lg text-sm font-bold shadow-sm">
                    {doctor.experience} de experiência
                  </span>
                </div>
              </div>

              <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#003366] mb-1">{doctor.name}</h3>
                  <p className="text-[#005B96] font-semibold mb-4">{doctor.specialty}</p>
                  
                  <div className="flex items-center mb-6">
                    <div className="mr-3 flex-shrink-0">
                      <svg className="w-6 h-6 text-[#005B96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 italic text-lg">"{doctor.quote}"</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-[#005B96] uppercase tracking-wider mb-3">Especializações</h4>
                  <div className="flex flex-wrap gap-3">
                    {doctor.expertise.map((exp, i) => (
                      <span 
                        key={i} 
                        className="bg-[#B3DFF0] text-[#003366] px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                      >
                        <svg className="w-4 h-4 mr-2 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};