import React from 'react';
import { Facebook, Instagram , Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">© 2025 Mec+. Todos os direitos reservados.  <br /> <span className="font-semibold text-black-600">Ramon Barbosa</span></p>

          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-white hover:text-blue-300 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-blue-300 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-blue-300 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;