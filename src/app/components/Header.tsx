import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold text-gray-900">
            Apex Consulting
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
