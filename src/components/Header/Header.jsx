export default function Header() {
    return (
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/assets/AngioStar-Logo.png" className="h-10 mr-4" alt="Logo da AngioStar" />

    
            <h1 className="text-2xl font-bold text-blue-800">AngioStar</h1>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="text-gray-700 hover:text-blue-600">Quem Somos</a>
            <a href="#specialties" className="text-gray-700 hover:text-blue-600">Especialidades</a>
            <a href="#doctors" className="text-gray-700 hover:text-blue-600">Nossos Médicos</a>
            <a href="#appointment" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-5 rounded-[10px] shadow-lg transition duration-300">Agendamento</a>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
    )
  }