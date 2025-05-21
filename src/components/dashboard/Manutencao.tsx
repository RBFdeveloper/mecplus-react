import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ManutencaoRecord {
  id: number;
  nome: string;
  modelo: string;
  placa: string;
  servico: string;
  contato: string;
  mecanico: string;
  principalMecanico: string;
  status: string;
  data: string;
}

const Manutencao: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    modelo: '',
    placa: '',
    servico: '',
    contato: '',
    mecanico: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const manutencao: ManutencaoRecord = {
      id: Date.now(),
      ...formData,
      principalMecanico: formData.mecanico,
      status: 'naoiniciado',
      data: new Date().toLocaleDateString()
    };

    const existingRecords = JSON.parse(localStorage.getItem('manutencaoRecords') || '[]');
    const updatedRecords = [manutencao, ...existingRecords];
    localStorage.setItem('manutencaoRecords', JSON.stringify(updatedRecords));

    alert('Manutenção agendada com sucesso!');
    
    setFormData({
      nome: '',
      modelo: '',
      placa: '',
      servico: '',
      contato: '',
      mecanico: ''
    });

    navigate('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 md:px-0">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Agendamento de Manutenção</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-4 md:p-6 space-y-4 md:space-y-6">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            placeholder="Seu nome"
            required
          />
        </div>

        <div>
          <label htmlFor="modelo" className="block text-sm font-medium text-gray-700 mb-1">
            Modelo do Carro
          </label>
          <input
            type="text"
            id="modelo"
            name="modelo"
            value={formData.modelo}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            placeholder="Modelo do carro"
            required
          />
        </div>

        <div>
          <label htmlFor="placa" className="block text-sm font-medium text-gray-700 mb-1">
            Placa
          </label>
          <input
            type="text"
            id="placa"
            name="placa"
            value={formData.placa}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            placeholder="Placa do veículo"
            required
          />
        </div>

        <div>
          <label htmlFor="servico" className="block text-sm font-medium text-gray-700 mb-1">
            Serviço
          </label>
          <input
            type="text"
            id="servico"
            name="servico"
            value={formData.servico}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            placeholder="Tipo de Serviço"
            required
          />
        </div>

        <div>
          <label htmlFor="contato" className="block text-sm font-medium text-gray-700 mb-1">
            Contato
          </label>
          <input
            type="text"
            id="contato"
            name="contato"
            value={formData.contato}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            placeholder="Telefone ou e-mail"
            required
          />
        </div>

        <div>
          <label htmlFor="mecanico" className="block text-sm font-medium text-gray-700 mb-1">
            Escolha o Mecânico
          </label>
          <select
            id="mecanico"
            name="mecanico"
            value={formData.mecanico}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            required
          >
            <option value="">Selecione</option>
            <option value="mecanico1">Fernando Ferreira</option>
            <option value="mecanico2">Ramon Barbosa</option>
            <option value="mecanico3">Lucas Martins</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm md:text-base"
        >
          Agendar Manutenção
        </button>
      </form>
    </div>
  );
};

export default Manutencao;