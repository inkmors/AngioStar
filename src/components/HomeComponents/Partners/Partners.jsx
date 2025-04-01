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
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">Parceiros e Convênios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contamos com o apoio e a parceria de hospitais e clínicas reconhecidos pela excelência em exames e tratamentos cardiovasculares.
          </p>
        </div>

        {/* Hospitais - Versão Flexbox */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-[#003366]">
            Hospitais Parceiros
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {hospitals.map((hospital, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center border border-gray-100 hover:border-blue-100"
                style={{ minWidth: "160px", maxWidth: "200px", flex: "1 1 auto" }}
              >
                <div className="bg-blue-50 p-3 rounded-full mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-center">{hospital.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Convênios - Versão Flexbox */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-center mb-8 text-[#003366]">
            Convênios Aceitos
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {insurances.map((insurance, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center border border-gray-100 hover:border-blue-100"
                style={{ minWidth: "140px", maxWidth: "180px", flex: "1 1 auto" }}
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
      </div>
    </section>
  )
}