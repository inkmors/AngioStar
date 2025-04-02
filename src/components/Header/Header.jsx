import { useState } from 'react';
import FunilStepper from "../FunilStepper/FunilStepper";

export default function ModernHeader() {
  const [showFunnel, setShowFunnel] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openFunnel = () => {
    setShowFunnel(true);
    setIsMenuOpen(false); 
  };

  const NavItem = ({ href, children, target, onClick }) => (
    <a 
      href={href} 
      target={target}
      onClick={onClick}
      className="flex flex-col px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 relative group"
      style={{ color: '#003366' }}
    >
      {children}
      <span 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#005B96] transition-all duration-300 w-0 group-hover:w-[calc(100%-1.5rem)]"
      ></span>
    </a>
  );

  return (
    <>
      <header 
        className="sticky top-0 w-full transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-md flex flex-col"
        style={{
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 30
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 flex flex-col">
          <div className="flex justify-between items-center h-16 md:h-20">
              <a className="flex items-center" href="/" >
                <img 
                  src="/assets/AngioStar-Logo.png" 
                  className="h-10 md:h-12 mr-3 transition-all duration-300" 
                  alt="Logo AngioStar" 
                />
                <h1 className="text-xl md:text-2xl font-bold" style={{ color: '#003366' }}>AngioStar</h1>
              </a>

            <nav className="hidden md:flex items-center">
              <div className="flex space-x-1 lg:space-x-6">
                <NavItem href="/exams">
                  Nossos Exames
                </NavItem>
                <NavItem href="/team">
                  Nossos Médicos
                </NavItem>
                <NavItem href="https://portaldomioma.com.br/" target="_blank">
                  Portal do Mioma
                </NavItem>
                <button
                  onClick={openFunnel}
                  className="cursor-pointer flex items-center justify-center ml-4 px-4 py-2.5 text-sm lg:text-base font-bold text-white rounded-lg shadow-md transition-all transform hover:scale-[1.03]"
                  style={{ 
                    background: 'linear-gradient(to right, #ef4444, #dc2626)',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  Agendar Exame
                </button>
              </div>
            </nav>

            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu}
                className="flex items-center justify-center p-2 rounded-md transition-colors focus:outline-none hover:bg-gray-100"
                style={{ 
                  color: '#4a5568',
                  backgroundColor: 'transparent'
                }}
                aria-label="Menu"
                aria-expanded={isMenuOpen}
              >
                <svg 
                  className={`h-6 w-6 transform transition-transform duration-200 ${isMenuOpen ? 'rotate-180 opacity-70' : ''}`}
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

          <div 
            className={`flex flex-col md:hidden bg-white shadow-xl ${isMenuOpen ? 'flex opacity-100' : 'hidden opacity-0'}`}
            style={{
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              transition: 'opacity 0.2s ease-in-out',
              borderTop: '1px solid #f7fafc'
            }}
          >
            <div className="flex flex-col px-4 pt-2 pb-6 space-y-3">
              <a 
                href="/exams" 
                onClick={toggleMenu}
                className="flex px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-50 relative group"
                style={{ 
                  color: '#4a5568',
                  transition: 'background-color 0.2s ease'
                }}
              >
                Nossos Exames
                <span className="absolute bottom-2 left-4 h-0.5 bg-[#005B96] transition-all duration-300 w-0 group-hover:w-[calc(100%-2rem)]"></span>
              </a>
              <a 
                href="/team" 
                onClick={toggleMenu}
                className="flex px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-50 relative group"
                style={{ 
                  color: '#4a5568',
                  transition: 'background-color 0.2s ease'
                }}
              >
                Médicos AngioStar
                <span className="absolute bottom-2 left-4 h-0.5 bg-[#005B96] transition-all duration-300 w-0 group-hover:w-[calc(100%-2rem)]"></span>
              </a>
              <a 
                href="https://portaldomioma.com.br/" target="_blank"
                onClick={toggleMenu}
                className="flex px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-50 relative group"
                style={{ 
                  color: '#4a5568',
                  transition: 'background-color 0.2s ease'
                }}
              >
                Portal do Mioma
                <span className="absolute bottom-2 left-4 h-0.5 bg-[#005B96] transition-all duration-300 w-0 group-hover:w-[calc(100%-2rem)]"></span>
              </a>
              <button
                onClick={openFunnel}
                className="cursor-pointer flex items-center justify-center px-4 py-3 mt-2 rounded-lg text-base font-bold text-white shadow-md hover:scale-[1.03]"
                style={{ 
                  background: 'linear-gradient(to right, #ef4444, #dc2626)',
                  transition: 'transform 0.2s ease'
                }}
              >
                Agendar Exame
              </button>
            </div>
          </div>
        </div>
      </header>

      {showFunnel && <FunilStepper onClose={() => setShowFunnel(false)} />}
    </>
  );
}