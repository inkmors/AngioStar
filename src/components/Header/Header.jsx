import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/assets/AngioStar-Logo.png" className="h-10 mr-4" alt="Logo da AngioStar" />
          <h1 className="text-xl font-bold text-[#003366]">AngioStar</h1>
        </div>
        
        {/* Menu Desktop (hidden em mobile) */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="text-gray-700 hover:text-[#005B96] font-medium">Nossos Exames</a>
          <a href="#specialties" className="text-gray-700 hover:text-[#005B96] font-medium">Médicos Angiostar</a>
          <a href="#doctors" className="text-gray-700 hover:text-[#005B96] font-medium">Portal do Mioma</a>
          <a href="#appointment" className="text-gray-700 font-medium bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-[10px] shadow-lg transition duration-300">Agendar Exame</a>
        </nav>
        
        {/* Botão Hambúrguer (visível apenas em mobile) */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile (aparece quando isMenuOpen é true) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t border-gray-200">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-gray-700 hover:text-[#005B96] font-medium py-2"
              onClick={toggleMenu}
            >
              Nossos Exames
            </a>
            <a 
              href="#specialties" 
              className="text-gray-700 hover:text-[#005B96] font-medium py-2"
              onClick={toggleMenu}
            >
              Médicos AngioStar
            </a>
            <a 
              href="#doctors" 
              className="text-gray-700 hover:text-[#005B96] font-medium py-2"
              onClick={toggleMenu}
            >
              Portal do Mioma
            </a>
            <a 
              href="#appointment" 
              className="text-white bg-red-500 hover:bg-red-600 font-bold py-3 px-5 rounded-[10px] shadow-lg transition duration-300 text-center"
              onClick={toggleMenu}
            >
              Agendar Meu Exame
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}