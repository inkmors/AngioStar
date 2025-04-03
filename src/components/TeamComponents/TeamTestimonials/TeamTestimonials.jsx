import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
      id: 1,
      name: "Dra. Renata Almeida",
      role: "Cardiologista - 12 anos de experiência",
      quote: "Trabalhar na AngioStar me permite oferecer o melhor da medicina com estrutura e equipe excepcionais.",
      photo: "/doctors/dr-carlos.jpg"
    },
    {
      id: 2,
      name: "Dr. Marcelo Costa",
      role: "Cirurgião Vascular - 15 anos de experiência",
      quote: "A integração entre as especialidades aqui é única, resultando em melhores tratamentos para nossos pacientes.",
      photo: "/doctors/dra-ana.jpg"
    },
    {
      id: 3,
      name: "Enf. Juliana Santos",
      role: "Enfermeira Chefe - 10 anos na equipe",
      quote: "Nosso diferencial é o cuidado humanizado em cada detalhe do atendimento.",
      photo: "/doctors/dr-rafael.jpg"
    }
];

const TeamTestimonials = () => {
  return (
    <section className="relative py-12 md:py-20 bg-[#FFFFFF]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003366] mb-3">
            Quem Faz a Diferença
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#005B96] max-w-2xl mx-auto">
            Depoimentos de profissionais que fazem parte do time AngioStar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#FFFFFF] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-5 sm:p-6 border border-[#F3F4F6]"
            >
              <div className="flex items-start mb-4">
                <img 
                  src={testimonial.photo} 
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#003366]">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-[#005B96]">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="relative pl-8">
                <FaQuoteLeft className="absolute left-0 top-0 text-[#B3DFF0] text-2xl" />
                <p className="text-xs sm:text-sm text-[#4B5563] italic">"{testimonial.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamTestimonials;