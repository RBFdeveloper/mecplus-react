import React from 'react';
import { CircleOff, Car, Check, AirVent, Wrench, Lightbulb, Disc, Zap } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'motor':
        return <Car className="h-12 w-12 text-blue-600" />;
      case 'inspecao':
        return <Check className="h-12 w-12 text-blue-600" />;
      case 'freios':
        return <CircleOff className="h-12 w-12 text-blue-600" />;
      case 'ar-condicionado':
        return <AirVent className="h-12 w-12 text-blue-600" />;
      case 'eletrica':
        return <Zap className="h-12 w-12 text-blue-600" />;
      case 'manutencao':
        return <Wrench className="h-12 w-12 text-blue-600" />;
      case 'iluminacao':
        return <Lightbulb className="h-12 w-12 text-blue-600" />;
      case 'pneus':
        return <Disc className="h-12 w-12 text-blue-600" />;
      // default:
      //   return <Wrench className="h-12 w-12 text-blue-600" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="mb-4">{getIcon()}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;