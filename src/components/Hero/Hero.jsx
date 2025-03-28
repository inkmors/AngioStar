export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden h-screen max-h-[900px] lg:max-h-[800px]">
      <div className="absolute inset-0 z-0">
        <img 
          loading="lazy"
          src="assets/young-handsome-physician-medical-robe-with-stethoscope.jpg" 
          alt="Médico cardiologista"
          className="w-full h-full object-cover object-center opacity-50 mix-blend-multiply lg:opacity-100"
        />
        <div className="absolute inset-0 bg-blue-900/40 bg-gradient-to-r from-blue-900/90 to-blue-700/10 mix-blend-multiply"></div>
      </div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl py-20">
              
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-4 mt-5">
            <span className="font-medium text-[11px] md:text-sm ">Referência em Cardiologia Intervencionista
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Tratamento Cardiovascular <br/>Preciso e Humanizado
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Tecnologia de ponta e especialistas renomados para diagnósticos precisos e tratamentos minimamente invasivos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer md:py-4 md:px-8">
              Agendar Meu Exame
            </button>
            <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-2 px-5 rounded-full backdrop-blur-sm transition-all duration-300 cursor-pointer md:py-4 md:px-8">
              Conheça Nossos Especialistas
            </button>
          </div>
          
          <div className="mb-12 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-bold">4.9/ 5 (200+ avaliações)</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold">+5.000 procedimentos realizados</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#FFFFFF" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#FFFFFF" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#FFFFFF"></path>
        </svg>
      </div>
    </section>
  )
}