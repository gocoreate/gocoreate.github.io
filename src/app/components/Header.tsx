import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from "../../assets/logo.png";


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-sm sticky top-0 z-50" style={{ backgroundColor: '#1C2541' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl" style={{ fontFamily: 'Comfortaa, cursive', color: '#F5F5F5' }}>
              <img src={logo} alt="Logo" className="h-6" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-gray-300 transition-colors" style={{ color: '#F5F5F5', fontSize: '0.9rem', fontWeight: 'bold' }}>
              About
            </a>
            <a href="#services" className="hover:text-gray-300 transition-colors" style={{ color: '#F5F5F5', fontSize: '0.9rem', fontWeight: 'bold' }}>
              Our Services
            </a>
            <a href="#work-with-us" className="hover:text-gray-300 transition-colors" style={{ color: '#F5F5F5', fontSize: '0.9rem', fontWeight: 'bold' }}>
              Work with Us
            </a>
            <a href="#contact" className="hover:text-gray-300 transition-colors" style={{ color: '#F5F5F5', fontSize: '0.9rem', fontWeight: 'bold' }}>
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-[#2a3a5f]"
            style={{ color: '#F5F5F5' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <a
              href="#about"
              className="block px-3 py-2 hover:bg-[#2a3a5f] rounded-md"
              style={{ color: '#F5F5F5', fontSize: '0.9rem', fontWeight: 'bold' }}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block px-3 py-2 hover:bg-[#2a3a5f] rounded-md"
              style={{ color: '#F5F5F5', fontSize: '0.9rem', fontWeight: 'bold' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Services
            </a>
            <a
              href="#work-with-us"
              className="block px-3 py-2 hover:bg-[#2a3a5f] rounded-md"
              style={{ color: '#F5F5F5', fontSize: '0.9rem', fontWeight: 'bold' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Work with Us
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 hover:bg-[#2a3a5f] rounded-md"
              style={{ color: '#F5F5F5', fontSize: '0.9rem', fontWeight: 'bold' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
