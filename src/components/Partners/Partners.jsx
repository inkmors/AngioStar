export default function Partners() {
  const hospitals = [
    { name: "Hospital Santa Rita", logo: "/assets/SantaRitaLogo-Photoroom.png" },
    { name: "Hospital Evangélico", logo: "/icons/hospital.svg" },
    { name: "Hospital Semper", logo: "/icons/stethoscope.svg" },
    { name: "Hospital Lifecenter", logo: "/icons/heartbeat.svg" },
    { name: "Hospital Materdei", logo: "/icons/medical-cross.svg" },
  ]

  const insurances = [
    { name: "Unimed", logo: "/icons/shield.svg" },
    { name: "IPSEMG", logo: "/icons/umbrella.svg" },
    { name: "MedSênior", logo: "/icons/plus-circle.svg" },
    { name: "Geap", logo: "/icons/user-md.svg" },
    { name: "Saúde Bradesco", logo: "/icons/truck.svg" },
    { name: "Hapivida - NDI", logo: "/icons/bank.svg" },
    { name: "Amil", logo: "/icons/building.svg" },
    { name: "Sul América", logo: "/icons/globe.svg" },
    { name: "Cemig", logo: "/icons/building.svg" },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center bg-[#B3DFF0] rounded-full px-6 py-2 mb-[3rem]">
            {/* <span className="text-2xl mr-2">⚕️</span> */}
            <h2 className="text-[20px] font-bold text-[#003366] sm:text-[25px]">Nossos Parceiros</h2>
          </div>
          <h2 className="text-4xl font-bold text-[#003366] mb-4">Parceiros e Convênios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Contamos com o apoio e a parceria de hospitais e clínicas reconhecidos pela excelência em exames e tratamentos cardiovasculares. 
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-[#003366] flex items-center justify-center">
            {/* <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
            </svg> */}
            Hospitais Parceiros
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {hospitals.map((hospital, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center border border-gray-100 hover:border-blue-100"
              >
                <div className="bg-blue-50 p-3 rounded-full mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path  />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-center">{hospital.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-center mb-8 text-[#003366] flex items-center justify-center">
            {/* <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
            </svg> */}
            Convênios Aceitos
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {insurances.map((insurance, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center border border-gray-100 hover:border-blue-100"
              >
                <div className="bg-blue-50 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d={insurance.logo} />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm font-medium">{insurance.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-white border border-[#003366] text-[#003366] hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition duration-300 inline-flex items-center shadow-sm hover:shadow-md">
          Ver Unidades de Atendimento
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}