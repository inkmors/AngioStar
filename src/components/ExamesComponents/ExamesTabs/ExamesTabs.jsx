import { useState } from "react";
import { FaHeartbeat, FaHeart, FaClinicMedical, FaChevronRight } from "react-icons/fa";
import { GiStethoscope, GiHealthNormal, GiMedicalPack } from "react-icons/gi";

export default function ExamesDisplay() {
  const [activeCategory, setActiveCategory] = useState('vascular');

  // Imagens placeholder - substitua por suas imagens reais
  const placeholderImages = {
    vascular: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    cardiologica: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    procedimentos: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  };

  const categories = [
    {
      id: 'vascular',
      title: 'Saúde Vascular',
      icon: <FaHeartbeat className="text-2xl" />,
      exams: [
        {
          name: "Doença Arterial Periférica",
          description: "Avaliação e tratamento minimamente invasivo da circulação comprometida nos membros.",
          icon: <GiHealthNormal className="text-blue-600 text-2xl" />
        },
        {
          name: "Aneurismas de Aorta",
          description: "Diagnóstico preciso e reparo endovascular de dilatações arteriais perigosas.",
          icon: <GiHealthNormal className="text-blue-600 text-2xl" />
        },
        {
          name: "Síndrome de May-Thurner",
          description: "Tratamento especializado para compressão venosa ilíaca com técnicas modernas.",
          icon: <GiHealthNormal className="text-blue-600 text-2xl" />
        },
        {
          name: "Embolização de Varizes Pélvicas",
          description: "Procedimento minimamente invasivo para alívio de sintomas pélvicos crônicos.",
          icon: <GiHealthNormal className="text-blue-600 text-2xl" />
        },
        {
          name: "Tratamento Endovascular de Varicocele",
          description: "Solução avançada para infertilidade masculina e dor escrotal.",
          icon: <GiHealthNormal className="text-blue-600 text-2xl" />
        }
      ]
    },
    {
      id: 'cardiologica',
      title: 'Saúde Cardiológica',
      icon: <FaHeart className="text-2xl" />,
      exams: [
        {
          name: "Infarto do Miocárdio",
          description: "Atendimento emergencial com angioplastia primária para desobstrução arterial.",
          icon: <GiStethoscope className="text-red-500 text-2xl" />
        },
        {
          name: "Angina",
          description: "Diagnóstico diferencial e tratamento personalizado da dor torácica.",
          icon: <GiStethoscope className="text-red-500 text-2xl" />
        },
        {
          name: "Doença Arterial Coronariana",
          description: "Avaliação completa e revascularização com stents farmacológicos.",
          icon: <GiStethoscope className="text-red-500 text-2xl" />
        },
        {
          name: "Doenças Valvulares",
          description: "Terapias percutâneas avançadas para reparo valvar sem cirurgia aberta.",
          icon: <GiStethoscope className="text-red-500 text-2xl" />
        }
      ]
    },
    {
      id: 'procedimentos',
      title: 'Exames e Procedimentos',
      icon: <FaClinicMedical className="text-2xl" />,
      exams: [
        {
          name: "Cateterismo Cardíaco",
          description: "Padrão-ouro para diagnóstico de obstruções coronarianas.",
          icon: <GiMedicalPack className="text-green-600 text-2xl" />
        },
        {
          name: "Angioplastia coronária com Stent",
          description: "Desobstrução arterial com implante de stent para restabelecer fluxo sanguíneo.",
          icon: <GiMedicalPack className="text-green-600 text-2xl" />
        },
        {
          name: "Angiografia de membros inferiores",
          description: "Mapeamento preciso da circulação arterial periférica.",
          icon: <GiMedicalPack className="text-green-600 text-2xl" />
        },
        {
          name: "Angiotrafia cerebral",
          description: "Avaliação detalhada da vascularização encefálica.",
          icon: <GiMedicalPack className="text-green-600 text-2xl" />
        },
        {
          name: "Embolização (miomas, varizes pélvicas)",
          description: "Técnica minimamente invasiva para tratamento de diversas condições.",
          icon: <GiMedicalPack className="text-green-600 text-2xl" />
        },
        {
          name: "TAVI",
          description: "Substituição valvar aórtica por cateter para pacientes de alto risco.",
          icon: <GiMedicalPack className="text-green-600 text-2xl" />
        },
        {
          name: "Mitraclip",
          description: "Reparo percutâneo da válvula mitral sem necessidade de cirurgia convencional.",
          icon: <GiMedicalPack className="text-green-600 text-2xl" />
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
            }`}
          >
            <span className="text-xl">{category.icon}</span>
            <span className="font-medium">{category.title}</span>
          </button>
        ))}
      </div>

      {/* Category Banner */}
      <div className="relative rounded-xl overflow-hidden mb-12 h-64">
        <img 
          src={placeholderImages[activeCategory]} 
          alt={categories.find(cat => cat.id === activeCategory)?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center pl-12">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">
              {categories.find(cat => cat.id === activeCategory)?.title}
            </h3>
            <p className="text-blue-200 max-w-lg">
              Tecnologia avançada e profissionais especializados para os melhores resultados
            </p>
          </div>
        </div>
      </div>

      {/* Exames Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.find(cat => cat.id === activeCategory)?.exams.map((exam, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    {exam.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{exam.name}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{exam.description}</p>
                <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm group">
                  Mais detalhes
                  <FaChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}