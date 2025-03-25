import { HiUserGroup } from "react-icons/hi2";

export default function AboutUs() {
  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 w-96 h-96 bg-[#B3DFF0] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-5xl font-bold text-[#003366] mb-4 relative z-10">
              <span className="inline-block transform rotate-12">🩺</span> Quem Somos
            </h2>
          </div>
          <p className="text-bd font-[600] text-[#005B96] max-w-2xl mx-auto mt-[1rem]">
            Conectando pacientes aos melhores especialistas em saúde cardiovascular
          </p>
        </div>

        <div className="relative">
          <div className="relative bg-white rounded-3xl shadow-2xl p-10 mb-16 border border-[#B3DFF0] transform hover:-translate-y-2 transition-all duration-500">
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              A AngioStar é uma clínica especializada em exames e procedimentos de alta precisão na área vascular e cardiológica, conectando pacientes aos melhores especialistas e unidades hospitalares em diversos municípios.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nosso compromisso é garantir um atendimento ágil, seguro e de excelência, utilizando tecnologia avançada para oferecer diagnósticos precisos e um suporte completo aos pacientes.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="lg:w-2/3 bg-gradient-to-br from-[#F0F4F8] to-white p-8 rounded-2xl shadow-lg border border-[#B3DFF0]">
              <h3 className="text-2xl font-bold text-[#003366] mb-6 flex items-center">
                <span className="w-10 h-10 bg-[#005B96] rounded-full flex items-center justify-center text-white mr-3"><HiUserGroup /></span>
                Nosso Time
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nosso time é formado por especialistas altamente qualificados, prontos para proporcionar um atendimento humanizado e soluções eficientes para a sua saúde cardiovascular.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {['Cardiologistas', 'Vasculares', 'Hemodinâmicos', 'Enfermeiros'].map((especialidade, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-[#B3DFF0] text-center">
                    <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-[#003366]">{especialidade}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3 bg-gradient-to-br from-[#005B96] to-[#003366] p-8 rounded-2xl shadow-lg flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-4">Pronto para cuidar da sua saúde cardiovascular?</h3>
              <p className="text-[#B3DFF0] mb-6">Agende seu exame com rapidez e segurança.</p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 flex items-center justify-center">
                Agendar Meu Exame
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="absolute -right-20 top-1/4 w-40 h-40 bg-red-500 rounded-full opacity-10 -z-10"></div>
          <div className="absolute -left-10 bottom-1/4 w-32 h-32 bg-[#005B96] rounded-full opacity-10 -z-10"></div>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto mt-20">
          {[
            { number: '+5.000', label: 'Procedimentos', color: 'text-[#FB2C36]' },
            { number: '15+', label: 'Municípios', color: 'text-[#005B96]' },
            { number: '100%', label: 'Qualificados', color: 'text-[#003366]' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className={`text-5xl font-bold ${item.color} mb-2`}>{item.number}</div>
              <div className="text-gray-600">{item.label}</div>
              <div className={`w-16 h-1 ${index === 0 ? 'bg-red-500' : index === 1 ? 'bg-[#005B96]' : 'bg-[#003366]'} mx-auto mt-4`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}