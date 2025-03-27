import { useState, useEffect } from 'react';

export default function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito de scroll para header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm shadow-md'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/assets/AngioStar-Logo.png" 
              className="h-10 md:h-12 mr-3 transition-all duration-300" 
              alt="Logo AngioStar" 
            />
            <h1 className="text-xl md:text-2xl font-bold text-[#003366]">AngioStar</h1>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
            <a 
              href="#about" 
              className="px-3 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-[#005B96] transition-colors relative group"
            >
              Nossos Exames
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#005B96] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#specialties" 
              className="px-3 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-[#005B96] transition-colors relative group"
            >
              Nossos Médicos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#005B96] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#doctors" 
              className="px-3 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-[#005B96] transition-colors relative group"
            >
              Portal do Mioma
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#005B96] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#appointment" 
              className="ml-4 px-4 py-2.5 text-sm lg:text-base font-bold text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-lg shadow-md transition-all transform hover:scale-[1.03]"
            >
              Agendar Exame
            </a>
          </nav>

          {/* Botão Mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#005B96] hover:bg-blue-50 transition-colors focus:outline-none"
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <svg 
                className={`h-6 w-6 transform transition-transform duration-300 ${isMenuOpen ? 'rotate-180 opacity-70' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div 
        className={`md:hidden bg-white shadow-xl transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3 border-t border-gray-100">
          <a 
            href="#about" 
            onClick={toggleMenu}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-[#005B96] hover:bg-blue-50 transition-colors"
          >
            Nossos Exames
          </a>
          <a 
            href="#specialties" 
            onClick={toggleMenu}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-[#005B96] hover:bg-blue-50 transition-colors"
          >
            Médicos AngioStar
          </a>
          <a 
            href="#doctors" 
            onClick={toggleMenu}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-[#005B96] hover:bg-blue-50 transition-colors"
          >
            Portal do Mioma
          </a>
          <a 
            href="#appointment" 
            onClick={toggleMenu}
            className="block px-4 py-3 mt-2 rounded-lg text-base font-bold text-center text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-md transition-all"
          >
            Agendar Exame
          </a>
        </div>
      </div>
    </header>
  );
}