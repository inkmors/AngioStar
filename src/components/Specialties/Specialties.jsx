export default function Specialties() {
  const specialties = {
    vascular: [
      "Doença Arterial Periférica",
      "Aneurismas de Aorta",
      "Síndrome de May-Thurner",
      "Embolização de Varizes Pélvicas",
      "Tratamento Endovascular de Varicocele"
    ],
    cardio: [
      "Infarto do Miocárdio",
      "Angina",
      "Doença Arterial Coronariana",
      "Doenças Valvulares"
    ],
    exams: [
      "Cateterismo Cardíaco",
      "Angioplastia coronária com Stent",
      "Angiografia de membros inferiores",
      "Angiotrafia cerebral",
      "Embolização (miomas, varizes pélvicas)",
      "TAVI",
      "Mitraclip"
    ]
  }

  return (
    <section id="specialties" className="relative py-24 bg-gradient-to-b from-[#F0F4F8] to-white overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-[#FF5722] mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-[#005B96] mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-[#B3DFF0] rounded-full px-6 py-2 mb-4">
            <span className="text-2xl mr-2">⚕️</span>
            <h2 className="text-xl font-bold text-[#003366]">Nossas Especialidades</h2>
          </div>
          <p className="text-3xl md:text-4xl font-bold text-[#003366] mb-4 max-w-3xl mx-auto leading-tight">
            Cuidados <span className="text-[#FF5722]">cardiovasculares</span> completos em um só lugar
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#005B96] to-[#FF5722] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça nossas áreas de atuação e clique para saber mais sobre cada exame
          </p>
        </div>

        {/* Cards de Especialidades - Design Inovador */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Card Vascular */}
          <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-[#B3DFF0]/50 hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#005B96]/5 to-[#003366]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-8">
              <div className="flex items-center mb-6">
                <div className="bg-[#B3DFF0] p-3 rounded-xl mr-4">
                  <svg className="w-8 h-8 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#003366]">Saúde Vascular</h3>
              </div>
              <ul className="space-y-4">
                {specialties.vascular.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#B3DFF0] rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 text-[#005B96] font-medium flex items-center group-hover:text-[#FF5722] transition-colors duration-300">
                Ver todos os procedimentos
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card Cardio */}
          <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-[#B3DFF0]/50 hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF5722]/5 to-[#E64A19]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-8">
              <div className="flex items-center mb-6">
                <div className="bg-[#FF5722]/10 p-3 rounded-xl mr-4">
                  <svg className="w-8 h-8 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#003366]">Saúde Cardiológica</h3>
              </div>
              <ul className="space-y-4">
                {specialties.cardio.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#FF5722]/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 text-[#005B96] font-medium flex items-center group-hover:text-[#FF5722] transition-colors duration-300">
                Ver todos os procedimentos
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card Exames */}
          <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-[#B3DFF0]/50 hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#005B96]/5 to-[#FF5722]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-8">
              <div className="flex items-center mb-6">
                <div className="bg-[#B3DFF0] p-3 rounded-xl mr-4">
                  <svg className="w-8 h-8 text-[#005B96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#003366]">Exames e Procedimentos</h3>
              </div>
              <ul className="space-y-4">
                {specialties.exams.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#B3DFF0] rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-[#005B96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 text-[#005B96] font-medium flex items-center group-hover:text-[#FF5722] transition-colors duration-300">
                Ver todos os exames
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="relative overflow-hidden bg-gradient-to-r from-[#005B96] to-[#FF5722] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 group">
            <span className="relative z-10 flex items-center">
              Quero Marcar Meu Exame
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#FF5722] to-[#005B96] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </button>
        </div>
      </div>
    </section>
  )
}