export default function Testimonials() {
    const testimonials = [
      {
        quote: "O atendimento na AngioStar salvou minha vida. O Dr. Carlos foi extremamente atencioso e o procedimento foi um sucesso!",
        author: "Maria Fernanda",
        role: "Paciente de Embolização",
        rating: 5
      },
      {
        quote: "Equipe altamente qualificada e estrutura moderna. Fiz meu cateterismo com total segurança e conforto.",
        author: "José Roberto",
        role: "Paciente Cardiológico",
        rating: 5
      },
      {
        quote: "Não tenho palavras para agradecer pelo tratamento humanizado que recebi. Recomendo a todos!",
        author: "Ana Clara",
        role: "Paciente Vascular",
        rating: 5
      }
    ]
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">💬 Depoimentos de Pacientes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A confiança dos nossos pacientes é o nosso maior reconhecimento
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="bg-gray-300 w-10 h-10 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 inline-flex items-center">
              Agendar Agora
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    )
  }