import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export default function HorizontalTestimonialCarousel() {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Eduardo",
      role: "Paciente de Cateterismo",
      avatar: "/avatars/man-1.jpg",
      rating: 5,
      content: "Atendimento excepcional desde o primeiro contato. A equipe foi muito atenciosa e o Dr. Rafael explicou todo o procedimento com clareza. Me senti seguro e bem cuidado durante todo o processo."
    },
    {
      id: 2,
      name: "Ana Paula",
      role: "Familiar de Paciente",
      avatar: "/avatars/woman-1.jpg",
      rating: 4,
      content: "Minha mãe fez uma angioplastia e ficamos impressionados com a tecnologia disponível e o cuidado da equipe. O acompanhamento pós-procedimento também foi excelente."
    },
    {
      id: 3,
      name: "Roberto Almeida",
      role: "Paciente de Check-up",
      avatar: "/avatars/man-2.jpg",
      rating: 5,
      content: "Fiz um check-up cardiovascular completo e fiquei muito satisfeito. Os exames foram todos realizados no mesmo local, com equipamentos modernos e resultados rápidos."
    },
    {
      id: 4,
      name: "Mariana Costa",
      role: "Paciente de Ecocardiograma",
      avatar: "/avatars/woman-2.jpg",
      rating: 5,
      content: "Profissionais extremamente competentes e humanizados. O Dr. Felipe explicou cada detalhe do meu exame com paciência e me deixou tranquila sobre os resultados."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] sm:text-[25px] mb-[3rem]">Depoimentos de Pacientes</h2>
          {/* <div className="w-24 h-1 bg-[#005B96] mx-auto mb-6"></div> */}
          <p className="text-lg text-gray-600 font-[400] max-w-3xl mx-auto">
          A <span className='font-[500]'>confiança</span> dos nossos <span className='font-[500]'>pacientes</span> é o nosso maior <span className='font-[500]'>reconhecimento.</span> Confira os relatos de quem já passou pelo atendimento <span className='font-[500]'>AngioStar.</span>
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
 
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-shrink-0 relative">
                        <img 
                          loading="lazy"
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#005B96] shadow-sm"
                        />
                        <div className="absolute -bottom-3 -right-3 bg-[#005B96] rounded-full p-2 shadow-md">
                          <FaQuoteLeft className="text-white text-sm" />
                        </div>
                      </div>
                      <div className="text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-4">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} text-lg md:text-xl mr-1`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600 italic text-lg md:text-xl mb-6 leading-relaxed">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <h4 className="font-bold text-gray-900 text-xl md:text-2xl">{testimonial.name}</h4>
                          <p className="text-[#005B96]">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <button 
            onClick={goToPrev}
            className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-all z-10 group"
            aria-label="Depoimento anterior"
          >
            <FiChevronLeft className="text-[#003366] text-xl group-hover:text-blue-800" />
          </button>
          <button 
            onClick={goToNext}
            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-all z-10 group"
            aria-label="Próximo depoimento"
          >
            <FiChevronRight className="text-[#003366] text-xl group-hover:text-blue-800" />
          </button>
        </div>

        <div className="flex justify-center mt-10 md:mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${index === currentIndex ? 'bg-[#005B96] w-8' : 'bg-gray-300'}`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}