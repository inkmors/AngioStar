export default function Founder() {
  return (
    <section id="founder" className="relative py-28 bg-gradient-to-b from-[#F0F4F8] to-white overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-[#FB2C36] mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 rounded-full bg-[#005B96] mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-[#B3DFF0] rounded-full px-6 py-2 mb-4">
            <span className="text-2xl mr-2">👨‍⚕️</span>
            <h2 className="text-xl font-bold text-[#003366]">Conheça Nosso Fundador</h2>
          </div>
          <p className="text-3xl md:text-4xl font-bold text-[#003366] mb-4 max-w-3xl mx-auto leading-tight">
            <span className="text-[#FB2C36]">Excelência</span> em Cardiologia Intervencionista
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#005B96] to-[#FB2C36] mx-auto mb-6"></div>
        </div>

  
        <div className="flex flex-col lg:flex-row gap-12 items-stretch max-w-6xl mx-auto">

          <div className="lg:w-2/5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#005B96] to-[#FB2C36] rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="/dr-carlos-eduardo.jpg" 
                alt="Dr. Carlos Eduardo Diniz Couto"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">Dr. Carlos Eduardo Diniz Couto</h3>
                <p className="text-[#B3DFF0] font-medium">Cardiologista e Especialista em Hemodinâmica</p>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full border border-[#B3DFF0]/50">
              <div className="prose prose-lg text-gray-700 mb-8">
                <p>
                  Referência nacional em procedimentos minimamente invasivos para o diagnóstico e tratamento de doenças cardiovasculares e vasculares.
                </p>
                <p>
                  Com anos de experiência e atuação em diversos hospitais em Belo Horizonte (Semper, Lifecenter, Mater dei, Santa Rita, Evangélico).
                </p>
              </div>

              <div className="space-y-5 mb-8">
                {[
                  "Formado pela Universidade Federal de Minas Gerais (UFMG)",
                  "Especialista em Cardiologia e hemodinâmica",
                  "Membro da Sociedade Brasileira de Hemodinâmica e Cardiologia Intervencionista",
                  "Membro da Sociedade brasileira de cardiologia",
                  "Preceptor do curso de intervenções Extracardíacas da SBHCI"
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

              <div className="mb-8">
                <h4 className="text-lg font-bold text-[#003366] mb-3">Atuação em Hospitais:</h4>
                <div className="flex flex-wrap gap-3">
                  {['Semper', 'Lifecenter', 'Mater Dei', 'Santa Rita', 'Evangélico'].map((hospital, index) => (
                    <span key={index} className="bg-[#F0F4F8] text-[#005B96] px-4 py-2 rounded-full text-sm font-medium">
                      {hospital}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.doctoralia.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#005B96] to-[#003366] hover:from-[#003366] hover:to-[#005B96] text-white px-6 py-3 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    <path d="M12 6c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
                  </svg>
                  Perfil na Doctoralia
                </a>
                <button className="border-2 border-[#005B96] text-[14px] text-[#005B96] hover:bg-[#005B96] hover:text-white px-6 py-3 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all duration-300 md:text-[15px]">
                  Conheça Nossa Equipe
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}