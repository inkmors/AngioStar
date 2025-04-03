export default function Error() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#003366] to-[#005B96] flex flex-col justify-center items-center px-4 py-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8 mx-auto w-64 h-64 relative">
                    <div className="absolute inset-0 bg-[#B3DFF0] opacity-20 rounded-full blur-xl"></div>
                    <svg 
                        className="w-full h-full animate-bounce-slow" 
                        viewBox="0 0 200 200" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200Z" 
                            fill="#B3DFF0" 
                            fillOpacity="0.2"
                        />
                        <path 
                            d="M100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180Z" 
                            fill="#B3DFF0" 
                            fillOpacity="0.4"
                        />
                        <path 
                            d="M100 160C133.137 160 160 133.137 160 100C160 66.8629 133.137 40 100 40C66.8629 40 40 66.8629 40 100C40 133.137 66.8629 160 100 160Z" 
                            fill="#B3DFF0"
                        />
                        <path 
                            d="M80 120H120V140H80V120Z" 
                            fill="#003366"
                        />
                        <path 
                            d="M70 70L90 90M90 70L70 90" 
                            stroke="#003366" 
                            strokeWidth="4" 
                            strokeLinecap="round"
                        />
                        <path 
                            d="M130 70L110 90M110 70L130 90" 
                            stroke="#003366" 
                            strokeWidth="4" 
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#B3DFF0]">
                    Oops! Página não encontrada
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Parece que você se perdeu no espaço digital. A página que você está procurando pode ter sido movida ou não existe mais.
                </p>

                <div className="flex justify-center">
                    <a 
                        href="/" 
                        className="px-8 py-3 bg-white text-[#003366] rounded-full font-semibold hover:bg-[#B3DFF0] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Voltar para a página inicial
                    </a>
                </div>

                <div className="mt-12 text-sm text-[#B3DFF0]">
                    <p>Se você acredita que isso é um erro, por favor entre em contato conosco.</p>
                </div>
            </div>
        </div>
    )
}