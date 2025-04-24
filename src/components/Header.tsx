
import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navigateTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const phoneNumber = '5511991247611';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20preciso%20de%20um%20guincho!`;

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-10 lg:px-16
                 ${scrolled 
                   ? 'bg-white/95 text-black shadow-md backdrop-blur-lg py-4' 
                   : 'bg-transparent text-white py-6'}`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          <h1 className="font-poppins font-bold text-xl md:text-2xl">
            ROVANIMF GUINCHO 24h
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => navigateTo('inicio')} 
            className="font-inter font-medium hover:text-brand-yellow transition-colors"
          >
            Início
          </button>
          <button 
            onClick={() => navigateTo('sobre')} 
            className="font-inter font-medium hover:text-brand-yellow transition-colors"
          >
            Sobre
          </button>
          <button 
            onClick={() => navigateTo('porqueNosEscolher')} 
            className="font-inter font-medium hover:text-brand-yellow transition-colors"
          >
            Por que nos escolher
          </button>
          <button 
            onClick={() => navigateTo('servicos')} 
            className="font-inter font-medium hover:text-brand-yellow transition-colors"
          >
            Serviços
          </button>
          <button 
            onClick={() => navigateTo('cobertura')} 
            className="font-inter font-medium hover:text-brand-yellow transition-colors"
          >
            Cobertura
          </button>
          <button 
            onClick={() => navigateTo('contato')} 
            className="font-inter font-medium hover:text-brand-yellow transition-colors"
          >
            Contato
          </button>
        </nav>
        
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`flex items-center gap-2 font-poppins font-semibold px-4 py-2 rounded-md transition-all duration-300
                     ${scrolled 
                       ? 'bg-brand-yellow text-black hover:bg-opacity-85' 
                       : 'bg-brand-yellow/90 text-black hover:bg-brand-yellow'}`}
        >
          <Phone size={18} />
          <span className="hidden sm:inline">Chamar Guincho</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
