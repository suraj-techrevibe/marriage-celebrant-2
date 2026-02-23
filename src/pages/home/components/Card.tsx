import { ShieldCheck, Users, Lightbulb } from "lucide-react";

export default function CardGrid() {
  const cards = [
    { title: "Support Coordination", description: "We help coordinate support.", icon: ShieldCheck },
    { title: "Users", description: "We help users thrive.", icon: Users },
    { title: "Innovation", description: "Creative solutions every day.", icon: Lightbulb },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      {cards.map((c, i) => (
        <div key={i} className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-lg text-center">
          <c.icon size={40} className="text-red-600 mb-4" />
          <h3 className="text-xl font-bold text-red-600 mb-2">{c.title}</h3>
          <p className="text-gray-700">{c.description}</p>
        </div>
      ))}
    </div>
  );
}