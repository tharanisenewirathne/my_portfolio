import React from 'react';
import { Bug } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="p-2 bg-[#3498DB] rounded-lg">
              <Bug className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-white">Tharani Senevirathna</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300 text-sm">
              © 2025 Tharani Senevirathna. QA Engineer Portfolio.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;