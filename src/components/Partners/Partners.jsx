export default function Partners() {
    const hospitals = [
      "Hospital Evangélico",
      "Hospital Lifecenter",
      "Hospital Materdei",
      "Hospital Santa Rita",
      "Hospital Semper"
    ]
  
    const insurances = [
      "IPSEMG",
      "Unimed",
      "Hapvida",
      "MedSênior",
      "Correios",
      "Saúde Bradesco",
      "Sul América",
      "GEAP"
    ]
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">🏥 Nossos Parceiros</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>
  
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-6">Hospitais Parceiros</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {hospitals.map((hospital, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center w-40 h-20">
                  <span className="text-gray-700 font-medium text-center">{hospital}</span>
                </div>
              ))}
            </div>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold text-center mb-6">Convênios Aceitos</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {insurances.map((insurance, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center w-32 h-16">
                  <span className="text-gray-700 text-sm font-medium text-center">{insurance}</span>
                </div>
              ))}
            </div>
          </div>
  
          <div className="text-center mt-12">
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-lg transition duration-300 inline-flex items-center">
              Ver Todas as Unidades
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    )
  }