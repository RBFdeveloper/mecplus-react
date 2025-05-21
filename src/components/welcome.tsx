import React from 'react';

const welcome: React.FC = () => {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 px-4"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bem-vindo à Mec+
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          O melhor serviço de manutenção para motores a diesel.
        </p>
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 transform hover:scale-105">
          Agende um Serviço
        </button>
      </div>
    </section>
  );
};

export default welcome;