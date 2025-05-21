import React from 'react';
import ServiceCard from './ServiceCard';
import SectionTitle from './SectionTitle';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Motor',
      description: 'Diagnóstico preciso com equipamentos modernos na Diesel Plus. Troca de óleo com vantagens exclusivas.',
      icon: 'motor'
    },
    {
      title: 'Inspeção e Checagem',
      description: 'Segurança garantida com manutenção para todos os modelos e marcas, peças originais e atendimento personalizado por profissionais treinados.',
      icon: 'inspecao'
    },
    {
      title: 'Freios',
      description: 'Priorize a segurança veicular com o sistema de freio de qualidade na Diesel Plus.',
      icon: 'freios'
    },
    {
      title: 'Ar Condicionado',
      description: 'Evite o incômodo de um ar condicionado ineficiente. Priorize a manutenção regular do sistema.',
      icon: 'ar-condicionado'
    },
    {
      title: 'Elétrica e Eletrônica',
      description: 'Oferecemos diagnóstico e reparo de sistemas elétricos e eletrônicos, incluindo verificações de bateria preventivas. Evite surpresas com bateria descarregada.',
      icon: 'eletrica'
    },
    {
      title: 'Revisão e Manutenção',
      description: 'Para total confiança e segurança no seu veículo, mantenha revisões e manutenções em dia para assegurar sua segurança.',
      icon: 'manutencao'
    },
    {
      title: 'Iluminação',
      description: 'Problemas com as luzes do seu veículo? Conte com a Diesel Plus para verificação e substituição de lâmpadas.',
      icon: 'iluminacao'
    },
    {
      title: 'Pneus',
      description: 'A montagem profissional de pneus na Diesel Plus assegura economia e segurança para o seu veículo. Agende já a substituição dos seus pneus.',
      icon: 'pneus'
    }
  ];

  return (
    <section id="servicos" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle title="Nossos Serviços" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;