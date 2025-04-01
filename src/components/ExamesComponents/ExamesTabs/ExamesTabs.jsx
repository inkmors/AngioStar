import { useState } from "react";

export default function ExamesTabs() {
  const [activeCategory, setActiveCategory] = useState('vascular');

  const categories = [
    {
      id: 'vascular',
      title: 'Saúde Vascular',
      icon: '❤️'
    },
    {
      id: 'cardiologica',
      title: 'Saúde Cardiológica',
      icon: '🫀'
    },
    {
      id: 'procedimentos',
      title: 'Exames e Procedimentos',
      icon: '🏥'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span>{category.icon}</span>
            <span>{category.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}