import React from 'react';
import { FaHeart, FaCode } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 border-t border-yellow-500/20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Simple Brand */}
        <div className="mb-6">
          <h3 className="text-2xl font-black text-yellow-500 tracking-wider mb-2">
            Farel Maryam Laila Hajiri
          </h3>
          <p className="text-gray-400 text-sm">
            Web Developer & Competition Enthusiast
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            &copy; {currentYear} Crafted with 
            <FaHeart className="text-red-500" /> 
            using <span className="text-yellow-500">React & Tailwind</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;