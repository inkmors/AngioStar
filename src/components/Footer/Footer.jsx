export default function Footer() {
    const quickLinks = [
      { name: "Quem Somos", href: "#about" },
      { name: "Especialidades", href: "#specialties" },
      { name: "Nossos Médicos", href: "#doctors" },
      { name: "Agendamento", href: "#appointment" },
      { name: "Convênios", href: "#" },
      { name: "Hospitais", href: "#" }
    ]
  
    const contact = [
      { 
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        ),
        text: "(31) 9999-9999" 
      },
      { 
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        text: "contato@angiostar.com.br" 
      },
      { 
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        text: "Av. do Contorno, 4747 - Santo Agostinho, Belo Horizonte - MG" 
      }
    ]
  
    const socialMedia = [
      { name: "Facebook", icon: "facebook", href: "#" },
      { name: "Instagram", icon: "instagram", href: "#" },
      { name: "LinkedIn", icon: "linkedin", href: "#" },
      { name: "YouTube", icon: "youtube", href: "#" }
    ]
  
    return (
      <footer className="bg-blue-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo e Sobre */}
            <div>
              <div className="flex items-center mb-4">
              <img src="/assets/AngioStar-Logo.png" className="h-10 mr-4" alt="Logo da AngioStar" />
                <h3 className="text-xl font-bold">AngioStar</h3>
              </div>
              <p className="text-blue-200 mb-4">
                Especializada em exames e procedimentos de alta precisão na área vascular e cardiológica.
              </p>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    className="bg-blue-800 hover:bg-blue-700 w-8 h-8 rounded-full flex items-center justify-center transition"
                    aria-label={social.name}
                  >
                    <span className="sr-only">{social.name}</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
  
            {/* Links Rápidos */}
            <div className="md:ml-15">
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-blue-200 hover:text-white transition">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Contato */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-3">
                {contact.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-0.5 text-blue-300">{item.icon}</span>
                    <span className="text-blue-200">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Horário */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Horário de Atendimento</h4>
              <div className="bg-blue-800 p-4 rounded-lg">
                <p className="mb-2"><strong>Segunda a Sexta:</strong> 7h às 19h</p>
                <p className="mb-2"><strong>Sábado:</strong> 8h às 12h</p>
                <p><strong>Plantão 24h:</strong> Emergências</p>
              </div>
            </div>
          </div>
  
          <div className="border-t border-blue-800 pt-6">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <p className="text-blue-300 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} AngioStar. Todos os direitos reservados.
              </p>
              {/* <div className="flex space-x-6">
                <a href="#" className="text-blue-300 hover:text-white text-sm">Termos de Uso</a>
                <a href="#" className="text-blue-300 hover:text-white text-sm">Política de Privacidade</a>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    )
  }