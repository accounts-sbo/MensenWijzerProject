
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-mensen-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/c74ae2d5-0e01-49cd-bd0a-92fa1ed57048.png" 
            alt="De Mensen Wijzer" 
            className="h-10" 
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/over-mij" className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida">
            Over mij
          </Link>
          <Link to="/diensten" className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida">
            Diensten
          </Link>
          <Link to="/werkwijze" className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida">
            Werkwijze
          </Link>
          <Link to="/contact" className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida">
            Contact
          </Link>
          <a href="tel:+31635345061" className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida">
            +31 6 53 54 50 61
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-mensen-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-mensen-white w-full py-4">
          <div className="container flex flex-col space-y-4">
            <Link 
              to="/over-mij" 
              className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida"
              onClick={() => setIsMenuOpen(false)}
            >
              Over mij
            </Link>
            <Link 
              to="/diensten" 
              className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida"
              onClick={() => setIsMenuOpen(false)}
            >
              Diensten
            </Link>
            <Link 
              to="/werkwijze" 
              className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida"
              onClick={() => setIsMenuOpen(false)}
            >
              Werkwijze
            </Link>
            <Link 
              to="/contact" 
              className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="tel:+31635345061" 
              className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida"
            >
              +31 6 53 54 50 61
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
