export default function MiomaPortal() {
    return (
      <section className="py-16 bg-gradient-to-r from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">❤️ Portal Mioma</h2>
              <p className="text-gray-700 mb-6">
                A AngioStar também é responsável pelo Portal Mioma, um projeto inovador voltado para a saúde da mulher, com foco na embolização de miomas, um tratamento minimamente invasivo para preservar o útero e evitar cirurgias desnecessárias.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-md inline-block mb-6">
                <h4 className="font-semibold text-pink-700 mb-2">Benefícios da Embolização:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Procedimento rápido (1-2 horas)</li>
                  <li>Sem cortes ou cicatrizes</li>
                  <li>Alta no mesmo dia</li>
                  <li>Preserva o útero</li>
                </ul>
              </div>
              <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 inline-flex items-center">
                Acessar Portal Mioma
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-2 rounded-xl shadow-lg">
                <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Vídeo explicativo sobre embolização de miomas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }