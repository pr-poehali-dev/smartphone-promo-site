import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/photo_2025-08-14_19-38-37.jpg" 
              alt="NTS Маскот" 
              className="w-12 h-12 object-contain"
            />
            <span className="font-heading font-bold text-xl">
              НАДЕЖНЫЕ СМАРТФОНЫ
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-colors ${
                activeSection === 'home' ? 'text-primary' : 'text-gray-600 hover:text-primary'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('promotions')}
              className={`font-medium transition-colors ${
                activeSection === 'promotions' ? 'text-primary' : 'text-gray-600 hover:text-primary'
              }`}
            >
              Акции
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors ${
                activeSection === 'about' ? 'text-primary' : 'text-gray-600 hover:text-primary'
              }`}
            >
              О бренде
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className={`font-medium transition-colors ${
                activeSection === 'contacts' ? 'text-primary' : 'text-gray-600 hover:text-primary'
              }`}
            >
              Контакты
            </button>
          </div>

          <Button className="hidden md:flex bg-primary hover:bg-primary/90 glow-button">
            <Icon name="MessageCircle" size={18} className="mr-2" />
            Telegram
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;