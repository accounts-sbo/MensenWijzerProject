
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

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

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-mensen-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container flex justify-between items-center">
        <div onClick={scrollToTop} className="flex items-center cursor-pointer">
          {isScrolled ? (
            <>
              <img 
                src="/lovable-uploads/984b0d56-dca3-47dd-a9ce-443d09d3d896.png" 
                alt="De Mensen Wijzer" 
                className="h-10" 
              />
              <span className="ml-3 font-brass-mono text-mensen-blue text-lg md:text-xl">DE MENSEN WIJZER</span>
            </>
          ) : (
            <>
              <img 
                src="/lovable-uploads/2168b17a-6e1c-4695-9581-2478c7a278aa.png" 
                alt="De Mensen Wijzer" 
                className="h-10" 
              />
              <span className="ml-3 font-brass-mono text-white text-lg md:text-xl">DE MENSEN WIJZER</span>
            </>
          )}
        </div>

        {/* Desktop Menu - Using NavigationMenu component */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <a 
                onClick={() => scrollToSection('about')} 
                className={`${isScrolled ? 'text-mensen-black' : 'text-white'} hover:text-mensen-blue transition-colors font-lucida cursor-pointer`}
              >
                Over mij
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                onClick={() => scrollToSection('services')} 
                className={`${isScrolled ? 'text-mensen-black' : 'text-white'} hover:text-mensen-blue transition-colors font-lucida cursor-pointer`}
              >
                Diensten
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                onClick={() => scrollToSection('demensen')} 
                className={`${isScrolled ? 'text-mensen-black' : 'text-white'} hover:text-mensen-blue transition-colors font-lucida cursor-pointer`}
              >
                De Mensen Wijzer
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                onClick={() => scrollToSection('contact')} 
                className={`${isScrolled ? 'text-mensen-black' : 'text-white'} hover:text-mensen-blue transition-colors font-lucida cursor-pointer`}
              >
                Contact
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-mensen-black' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-mensen-white w-full py-4 shadow-md">
          <div className="container flex flex-col space-y-4">
            <a 
              onClick={() => scrollToSection('about')}
              className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida cursor-pointer"
            >
              Over mij
            </a>
            <a 
              onClick={() => scrollToSection('services')}
              className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida cursor-pointer"
            >
              Diensten
            </a>
            <a 
              onClick={() => scrollToSection('demensen')}
              className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida cursor-pointer"
            >
              De Mensen Wijzer
            </a>
            <a 
              onClick={() => scrollToSection('contact')}
              className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
