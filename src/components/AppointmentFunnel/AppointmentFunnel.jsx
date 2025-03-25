import { useState } from 'react'

export default function AppointmentFunnel() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    insurance: '',
    exam: '',
    location: '',
    doctor: ''
  })

  const insurancePlans = [
    { name: 'IPSEMG', logo: 'ipsemg-logo.png' },
    { name: 'Unimed', logo: 'unimed-logo.png' },
    { name: 'Hapvida', logo: 'hapvida-logo.png' },
    { name: 'MedSenior', logo: 'medsenior-logo.png' },
    { name: 'Correios', logo: 'correios-logo.png' },
    { name: 'Sul América', logo: 'sulamerica-logo.png' },
    { name: 'GEAP', logo: 'geap-logo.png' },
    { name: 'Outros', logo: 'generic-logo.png' },
    { name: 'Particular', logo: 'particular-logo.png' }
  ]

  const exams = [
    { name: 'Cateterismo Cardíaco', icon: '❤️', category: 'cardio' },
    { name: 'Angioplastia com Stent', icon: '🩺', category: 'cardio' },
    { name: 'Angiografia', icon: '🩸', category: 'vascular' },
    { name: 'Embolização de Miomas', icon: '🌸', category: 'vascular' },
    { name: 'Angioplastia Periférica', icon: '🦵', category: 'vascular' },
    { name: 'TAVI', icon: '❤️', category: 'cardio' },
    { name: 'MitraClip', icon: '🫀', category: 'cardio' }
  ]

  const locations = [
    { name: 'Hospital Lifecenter', address: 'Av. do Contorno, 4747 - Santo Agostinho' },
    { name: 'Hospital Mater Dei', address: 'R. Gonçalves Dias, 2700 - Santo Agostinho' },
    { name: 'Hospital Santa Rita', address: 'Av. do Contorno, 9000 - Savassi' },
    { name: 'Hospital Semper', address: 'R. Ouro Fino, 149 - Vila da Serra' }
  ]

  const doctors = [
    { name: 'Dr. Carlos Eduardo Diniz Couto', specialty: 'Cardiologia Intervencionista', available: true },
    { name: 'Dr. José Walter Mendes Nogueira', specialty: 'Cirurgia Vascular', available: true },
    { name: 'Dr. Thiago Assis', specialty: 'Hemodinâmica', available: false },
    { name: 'Dr. Diogo Thiago', specialty: 'Cardiologia', available: true }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Selecione seu plano de saúde</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {insurancePlans.map((plan, index) => (
                <div 
                  key={index}
                  onClick={() => {
                    setFormData({...formData, insurance: plan.name})
                    nextStep()
                  }}
                  className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${formData.insurance === plan.name ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                >
                  <div className="h-12 mb-2 flex items-center justify-center">
                    <img src={`/logos/${plan.logo}`} alt={plan.name} className="h-full object-contain" />
                  </div>
                  <p className="text-center text-sm">{plan.name}</p>
                </div>
              ))}
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Qual exame deseja realizar?</h3>
            <input
              type="text"
              placeholder="Buscar exame..."
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exams.map((exam, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setFormData({...formData, exam: exam.name})
                    nextStep()
                  }}
                  className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    formData.exam === exam.name 
                      ? exam.category === 'cardio' 
                        ? 'border-red-500 bg-red-50' 
                        : 'border-blue-500 bg-blue-50'
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{exam.icon}</span>
                    <div>
                      <h4 className="font-medium">{exam.name}</h4>
                      <p className="text-sm text-gray-500">
                        {exam.category === 'cardio' ? 'Cardiológico' : 'Vascular'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Onde deseja realizar seu exame?</h3>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-4">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <p>Mapa interativo aqui (Google Maps API)</p>
              </div>
            </div>
            <div className="space-y-3">
              {locations.map((location, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setFormData({...formData, location: location.name})
                    nextStep()
                  }}
                  className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    formData.location === location.name ? 'border-green-500 bg-green-50' : 'border-gray-200'
                  }`}
                >
                  <h4 className="font-medium">{location.name}</h4>
                  <p className="text-sm text-gray-500">{location.address}</p>
                </div>
              ))}
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Preferência de médico (opcional)</h3>
            <div className="flex overflow-x-auto pb-4 space-x-4">
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  onClick={() => setFormData({...formData, doctor: doctor.name})}
                  className={`flex-shrink-0 w-64 p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    formData.doctor === doctor.name ? 'border-purple-500 bg-purple-50' : 'border-gray-200'
                  } ${!doctor.available ? 'opacity-50' : ''}`}
                >
                  <div className="h-16 w-16 bg-gray-300 rounded-full mb-3"></div>
                  <h4 className="font-medium">{doctor.name}</h4>
                  <p className="text-sm text-gray-500">{doctor.specialty}</p>
                  <div className="mt-2">
                    {doctor.available ? (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Disponível
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Indisponível
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <button
                onClick={nextStep}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
              >
                Confirmar Agendamento
              </button>
            </div>
          </div>
        )
      case 5:
        return (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Agendamento Confirmado!</h3>
            <p className="text-gray-600 mb-6">Você será redirecionado para o WhatsApp para finalizar o agendamento</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
              <h4 className="font-medium mb-2">Resumo do Agendamento:</h4>
              <p><span className="text-gray-500">Plano:</span> {formData.insurance}</p>
              <p><span className="text-gray-500">Exame:</span> {formData.exam}</p>
              <p><span className="text-gray-500">Local:</span> {formData.location}</p>
              {formData.doctor && <p><span className="text-gray-500">Médico:</span> {formData.doctor}</p>}
            </div>
            <a
              href="https://wa.me/5531999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Abrir WhatsApp
            </a>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section id="appointment" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Agende Seu Exame Agora</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Atendemos a maioria dos planos de saúde em diversas unidades hospitalares
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Progress Bar */}
          <div className="px-6 pt-6">
            <div className="flex items-center justify-between mb-6">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div key={stepNumber} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step > stepNumber
                        ? 'bg-green-500 text-white'
                        : step === stepNumber
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step > stepNumber ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      stepNumber
                    )}
                  </div>
                  <span
                    className={`text-xs mt-2 ${
                      step >= stepNumber ? 'text-blue-600 font-medium' : 'text-gray-500'
                    }`}
                  >
                    {stepNumber === 1 && 'Plano'}
                    {stepNumber === 2 && 'Exame'}
                    {stepNumber === 3 && 'Local'}
                    {stepNumber === 4 && 'Médico'}
                  </span>
                </div>
              ))}
              <div className="flex-1 h-1 mx-2 bg-gray-200 relative -top-5">
                <div
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${((step - 1) / 3) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="px-6 py-8">
            {renderStep()}

            {step < 5 && step > 1 && (
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  Voltar
                </button>
                {step < 4 && (
                  <button
                    onClick={nextStep}
                    disabled={!formData[Object.keys(formData)[step - 1]]}
                    className={`px-6 py-2 rounded-lg text-white ${
                      !formData[Object.keys(formData)[step - 1]]
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                    } transition`}
                  >
                    Próximo
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}