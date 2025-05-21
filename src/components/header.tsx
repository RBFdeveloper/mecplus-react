import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Mec+</div>

        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        <nav
          className={`${
            isMenuOpen
              ? 'block absolute top-16 left-0 right-0 bg-blue-900 shadow-lg'
              : 'hidden'
          } md:block md:static md:bg-transparent md:shadow-none`}
        >
          <ul className="md:flex md:space-x-6 p-4 md:p-0">
            <li className="py-2 md:py-0">
              <a
                href="#inicio"
                className="block hover:text-blue-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a
                href="#manutencao"
                className="block hover:text-blue-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Manutenção
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a
                href="#porte"
                className="block hover:text-blue-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Porte
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a
                href="#servicos"
                className="block hover:text-blue-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
            </li>
            <li className="py-2 md:py-0">
              <Link
                to="/login"
                className="block hover:text-blue-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                to="/register"
                className="block hover:text-blue-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Cadastro
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;