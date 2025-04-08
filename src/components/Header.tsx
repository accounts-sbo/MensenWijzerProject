
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-mensen-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
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
        </Link>

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
              <NavigationMenuTrigger className={`bg-transparent ${isScrolled ? 'text-mensen-black' : 'text-white'} hover:text-mensen-blue hover:bg-transparent font-lucida data-[state=open]:bg-transparent data-[state=open]:text-mensen-blue`}>
                Diensten
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px] grid-cols-1">
                  <li>
                    <NavigationMenuLink asChild>
                      <a 
                        onClick={() => scrollToSection('services')} 
                        className="block p-3 hover:bg-mensen-beige/20 transition-colors rounded-md cursor-pointer"
                      >
                        <div className="font-brass-mono text-mensen-blue text-lg mb-1">Identiteit & Merkontwikkeling</div>
                        <p className="text-sm text-mensen-gray">Sterke communicatie begint met een helder verhaal</p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a 
                        onClick={() => scrollToSection('services')} 
                        className="block p-3 hover:bg-mensen-beige/20 transition-colors rounded-md cursor-pointer"
                      >
                        <div className="font-brass-mono text-mensen-blue text-lg mb-1">Communicatie- & Mediastrategie</div>
                        <p className="text-sm text-mensen-gray">Van strategie tot zichtbaarheid</p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a 
                        onClick={() => scrollToSection('services')} 
                        className="block p-3 hover:bg-mensen-beige/20 transition-colors rounded-md cursor-pointer"
                      >
                        <div className="font-brass-mono text-mensen-blue text-lg mb-1">Presentatie & Profilering</div>
                        <p className="text-sm text-mensen-gray">Laat zien wie je bent – met rust, overtuiging en authenticiteit</p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                onClick={() => scrollToSection('work-with-me')} 
                className={`${isScrolled ? 'text-mensen-black' : 'text-white'} hover:text-mensen-blue transition-colors font-lucida cursor-pointer`}
              >
                Werkwijze
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
            <NavigationMenuItem>
              <a 
                href="tel:+31635345061" 
                className={`${isScrolled ? 'text-mensen-black' : 'text-white'} hover:text-mensen-blue transition-colors font-lucida`}
              >
                +31 6 53 54 50 61
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
            <div className="space-y-2">
              <div className="text-mensen-black font-brass-mono">Diensten</div>
              <div className="pl-4 space-y-2">
                <a 
                  onClick={() => scrollToSection('services')}
                  className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida block cursor-pointer"
                >
                  Identiteit & Merkontwikkeling
                </a>
                <a 
                  onClick={() => scrollToSection('services')}
                  className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida block cursor-pointer"
                >
                  Communicatie- & Mediastrategie
                </a>
                <a 
                  onClick={() => scrollToSection('services')}
                  className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida block cursor-pointer"
                >
                  Presentatie & Profilering
                </a>
              </div>
            </div>
            <a 
              onClick={() => scrollToSection('work-with-me')}
              className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida cursor-pointer"
            >
              Werkwijze
            </a>
            <a 
              onClick={() => scrollToSection('contact')}
              className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida cursor-pointer"
            >
              Contact
            </a>
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
