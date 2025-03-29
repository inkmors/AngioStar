import { motion } from "framer-motion";
import { FaHeartbeat, FaUserMd, FaClinicMedical, FaHandsHelping, FaMicroscope, FaChartLine } from "react-icons/fa";

const values = [
  {
    icon: <FaHeartbeat className="w-8 h-8" />,
    title: "Excelência Clínica",
    description: "Protocolos baseados em evidências científicas e tecnologia de ponta para os melhores resultados",
    color: "bg-[#005B96]/10 text-[#005B96]"
  },
  {
    icon: <FaUserMd className="w-8 h-8" />,
    title: "Atendimento Humanizado",
    description: "Cada paciente recebe atenção individualizada e tratamento personalizado",
    color: "bg-[#005B96]/10 text-[#005B96]"
  },
  {
    icon: <FaClinicMedical className="w-8 h-8" />,
    title: "Infraestrutura Completa",
    description: "Equipamentos modernos e ambiente projetado para seu conforto e segurança",
    color: "bg-[#005B96]/10 text-[#005B96]"
  },
  {
    icon: <FaHandsHelping className="w-8 h-8" />,
    title: "Trabalho em Equipe",
    description: "Profissionais multidisciplinares trabalhando de forma integrada para seu tratamento",
    color: "bg-[#005B96]/10 text-[#005B96]"
  },
  {
    icon: <FaMicroscope className="w-8 h-8" />,
    title: "Pesquisa e Inovação",
    description: "Participação em estudos clínicos e adoção precoce de técnicas comprovadas",
    color: "bg-[#005B96]/10 text-[#005B96]"
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Resultados Comprovados",
    description: "Altos índices de sucesso em procedimentos e satisfação dos pacientes",
    color: "bg-[#005B96]/10 text-[#005B96]"
  }
];

export default function TeamValues() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
            Nossos Valores
          </h2>
          <div className="w-20 h-1 bg-[#005B96] mx-auto mb-6"></div>
          <p className="text-lg text-[#005B96] max-w-3xl mx-auto">
            O que nos move e diferencia no cuidado com a saúde cardiovascular
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${value.color} border border-white`}
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="opacity-90">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}