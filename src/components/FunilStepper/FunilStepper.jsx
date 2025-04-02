import { useState, useRef, useEffect } from 'react';
import { FiChevronRight, FiCheck, FiArrowLeft, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const AppointmentFunnel = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedExam, setSelectedExam] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const contentRef = useRef(null);

  const insurancePlans = [
    'IPSEMG', 'Unimed', 'Hapivida', 'MedSênior', 'Correios',
    'Saúde Bradesco', 'Sul América', 'Geap', 'Outros', 
    'Não possuo plano e desejo atendimento particular'
  ];

  const exams = [
    'Cateterismo Cardíaco', 'Angioplastia com Stent', 'Angiografia',
    'Embolização de Miomas', 'Angioplastia periférica', 
    'Valvuloplastia', 'TAVI', 'MitraClip'
  ];

  const locations = {
    'IPSEMG': ['Hospital Semper', 'Hospital Evangélico', 'Hospital Lifecenter'],
    'Unimed': ['Hospital Semper', 'Hospital Santa Rita', 'Hospital Evangélico'],
    'Hapivida': ['Hospital Lifecenter'],
    'MedSênior': ['Hospital Semper', 'Hospital Lifecenter'],
    'Correios': ['Hospital Materdei', 'Hospital Semper'],
    'Saúde Bradesco': ['Hospital Materdei', 'Hospital Lifecenter'],
    'Sul América': ['Hospital Semper', 'Hospital Lifecenter', 'Hospital Materdei', 'Hospital Santa Rita'],
    'Geap': ['Hospital Semper'],
    'Outros': ['Hospital Evangélico', 'Hospital Lifecenter', 'Hospital Materdei', 'Hospital Santa Rita', 'Hospital Semper'],
    'Não possuo plano e desejo atendimento particular': ['Hospital Evangélico', 'Hospital Lifecenter', 'Hospital Materdei', 'Hospital Santa Rita', 'Hospital Semper']
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [step]);

  const handleSubmit = () => {
    const whatsappNumber = "553199745511";
    const message = `Olá, gostaria de agendar um exame:\n\nPlano: ${selectedPlan}\nExame: ${selectedExam}\nLocal: ${selectedLocation}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="text-lg md:text-xl font-semibold text-[#1F2937]">Selecione seu plano de saúde</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
              {insurancePlans.map(plan => (
                <motion.button
                  key={plan}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPlan(plan)}
                  className={`cursor-pointer text-[#1F2937] p-3 md:p-4 border rounded-lg md:rounded-xl text-left transition-all ${
                    selectedPlan === plan 
                      ? 'border-[#2563EB] bg-[#EFF6FF]' 
                      : 'border-[#E5E7EB] hover:border-[#93C5FD]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm md:text-base">{plan}</span>
                    {selectedPlan === plan && <FiCheck className="text-[#2563EB]" />}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="text-lg md:text-xl font-semibold text-[#1F2937]">Qual exame deseja realizar?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
              {exams.map(exam => (
                <motion.button
                  key={exam}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedExam(exam)}
                  className={`cursor-pointer text-[#1F2937] p-3 md:p-4 border rounded-lg md:rounded-xl text-left transition-all ${
                    selectedExam === exam 
                      ? 'border-[#2563EB] bg-[#EFF6FF]' 
                      : 'border-[#E5E7EB] hover:border-[#93C5FD]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm md:text-base">{exam}</span>
                    {selectedExam === exam && <FiCheck className="text-[#2563EB]" />}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="text-lg md:text-xl font-semibold text-[#1F2937]">Onde deseja realizar seu exame?</h3>
            <p className="text-xs md:text-sm text-[#6B7280]">Opções disponíveis para {selectedPlan}</p>
            <div className="grid grid-cols-1 gap-2 md:gap-3">
              {locations[selectedPlan]?.map(location => (
                <motion.button
                  key={location}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedLocation(location)}
                  className={`cursor-pointer text-[#1F2937] p-3 md:p-4 border rounded-lg md:rounded-xl text-left transition-all ${
                    selectedLocation === location 
                      ? 'border-[#2563EB] bg-[#EFF6FF]' 
                      : 'border-[#E5E7EB] hover:border-[#93C5FD]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm md:text-base">{location}</span>
                    {selectedLocation === location && <FiCheck className="text-[#2563EB]" />}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 md:space-y-8"
          >
            <h3 className="text-lg md:text-xl font-semibold text-[#1F2937]">Confirme seu agendamento</h3>
            
            <div className="bg-[#F9FAFB] p-4 md:p-6 rounded-lg border border-[#E5E7EB]">
              <h4 className="text-md font-medium text-[#1F2937] mb-4">Detalhes do agendamento</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between border-b border-[#E5E7EB] pb-3">
                  <span className="text-[#6B7280]">Plano de saúde:</span>
                  <span className="font-medium text-[#1F2937]">{selectedPlan}</span>
                </div>
                
                <div className="flex justify-between border-b border-[#E5E7EB] pb-3">
                  <span className="text-[#6B7280]">Exame:</span>
                  <span className="font-medium text-[#1F2937]">{selectedExam}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Local:</span>
                  <span className="font-medium text-[#1F2937]">{selectedLocation}</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-[#6B7280] text-center">
              Ao confirmar, você será redirecionado para o WhatsApp para completar o agendamento.
            </p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)'
      }}
    >
      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-white rounded-xl shadow-xl w-full max-w-[40rem] flex flex-col"
        style={{
          maxHeight: '70vh',
          border: '1px solid rgba(0,0,0,0.1)'
        }}
      >
        <div className="p-4 rounded-[50rem] sticky top-0 bg-white z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-[#1F2937]">Agendar Exame</h2>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="text-[#6B7280] hover:text-[#374151] p-1 rounded-full hover:bg-[#F3F4F6]"
              aria-label="Fechar"
            >
              <FiX className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="mt-4">
            <div className="flex justify-between relative">
              <div className="absolute top-3 left-0 right-0 h-1 bg-[#E5E7EB] z-0"></div>
              {[1, 2, 3, 4].map((stepNumber) => (
                <motion.div 
                  key={stepNumber} 
                  className="flex flex-col items-center z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-1 ${
                    step >= stepNumber ? 'bg-[#2563EB] text-white' : 'bg-[#E5E7EB] text-[#4B5563]'
                  }`}>
                    {stepNumber}
                  </div>
                  <span className="text-xs text-[#6B7280]">Passo {stepNumber}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div 
          ref={contentRef}
          className="flex-1 overflow-y-auto p-4 pt-2"
        >
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </div>
        
        <div className="p-4 border-t sticky bottom-0 bg-white rounded-b-[40rem]">
          <div className="flex justify-between">
            {step > 1 ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setStep(step - 1)}
                className="cursor-pointer flex items-center px-4 py-2 text-[#000] hover:text-[#1F2937] rounded-lg"
              >
                <FiArrowLeft className="mr-1" />
                <span className="text-sm">Voltar</span>
              </motion.button>
            ) : (
              <div></div>
            )}

            {step < 4 ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setStep(step + 1)}
                disabled={
                  (step === 1 && !selectedPlan) ||
                  (step === 2 && !selectedExam) ||
                  (step === 3 && !selectedLocation)
                }
                className={`cursor-pointer ml-auto flex items-center px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all ${
                  (!selectedPlan && step === 1) || (!selectedExam && step === 2) || (!selectedLocation && step === 3) 
                    ? 'bg-[#E5E7EB] text-[#000] cursor-not-allowed' 
                    : 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]'
                }`}
              >
                <span className="text-sm">{step === 3 ? 'Revisar' : 'Próximo'}</span>
                <FiChevronRight className="ml-1" />
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="cursor-pointer ml-auto px-6 py-3 rounded-lg font-medium bg-[#ef4444] text-white hover:bg-[#dc2626] flex items-center"
              >
                <span className="text-sm">Agendar via WhatsApp</span>
                <FiChevronRight className="ml-1" />
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AppointmentFunnel;