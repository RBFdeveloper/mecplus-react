import React from 'react';
import Card from './Card';
import SectionTitle from './SectionTitle';

const Portes: React.FC = () => {
  const Portes = [
    {
      title: 'Pequeno Porte',
      description: 'Mini vans e caminhonetes.',
      imgUrl: 'https://i.postimg.cc/mDn9TwT1/pequeno.jpg',
      imgAlt: 'Veículo de Pequeno Porte'
    },
    {
      title: 'Médio e Grande Porte',
      description: 'Caminhões e ônibus de grande capacidade.',
      imgUrl: 'https://i.postimg.cc/hvG25MpJ/medio-grande.jpg',
      imgAlt: 'Caminhões e Ônibus'
    },
    {
      title: 'Motores Estacionários',
      description: 'Geradores e sistemas industriais.',
      imgUrl: 'https://i.postimg.cc/FFjSM02z/motor-estacionario.jpg',
      imgAlt: 'Motores Estacionários'
    }
  ];

  return (
    <section id="porte" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <SectionTitle title="Atendemos Todos os Portes" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Portes.map((type, index) => (
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

export default Portes;