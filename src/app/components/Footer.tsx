import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg mb-4">Apex Consulting</h3>
            <p className="text-sm">
              Empowering businesses with strategic insights and innovative solutions since 2015.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@apexconsulting.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>123 Business St, Suite 100</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Apex Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
