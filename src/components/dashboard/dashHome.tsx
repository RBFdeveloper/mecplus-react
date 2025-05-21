import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ManutencaoRecord {
  id: number;
  nome: string;
  modelo: string;
  servico: string;
  status: string;
}

const DashHome: React.FC = () => {
  const navigate = useNavigate();
  const [manutencaoRecords, setManutencaoRecords] = useState<ManutencaoRecord[]>([]);

  useEffect(() => {
    const records = JSON.parse(localStorage.getItem('manutencaoRecords') || '[]');
    setManutencaoRecords(records);
  }, []);

  const getStatusDisplay = (status: string) => {
    const statusMap: { [key: string]: string } = {
      'naoiniciado': 'Não iniciado',
      'em andamento': 'Em andamento',
      'pendente': 'Pendente',
      'concluido': 'Concluído',
      'nao concluido': 'Não Concluído',
      'parado': 'Parado'
    };
    return statusMap[status] || status;
  };

  const stats = [
    { 
      title: 'Ordens de Serviço',
      value: manutencaoRecords.length.toString()
    },
    { 
      title: 'Clientes Ativos',
      value: new Set(manutencaoRecords.map(r => r.nome)).size.toString()
    },
    { 
      title: 'Veículos Atendidos',
      value: new Set(manutencaoRecords.map(r => r.modelo)).size.toString()
    },
    { 
      title: 'Faturamento (Mensal)',
      value: 'R$ 75.000'
    }
  ];

  const handleRowClick = (id: number) => {
    navigate('/dashboard/checklist', { state: { manutencaoId: id } });
  };

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Dashboard</h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <h3 className="text-gray-600 text-sm md:text-base font-medium">{stat.title}</h3>
            <p className="text-xl md:text-2xl font-bold text-gray-800 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Últimas Manutenções</h2>
        <div className="overflow-x-auto -mx-4 md:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-3 px-4 md:px-6 font-semibold text-gray-600 text-sm md:text-base">Cliente</th>
                  <th className="pb-3 px-4 md:px-6 font-semibold text-gray-600 text-sm md:text-base">Veículo</th>
                  <th className="pb-3 px-4 md:px-6 font-semibold text-gray-600 text-sm md:text-base">Serviço</th>
                  <th className="pb-3 px-4 md:px-6 font-semibold text-gray-600 text-sm md:text-base">Status</th>
                </tr>
              </thead>
              <tbody>
                {manutencaoRecords.length > 0 ? (
                  manutencaoRecords.map((record) => (
                    <tr
                      key={record.id}
                      onClick={() => handleRowClick(record.id)}
                      className="border-b last:border-b-0 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <td className="py-3 px-4 md:px-6 text-sm md:text-base">{record.nome}</td>
                      <td className="py-3 px-4 md:px-6 text-sm md:text-base">{record.modelo}</td>
                      <td className="py-3 px-4 md:px-6 text-sm md:text-base">{record.servico}</td>
                      <td className="py-3 px-4 md:px-6 text-sm md:text-base">{getStatusDisplay(record.status)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-3 px-4 md:px-6 text-center text-gray-500 text-sm md:text-base">
                      Nenhum serviço em andamento
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHome;