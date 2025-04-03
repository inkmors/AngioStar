import { FaClinicMedical, FaHeartbeat, FaRegCalendarAlt, FaUserMd } from "react-icons/fa";

export default function MiomaPortal() {
  return (
    <section id="mioma-portal" className="py-16 md:py-24 bg-gradient-to-b from-[#FFFFFF] to-[#FDF2F8] relative overflow-hidden">
      <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#FBCFE8] rounded-full opacity-20 mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#E9D5FF] rounded-full opacity-20 mix-blend-multiply filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center bg-[#FFFFFFCC] rounded-full px-4 py-2 mb-6 shadow-sm">
              <FaClinicMedical className="text-[#DB2777] mr-2" />
              <span className="font-medium text-[#9D174D]">Saúde Feminina Especializada</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6 leading-tight">
              Portal do Mioma: <br /><span className="text-[#DB2777]">Inovação</span> no Tratamento!
            </h2>
            
            <p className="text-lg text-[#4B5563] mb-8 leading-relaxed">
            A AngioStar também é responsável pelo Portal Mioma, um projeto inovador voltado para a saúde da mulher, com foco na embolização de miomas, um tratamento minimamente invasivo para preservar o útero e evitar cirurgias desnecessárias. 
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: <FaHeartbeat className="text-[#DB2777] text-2xl" />, text: "Procedimento minimamente invasivo" },
                { icon: <FaUserMd className="text-[#DB2777] text-2xl" />, text: "Equipe especializada em saúde feminina" },
                { icon: <FaRegCalendarAlt className="text-[#DB2777] text-2xl" />, text: "Alta no mesmo dia" },
                { icon: <FaClinicMedical className="text-[#DB2777] text-2xl" />, text: "Tecnologia de ponta" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-[#FDF2F8] p-2 rounded-full">
                    {item.icon}
                  </div>
                  <p className="text-[#374151] flex-1">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="hidden flex-col sm:flex-row gap-4 lg:flex mt-8">
              <button className="bg-[#DB2777] hover:bg-[#BE185D] text-[#FFFFFF] font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center" type="button" onClick={() => window.open("https://portaldomioma.com.br/", "_blank")}>
                Acessar Portal Completo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-[#FBCFE8] to-[#E9D5FF] flex items-center justify-center">
                <div className="text-center">
                  <img src="assets/portalMioma.png" className="w-full h-full object-cover" alt="Portal do Mioma" />
                </div>
              </div>
              <div className="absolute inset-0 border-8 border-[#FFFFFF]/20 rounded-2xl pointer-events-none"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8 mb-8">
              <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-md text-center flex flex-col items-center border-t-4 border-[#EC4899]">
                <div className="text-2xl font-bold text-[#DB2777]">+500</div>
                <div className="text-xs font-[500] text-[10px] md:text-[12px] text-[#6B7280]">Procedimentos</div>
              </div>
              <div className="bg-[#FFFFFF] flex flex-col items-center p-4 rounded-lg shadow-md text-center border-t-4 border-[#F87171]">
                <div className="text-2xl font-bold text-[#F87171]">98%</div>
                <div className="text-xs font-[500] text-[10px] md:text-[12px] text-[#6B7280]">Eficácia</div>
              </div>
              <div className="bg-[#FFFFFF] flex flex-col items-center p-4 rounded-lg shadow-md text-center border-t-4 border-[#FCA5A5]">
                <div className="text-2xl font-bold text-[#FCA5A5]">24h</div>
                <div className="text-xs font-[500] text-[10px] md:text-[12px] text-[#6B7280]">Recuperação</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:hidden">
              <button className="bg-[#DB2777] hover:bg-[#BE185D] text-[#FFFFFF] font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center" type="button" onClick={() => window.open("https://portaldomioma.com.br/", "_blank")}>
                Acessar Portal Completo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}