import { useState, useEffect } from "react";
import images2 from "@/assets/images/logo.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
                src={images2}
                  alt="Shree Krishna Dairy Farm Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-playfair font-bold text-xl text-forest-green">Shree Krushna Dairy</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-forest-green hover:text-warm-brown transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-forest-green hover:text-warm-brown transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-forest-green hover:text-warm-brown transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-forest-green hover:text-warm-brown transition-colors"
            >
              Contact
            </button>
          </div>
          
          <button 
            className="md:hidden text-forest-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-forest-green hover:text-warm-brown transition-colors w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block px-3 py-2 text-forest-green hover:text-warm-brown transition-colors w-full text-left"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-forest-green hover:text-warm-brown transition-colors w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-forest-green hover:text-warm-brown transition-colors w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
