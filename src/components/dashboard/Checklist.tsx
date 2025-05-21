import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Check, X, Trash2, Edit2, CheckCircle, AlertTriangle, ArrowLeft } from 'lucide-react';

interface ChecklistItem {
  id: string;
  text: string;
  status: 'good' | 'bad' | null;
  comment?: string;
}

interface ManutencaoRecord {
  id: number;
  nome: string;
  modelo: string;
  servico: string;
  status: string;
  mecanico: string;
  principalMecanico: string;
  mecanicosHistorico?: string[];
  checklist?: ChecklistItem[];
}

const Checklist: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const manutencaoId = location.state?.manutencaoId;
  
  const [manutencao, setManutencao] = useState<ManutencaoRecord | null>(null);
  const [items, setItems] = useState<ChecklistItem[]>([]);
  const [newItem, setNewItem] = useState('');
  const [error, setError] = useState('');
  const [editingComment, setEditingComment] = useState<string | null>(null);
  const [tempComment, setTempComment] = useState('');

  const defaultItems = [
    'Freios', 'Motor', 'Faróis', 'Suspensão', 'Pneus',
    'Ar Condicionado', 'Sistema Elétrico', 'Fluidos', 'Filtros', 'Bateria'
  ];

  const statusOptions = [
    { value: 'naoiniciado', label: 'NÃO INICIADO' },
    { value: 'em andamento', label: 'EM ANDAMENTO' },
    { value: 'pendente', label: 'PENDENTE' },
    { value: 'concluido', label: 'CONCLUÍDO' },
    { value: 'nao concluido', label: 'NÃO CONCLUÍDO' },
    { value: 'parado', label: 'PARADO' }
  ];

  const mecanicos = [
    { value: 'mecanico1', label: 'Fernando Ferreira' },
    { value: 'mecanico2', label: 'Ramon Barbosa' },
    { value: 'mecanico3', label: 'Lucas Martins' }
  ];

  useEffect(() => {
    if (manutencaoId) {
      const records = JSON.parse(localStorage.getItem('manutencaoRecords') || '[]');
      const currentManutencao = records.find((r: ManutencaoRecord) => r.id === manutencaoId);
      
      if (currentManutencao) {
        if (!currentManutencao.mecanicosHistorico) {
          currentManutencao.mecanicosHistorico = [currentManutencao.mecanico];
        }
        setManutencao(currentManutencao);
        
        if (!currentManutencao.checklist) {
          const initialItems = defaultItems.map(text => ({
            id: Math.random().toString(36).substr(2, 9),
            text,
            status: null
          }));
          currentManutencao.checklist = initialItems;
          localStorage.setItem('manutencaoRecords', JSON.stringify(records));
          setItems(initialItems);
        } else {
          setItems(currentManutencao.checklist);
        }
      }
    } else {
      const initialItems = defaultItems.map(text => ({
        id: Math.random().toString(36).substr(2, 9),
        text,
        status: null
      }));
      setItems(initialItems);
    }
  }, [manutencaoId]);

  const updateManutencaoRecord = (updates: Partial<ManutencaoRecord>) => {
    if (manutencaoId) {
      const records = JSON.parse(localStorage.getItem('manutencaoRecords') || '[]');
      const recordIndex = records.findIndex((r: ManutencaoRecord) => r.id === manutencaoId);
      
      if (recordIndex !== -1) {
        records[recordIndex] = { ...records[recordIndex], ...updates };
        localStorage.setItem('manutencaoRecords', JSON.stringify(records));
        setManutencao(records[recordIndex]);
      }
    }
  };

  const handleStatusChange = (newStatus: string) => {
    updateManutencaoRecord({ status: newStatus });
  };

  const handleMecanicoChange = (newMecanico: string) => {
    if (manutencao && newMecanico !== manutencao.mecanico) {
      const updatedHistorico = [...(manutencao.mecanicosHistorico || []), newMecanico];
      updateManutencaoRecord({
        mecanico: newMecanico,
        mecanicosHistorico: updatedHistorico
      });
    }
  };

  const getMecanicoName = (value: string) => {
    return mecanicos.find(m => m.value === value)?.label || value;
  };

  const saveItems = (newItems: ChecklistItem[]) => {
    setItems(newItems);
    
    if (manutencaoId) {
      const records = JSON.parse(localStorage.getItem('manutencaoRecords') || '[]');
      const recordIndex = records.findIndex((r: ManutencaoRecord) => r.id === manutencaoId);
      
      if (recordIndex !== -1) {
        records[recordIndex].checklist = newItems;
        localStorage.setItem('manutencaoRecords', JSON.stringify(records));
      }
    }
  };

  const addItem = () => {
    if (!newItem.trim()) {
      setError('Por favor, digite um item para adicionar.');
      return;
    }

    const newItems = [
      ...items,
      {
        id: Math.random().toString(36).substr(2, 9),
        text: newItem.trim(),
        status: null
      }
    ];

    saveItems(newItems);
    setNewItem('');
    setError('');
  };

  const updateStatus = (id: string, status: 'good' | 'bad') => {
    const newItems = items.map(item =>
      item.id === id ? { ...item, status } : item
    );
    saveItems(newItems);
  };

  const saveComment = (id: string) => {
    if (!tempComment.trim()) {
      setError('É necessário descrever o problema');
      return;
    }

    const newItems = items.map(item =>
      item.id === id ? { ...item, comment: tempComment } : item
    );
    saveItems(newItems);
    setEditingComment(null);
    setTempComment('');
    setError('');
  };

  const deleteItem = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este item?')) {
      const newItems = items.filter(item => item.id !== id);
      saveItems(newItems);
    }
  };

  const deleteComment = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este comentário?')) {
      const newItems = items.map(item =>
        item.id === id ? { ...item, comment: undefined } : item
      );
      saveItems(newItems);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate('/dashboard')}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Lista de Verificação
        </h1>
      </div>

      {manutencao && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Informações do Cliente</h2>
              <div className="space-y-2">
                <p><strong>Nome:</strong> {manutencao.nome}</p>
                <p><strong>Veículo:</strong> {manutencao.modelo}</p>
                <p><strong>Serviço:</strong> {manutencao.servico}</p>
                <p><strong>Mecânico Principal:</strong> {getMecanicoName(manutencao.principalMecanico)}</p>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Controle de Serviço</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    value={manutencao.status}
                    onChange={(e) => handleStatusChange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {statusOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mecânico Atual
                  </label>
                  <select
                    value={manutencao.mecanico}
                    onChange={(e) => handleMecanicoChange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {mecanicos.map(mecanico => (
                      <option key={mecanico.value} value={mecanico.value}>
                        {mecanico.label}
                      </option>
                    ))}
                  </select>
                </div>
                {manutencao.mecanicosHistorico && manutencao.mecanicosHistorico.length > 1 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Histórico de Mecânicos
                    </label>
                    <div className="text-sm text-gray-600">
                      {manutencao.mecanicosHistorico.map((mecanicoId, index) => (
                        <div key={index} className="mb-1">
                          {getMecanicoName(mecanicoId)}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addItem()}
              placeholder="Digite um serviço para verificação"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addItem}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Adicionar
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <div className="space-y-3">
          {items.map(item => (
            <div
              key={item.id}
              className={`bg-gray-50 rounded-md p-4 transition-all duration-300 ${
                item.status === 'good' ? 'border-l-4 border-green-500' :
                item.status === 'bad' ? 'border-l-4 border-red-500' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex-1">{item.text}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateStatus(item.id, 'good')}
                    className={`p-2 rounded-full transition-colors ${
                      item.status === 'good' ? 'bg-green-500 text-white' : 'text-gray-400 hover:text-green-500'
                    }`}
                  >
                    <CheckCircle className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => updateStatus(item.id, 'bad')}
                    className={`p-2 rounded-full transition-colors ${
                      item.status === 'bad' ? 'bg-red-500 text-white' : 'text-gray-400 hover:text-red-500'
                    }`}
                  >
                    <AlertTriangle className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {item.status === 'bad' && (
                <div className="mt-3">
                  {editingComment === item.id ? (
                    <div className="flex gap-2">
                      <textarea
                        value={tempComment}
                        onChange={(e) => setTempComment(e.target.value)}
                        placeholder="Descreva o problema..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={() => saveComment(item.id)}
                        className="p-2 text-green-500 hover:text-green-600"
                      >
                        <Check className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => {
                          setEditingComment(null);
                          setTempComment('');
                        }}
                        className="p-2 text-red-500 hover:text-red-600"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    item.comment ? (
                      <div className="flex items-start justify-between bg-white p-3 rounded-md">
                        <p className="text-gray-600">{item.comment}</p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setEditingComment(item.id);
                              setTempComment(item.comment || '');
                            }}
                            className="p-1 text-gray-400 hover:text-blue-500"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteComment(item.id)}
                            className="p-1 text-gray-400 hover:text-red-500"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          setEditingComment(item.id);
                          setTempComment('');
                        }}
                        className="text-blue-600 hover:text-blue-700 text-sm"
                      >
                        Adicionar comentário
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checklist;