import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import DashHome from '../components/dashboard/dashHome';
import Servicos from '../components/dashboard/Servicos';
import Checklist from '../components/dashboard/Checklist';
import Manutencao from '../components/dashboard/Manutencao';

function Dashboard() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(true);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar 
        isOpen={menuOpen} 
        onToggle={() => setMenuOpen(!menuOpen)}
        onLogout={handleLogout}
      />
      
      <main className={`flex-1 p-6 transition-all duration-300 ${menuOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        <Routes>
          <Route path="/" element={<DashHome />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/manutencao" element={<Manutencao />} />
          <Route path="/checklist" element={<Checklist />} />
        </Routes>
      </main>
    </div>
  );
}

export default Dashboard;