import { Calendar, Users, FileText, PiggyBank } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Agendamento Inteligente",
    description: "Sistema automatizado de agendamentos que otimiza sua agenda e reduz faltas",
  },
  {
    icon: Users,
    title: "Gestão de Pacientes",
    description: "Cadastro completo e organizado de todos os seus pacientes em um só lugar",
  },
  {
    icon: FileText,
    title: "Anamnese Digital",
    description: "Coleta e análise de informações dos pacientes de forma estruturada",
  },
  {
    icon: PiggyBank,
    title: "Controle Financeiro",
    description: "Gestão completa de pagamentos, recebimentos e relatórios financeiros",
  },
];

export const Features = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tudo que você precisa em um só lugar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};