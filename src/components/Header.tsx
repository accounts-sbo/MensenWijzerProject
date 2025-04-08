
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

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-mensen-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          {isScrolled ? (
            <>
              <img 
                src="/lovable-uploads/c74ae2d5-0e01-49cd-bd0a-92fa1ed57048.png" 
                alt="De Mensen Wijzer" 
                className="h-10" 
              />
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
              <Link to="/over-mij" className={`${isScrolled ? 'text-mensen-black' : 'text-white'} hover:text-mensen-blue transition-colors font-lucida`}>
                Over mij
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={`bg-transparent ${isScrolled ? 'text-mensen-black' : 'text-white'} hover:text-mensen-blue hover:bg-transparent font-lucida data-[state=open]:bg-transparent data-[state=open]:text-mensen-blue`}>
                Diensten
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px] grid-cols-1">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/identiteit-merkontwikkeling" className="block p-3 hover:bg-mensen-beige/20 transition-colors rounded-md">
                        <div className="font-brass-mono text-mensen-blue text-lg mb-1">Identiteit & Merkontwikkeling</div>
                        <p className="text-sm text-mensen-gray">Sterke communicatie begint met een helder verhaal</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/communicatie-mediastrategie" className="block p-3 hover:bg-mensen-beige/20 transition-colors rounded-md">
                        <div className="font-brass-mono text-mensen-blue text-lg mb-1">Communicatie- & Mediastrategie</div>
                        <p className="text-sm text-mensen-gray">Van strategie tot zichtbaarheid</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/presentatie-profilering" className="block p-3 hover:bg-mensen-beige/20 transition-colors rounded-md">
                        <div className="font-brass-mono text-mensen-blue text-lg mb-1">Presentatie & Profilering</div>
                        <p className="text-sm text-mensen-gray">Laat zien wie je bent – met rust, overtuiging en authenticiteit</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/werkwijze" className={`${isScrolled ? 'text-mensen-black' : 'text-white'} hover:text-mensen-blue transition-colors font-lucida`}>
                Werkwijze
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact" className={`${isScrolled ? 'text-mensen-black' : 'text-white'} hover:text-mensen-blue transition-colors font-lucida`}>
                Contact
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="tel:+31635345061" className={`${isScrolled ? 'text-mensen-black' : 'text-white'} hover:text-mensen-blue transition-colors font-lucida`}>
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
            <Link 
              to="/over-mij" 
              className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida"
              onClick={() => setIsMenuOpen(false)}
            >
              Over mij
            </Link>
            <div className="space-y-2">
              <div className="text-mensen-black font-brass-mono">Diensten</div>
              <div className="pl-4 space-y-2">
                <Link 
                  to="/identiteit-merkontwikkeling" 
                  className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Identiteit & Merkontwikkeling
                </Link>
                <Link 
                  to="/communicatie-mediastrategie" 
                  className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Communicatie- & Mediastrategie
                </Link>
                <Link 
                  to="/presentatie-profilering" 
                  className="text-mensen-black hover:text-mensen-blue transition-colors font-lucida block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Presentatie & Profilering
                </Link>
              </div>
            </div>
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
