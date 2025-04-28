import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-sentech-dark">
            СЕНТЕК<span className="text-sentech-accent">КЛИМАТ</span>
          </h1>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="font-medium text-gray-700 hover:text-sentech transition-colors">О нас</a>
          <a href="#products" className="font-medium text-gray-700 hover:text-sentech transition-colors">Каталог</a>
          <a href="#advantages" className="font-medium text-gray-700 hover:text-sentech transition-colors">Преимущества</a>
          <a href="#testimonials" className="font-medium text-gray-700 hover:text-sentech transition-colors">Отзывы</a>
          <a href="#contacts" className="font-medium text-gray-700 hover:text-sentech transition-colors">Контакты</a>
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          <Button className="bg-sentech hover:bg-sentech-dark">
            <Phone className="mr-2 h-4 w-4" />
            Заказать звонок
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 hover:text-sentech transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="font-medium text-gray-700 hover:text-sentech transition-colors py-2" onClick={toggleMenu}>О нас</a>
            <a href="#products" className="font-medium text-gray-700 hover:text-sentech transition-colors py-2" onClick={toggleMenu}>Каталог</a>
            <a href="#advantages" className="font-medium text-gray-700 hover:text-sentech transition-colors py-2" onClick={toggleMenu}>Преимущества</a>
            <a href="#testimonials" className="font-medium text-gray-700 hover:text-sentech transition-colors py-2" onClick={toggleMenu}>Отзывы</a>
            <a href="#contacts" className="font-medium text-gray-700 hover:text-sentech transition-colors py-2" onClick={toggleMenu}>Контакты</a>
            <Button className="bg-sentech hover:bg-sentech-dark w-full mt-4">
              <Phone className="mr-2 h-4 w-4" />
              Заказать звонок
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
