import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Home, Wrench, PenTool as Tool, CheckSquare, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, onLogout }) => {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'Início', icon: <Home className="h-5 w-5" /> },
    { path: '/dashboard/Servicos', label: 'Serviços', icon: <Wrench className="h-5 w-5" /> },
    { path: '/dashboard/Manutencao', label: 'Manutenção', icon: <Tool className="h-5 w-5" /> },
    { path: '/dashboard/Checklist', label: 'Checklist', icon: <CheckSquare className="h-5 w-5" /> },
  ];

  return (
    <>
      <button
        onClick={onToggle}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-900 text-white"
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      <aside
        className={`
          fixed md:sticky top-0 inset-y-0 left-0 z-40
          flex flex-col h-screen
          bg-blue-900 text-white
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0 md:w-20'}
        `}
      >
        <div className={`
          flex items-center justify-between p-4 md:p-6
          ${!isOpen && 'md:justify-center md:p-4'}
        `}>
          <h1 className={`text-2xl font-bold ${!isOpen && 'md:hidden'}`}>Mec+</h1>
          <button
            onClick={onToggle}
            className="hidden md:block text-white hover:text-gray-300 transition-colors"
            aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {isOpen ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    flex items-center px-6 py-3 text-sm font-medium
                    transition-colors duration-200
                    ${!isOpen && 'md:justify-center md:px-0'}
                    ${location.pathname === item.path
                      ? 'bg-blue-800 text-white'
                      : 'text-gray-300 hover:bg-blue-800 hover:text-white'
                    }
                  `}
                >
                  <span className="flex items-center">
                    {item.icon}
                  </span>
                  {(isOpen || !isOpen && window.innerWidth < 768) && (
                    <span className="ml-3">{item.label}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={onLogout}
          className={`
            flex items-center px-6 py-3 text-sm font-medium text-gray-300
            hover:bg-blue-800 hover:text-white transition-colors duration-200
            ${!isOpen && 'md:justify-center md:px-0'}
          `}
        >
          <LogOut className="h-5 w-5" />
          {(isOpen || !isOpen && window.innerWidth < 768) && (
            <span className="ml-3">SAIR</span>
          )}
        </button>
      </aside>
    </>
  );
};

export default Sidebar;