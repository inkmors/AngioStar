import { FaClinicMedical, FaHeartbeat, FaRegCalendarAlt, FaUserMd } from "react-icons/fa";

export default function MiomaPortal() {
  return (
    <section id="mioma-portal" className="py-16 md:py-24 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute -left-20 -top-20 w-64 h-64 bg-pink-100 rounded-full opacity-20 mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-100 rounded-full opacity-20 mix-blend-multiply filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Conteúdo textual */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm border border-pink-100">
              <FaClinicMedical className="text-pink-600 mr-2" />
              <span className="font-medium text-pink-700">Saúde Feminina Especializada</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Portal do Mioma: <br /><span className="text-pink-600">Inovação</span> no Tratamento!
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            A AngioStar também é responsável pelo Portal Mioma, um projeto inovador voltado para a saúde da mulher, com foco na embolização de miomas, um tratamento minimamente invasivo para preservar o útero e evitar cirurgias desnecessárias. 
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: <FaHeartbeat className="text-pink-600 text-2xl" />, text: "Procedimento minimamente invasivo" },
                { icon: <FaUserMd className="text-pink-600 text-2xl" />, text: "Equipe especializada em saúde feminina" },
                { icon: <FaRegCalendarAlt className="text-pink-600 text-2xl" />, text: "Alta no mesmo dia" },
                { icon: <FaClinicMedical className="text-pink-600 text-2xl" />, text: "Tecnologia de ponta" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-pink-50 p-2 rounded-full">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 flex-1">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="hidden flex-col sm:flex-row gap-4 lg:flex mt-8">
              <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center" type="button" onClick={() => window.open("https://portaldomioma.com.br/", "_blank")}>
                Acessar Portal Completo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              {/* <button className="border border-pink-600 text-pink-600 hover:bg-pink-50 font-medium py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ver Vídeo Explicativo
              </button> */}
            </div>
          </div>
          
          {/* Área do vídeo */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <img src="assets/portalMioma.png" className="w-full h-full object-cover" alt="" />
                  {/* <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  </div> */}
                  {/* <h3 className="text-xl font-bold text-gray-800 mb-2">Embolização de Miomas</h3>
                  <p className="text-gray-600 mb-4">Assista ao nosso vídeo explicativo sobre o procedimento</p>
                  <span className="inline-block bg-white/90 text-pink-600 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Clique para reproduzir
                  </span> */}
                </div>
              </div>
              <div className="absolute inset-0 border-8 border-white/20 rounded-2xl pointer-events-none"></div>
            </div>
            
            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-4 mt-8 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center border-t-4 border-pink-500">
                <div className="text-2xl font-bold text-pink-600">+500</div>
                <div className="text-xs font-[500] text-[10px] md:text-[12px] text-gray-600">Procedimentos</div>
              </div>
              <div className="bg-white flex flex-col items-center p-4 rounded-lg shadow-md text-center border-t-4 border-red-400">
                <div className="text-2xl font-bold text-red-400">98%</div>
                <div className="text-xs font-[500] text-[10px] md:text-[12px] text-gray-600">Eficácia</div>
              </div>
              <div className="bg-white flex flex-col items-center p-4 rounded-lg shadow-md text-center border-t-4 border-red-300">
                <div className="text-2xl font-bold text-red-300">24h</div>
                <div className="text-xs font-[500] text-[10px] md:text-[12px] text-gray-600">Recuperação</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:hidden">
              <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center" type="button" onClick={() => window.open("https://portaldomioma.com.br/", "_blank")}>
                Acessar Portal Completo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              {/* <button className="border border-pink-600 text-pink-600 hover:bg-pink-50 font-medium py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ver Vídeo Explicativo
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}