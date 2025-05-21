import React from 'react';
import Card from './Card';
import SectionTitle from './SectionTitle';

const ManutencaoTipo: React.FC = () => {
  const manutencaoTipo = [
    {
      title: 'Manutenção Preditiva',
      description: 'Monitoramento constante para prever falhas antes que ocorram.',
      imgUrl: 'https://i.postimg.cc/HkdSyYCW/preditiva.jpg',
      imgAlt: 'Manutenção Preditiva'
    },
    {
      title: 'Manutenção Preventiva',
      description: 'Inspeções regulares para reduzir o risco de falhas inesperadas.',
      imgUrl: 'https://i.postimg.cc/Kvr6VsGz/preventiva.jpg',
      imgAlt: 'Manutenção Preventiva'
    },
    {
      title: 'Manutenção Corretiva',
      description: 'Reparo imediato quando ocorre uma falha no equipamento.',
      imgUrl: 'https://i.postimg.cc/x1VdGZs1/corretiva.jpg',
      imgAlt: 'Manutenção Corretiva'
    }
  ];

  return (
    <section id="manutencao" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle title="Tipos de Manutenção" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {manutencaoTipo.map((type, index) => (
            <Card
              key={index}
              title={type.title}
              description={type.description}
              imgUrl={type.imgUrl}
              imgAlt={type.imgAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManutencaoTipo