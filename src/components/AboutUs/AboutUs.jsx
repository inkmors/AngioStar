import { HiUserGroup, HiLocationMarker, HiCheckCircle, HiOutlineHeart, HiOutlineChartBar, HiOutlineUserGroup, HiOutlineShieldCheck } from "react-icons/hi";

export default function AboutUs() {
  return (
    <section id="about" className="relative py-16 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 w-80 h-80 md:w-96 md:h-96 bg-[#B3DFF0] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -right-40 -bottom-40 w-80 h-80 md:w-96 md:h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-5xl font-bold text-[#003366] mb-4 relative z-10">
              Quem Somos
            </h2>
          </div>
          <p className="text-base md:text-lg font-semibold text-[#005B96] max-w-2xl mx-auto mt-2 md:mt-4">
            Conectando pacientes aos melhores especialistas em saúde cardiovascular
          </p>
        </div>

        <div className="relative">
          <div className="relative bg-white rounded-xl md:rounded-3xl shadow-lg md:shadow-2xl p-6 md:p-10 mb-12 md:mb-16 border border-[#B3DFF0] transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300">
            <div className="absolute -top-5 -left-5 md:-top-6 md:-left-6 w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-lg flex items-center justify-center text-white">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            <p className="text-base md:text-xl text-gray-700 mb-4 md:mb-6 leading-relaxed font-semibold">
              A AngioStar é uma clínica especializada em exames e procedimentos de alta precisão na área vascular e cardiológica, conectando pacientes aos melhores especialistas e unidades hospitalares em diversos municípios.
            </p>
            
            <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Nosso compromisso é garantir um atendimento ágil, seguro e de excelência, utilizando tecnologia avançada para oferecer diagnósticos precisos e um suporte completo aos pacientes.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
            <div className="lg:w-2/3 bg-gradient-to-br from-[#F0F4F8] to-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md md:shadow-lg border border-[#B3DFF0]">
              <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-4 md:mb-6 flex items-center">
                <span className="w-8 h-8 md:w-10 md:h-10 bg-[#005B96] rounded-full flex items-center justify-center text-white mr-3">
                  <HiUserGroup className="w-4 h-4 md:w-5 md:h-5" />
                </span>
                Nosso Time
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed font-semibold">
                Nosso time é formado por especialistas altamente qualificados, prontos para proporcionar um atendimento humanizado e soluções eficientes para a sua saúde cardiovascular.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6 md:mt-8">
                {[
                  { name: 'Cardiologistas', icon: <HiOutlineHeart className="w-5 h-5 text-red-500" /> },
                  { name: 'Vasculares', icon: <HiOutlineChartBar className="w-5 h-5 text-red-500" /> },
                  { name: 'Hemodinâmicos', icon: <HiOutlineUserGroup className="w-5 h-5 text-red-500" /> },
                  { name: 'Enfermeiros', icon: <HiOutlineShieldCheck className="w-5 h-5 text-red-500" /> }
                ].map((especialidade, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm p-2 md:p-3 rounded-lg border border-[#B3DFF0] text-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-1 md:mb-2">
                      {especialidade.icon}
                    </div>
                    <span className="text-xs md:text-sm font-medium text-[#003366]">{especialidade.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3 bg-gradient-to-br from-[#005B96] to-[#003366] p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md md:shadow-lg flex flex-col justify-center">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Pronto para cuidar da sua saúde cardiovascular?</h3>
              <p className="text-xs md:text-sm text-[#B3DFF0] mb-4 md:mb-6 font-semibold">Agende seu exame com rapidez e segurança.</p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 md:py-4 md:px-6 rounded-full shadow-md md:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 flex items-center justify-center">
                Agendar Meu Exame
                <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="absolute -right-10 md:-right-20 top-1/4 w-20 h-20 md:w-40 md:h-40 bg-red-500 rounded-full opacity-10 -z-10"></div>
          <div className="absolute -left-5 md:-left-10 bottom-1/4 w-16 h-16 md:w-32 md:h-32 bg-[#005B96] rounded-full opacity-10 -z-10"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mt-12 md:mt-20">
          {[
            { number: '+5.000', label: 'Procedimentos', color: 'text-[#FB2C36]', icon: <HiCheckCircle className="w-6 h-6 md:w-8 md:h-8" /> },
            { number: '15+', label: 'Municípios', color: 'text-[#005B96]', icon: <HiLocationMarker className="w-6 h-6 md:w-8 md:h-8" /> },
            { number: '100%', label: 'Qualificados', color: 'text-[#003366]', icon: <HiUserGroup className="w-6 h-6 md:w-8 md:h-8" /> }
          ].map((item, index) => (
            <div key={index} className="text-center bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-center mb-2">
                <div className={`p-2 rounded-full ${index === 0 ? 'bg-red-100' : index === 1 ? 'bg-blue-100' : 'bg-[#003366]/10'}`}>
                  {item.icon}
                </div>
              </div>
              <div className={`text-3xl md:text-5xl font-bold ${item.color} mb-1 md:mb-2`}>{item.number}</div>
              <div className="text-gray-600 text-sm md:text-base">{item.label}</div>
              <div className={`w-12 md:w-16 h-1 ${index === 0 ? 'bg-red-500' : index === 1 ? 'bg-[#005B96]' : 'bg-[#003366]'} mx-auto mt-3 md:mt-4`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}