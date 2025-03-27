export default function Founder() {
  return (
    <section id="founder" className="relative py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        {/* Cabeçalho sóbrio */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
            Conheça Nosso Fundador
          </h2>
          <div className="w-24 h-1 bg-[#005B96] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Liderança e expertise em cardiologia intervencionista
          </p>
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col lg:flex-row gap-10 items-center bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-6 max-w-6xl mx-auto">
          {/* Foto profissional */}
          <div className="lg:w-2/5">
            <div className="relative overflow-hidden rounded-lg border-4 border-white shadow-md md:h-[35rem]">
              <img 
                src="/assets/pexels-pavel-danilyuk-7108174.jpg" 
                alt="Dr. Carlos Eduardo Diniz Couto"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-xl font-bold text-white">Dr. Carlos Eduardo Diniz Couto</h3>
                <p className="text-[#B3DFF0] text-sm">Cardiologista Intervencionista</p>
              </div>
            </div>
          </div>

          {/* Informações profissionais */}
          <div className="lg:w-3/5">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#003366] mb-2">Referência Nacional</h3>
                <p className="text-gray-700">
                  Especialista em procedimentos minimamente invasivos para diagnóstico e tratamento de doenças cardiovasculares, com atuação nos principais hospitais de Belo Horizonte.
                </p>
              </div>

              <div className="space-y-5 mb-8">
                {[
                  "Formado pela Universidade Federal de Minas Gerais (UFMG)",
                  "Especialista em Cardiologia e hemodinâmica",
                  "Membro da Sociedade Brasileira de Hemodinâmica e Cardiologia Intervencionista",
                  "Membro da Sociedade brasileira de cardiologia",
                  "Um dos preceptores do curso de intervenções Extracardíacas da SBHCI"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#B3DFF0] rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#EDF2F7] pt-4">
                <h4 className="text-lg font-semibold text-[#005B96] mb-3">Atuação Hospitalar</h4>
                <div className="flex flex-wrap gap-2">
                  {['Hospital Semper', 'Lifecenter', 'Mater Dei', 'Santa Rita', 'Hospital Evangélico'].map((hospital, index) => (
                    <span key={index} className="bg-[#F0F7FF] text-[#005B96] px-3 py-1 rounded-md text-sm font-medium">
                      {hospital}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="https://www.doctoralia.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cursor-pointer bg-[#005B96] hover:bg-[#003366] text-white px-5 py-2.5 rounded-md flex items-center text-sm font-medium transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    <path d="M12 6c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
                  </svg>
                  Ver Credenciais
                </a>
                <button className="cursor-pointer border border-[#005B96] text-[#005B96] hover:bg-[#005B96] hover:text-white px-5 py-2.5 rounded-md flex items-center text-sm font-medium transition-colors">
                  Conheça a equipe completa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}