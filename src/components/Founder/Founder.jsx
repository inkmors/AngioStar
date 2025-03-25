export default function Founder() {
    return (
      <section id="doctors" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">👨‍⚕️ Conheça Nosso Fundador</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>
  
          <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto">
            <div className="md:w-1/3">
              <img 
                src="/dr-carlos-eduardo.jpg" 
                alt="Dr. Carlos Eduardo Diniz Couto"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. Carlos Eduardo Diniz Couto</h3>
              <p className="text-blue-600 font-medium mb-4">Cardiologista e Especialista em Hemodinâmica</p>
              
              <div className="prose prose-sm text-gray-600 mb-6">
                <p>
                  Referência nacional em procedimentos minimamente invasivos para o diagnóstico e tratamento de doenças cardiovasculares e vasculares.
                </p>
                <p>
                  Com anos de experiência e atuação em diversos hospitais em Belo Horizonte (Semper, Lifecenter, Mater dei, Santa Rita, Evangélico).
                </p>
              </div>
  
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Formado pela Universidade Federal de Minas Gerais (UFMG)</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Especialista em Cardiologia e hemodinâmica</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Membro da Sociedade Brasileira de Hemodinâmica e Cardiologia Intervencionista</span>
                </div>
              </div>
  
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.doctoralia.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    <path d="M12 6c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
                  </svg>
                  Perfil na Doctoralia
                </a>
                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg flex items-center">
                  Ver Equipe Completa
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }