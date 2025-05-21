import React from 'react';
import { Car, Droplet, ClipboardCheck, CircleOff, AirVent, Wrench, Zap, Sun , LifeBuoy  } from 'lucide-react';

const Servicos: React.FC = () => {
  const services = [
    {
      title: 'Motor',
      description: 'Diagnóstico preciso com equipamentos modernos na MecPlus.',
      icon: <Car className="h-8 w-8" />
    },
    {
      title: 'Troca de Óleo',
      description: 'Troca de óleo com vantagens exclusivas.',
      icon: <Droplet className="h-8 w-8" />
    },
    {
      title: 'Inspeção e Checagem',
      description: 'Segurança garantida com manutenção para todos os modelos e marcas.',
      icon: <ClipboardCheck className="h-8 w-8" />
    },
    {
      title: 'Freios',
      description: 'Priorize a segurança veicular com o sistema de freio de qualidade.',
      icon: <CircleOff className="h-8 w-8" />
    },
    {
      title: 'Ar Condicionado',
      description: 'Evite o incômodo de um ar condicionado ineficiente.',
      icon: <AirVent className="h-8 w-8" />
    },
    {
      title: 'Elétrica e Eletrônica',
      description: 'Diagnóstico e reparo de sistemas elétricos e eletrônicos.',
      icon: <Zap  className="h-8 w-8" />
    },
    {
      title: 'Revisão e Manutenção',
      description: 'Manutenção completa para garantir o funcionamento ideal.',
      icon: <Wrench  className="h-8 w-8" />
    },
    {
      title: 'Iluminação',
      description: 'Serviços completos de iluminação veicular.',
      icon: <Sun  className="h-8 w-8" />
    },
    {
      title: 'Pneus',
      description: 'Serviços de alinhamento, balanceamento e troca de pneus.',
      icon: <LifeBuoy  className="h-8 w-8" />
      
    }
  ];

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Serviços</h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 md:p-6 transition-transform hover:scale-105">
            <div className="text-blue-600 mb-4">{service.icon}</div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">{service.description}</p>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm md:text-base">
              Ver Detalhes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicos;