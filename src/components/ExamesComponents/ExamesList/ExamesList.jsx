export default function ExamesList({ items }) {
    return (
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="text-green-500 mr-3">✓</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    );
  }