import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="text-center">
            <h3 className="text-white text-lg mb-4" style={{ fontFamily: 'Comfortaa, cursive' }}>
              CoReate
            </h3>
            <p className="text-sm">Connecting you to endless possibilities</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-white text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 justify-center">
                <Mail size={16} />
                <a href="mailto:info@gocoreate.com" className="hover:text-white transition-colors">
                  <span>info@gocoreate.com</span>
                </a>
              </li>
              
              
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-white text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4 justify-center">
              <a href="mailto:info@coreate.com" className="hover:text-white transition-colors">
                
              </a>
              <a href="https://www.linkedin.com/company/coreate" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/gocoreate/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} CoReate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}