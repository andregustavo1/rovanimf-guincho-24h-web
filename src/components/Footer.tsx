
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-brand-yellow/30 pb-8 mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="font-poppins font-bold text-2xl text-brand-yellow">
              ROVANIMF GUINCHO 24h
            </h2>
            <p className="font-inter text-sm text-gray-400 mt-2">
              Serviço de guincho e reboque 24 horas
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-poppins font-semibold text-lg mb-3">
                Links Rápidos
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#inicio" 
                    className="font-inter text-gray-300 hover:text-brand-yellow transition-colors"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a 
                    href="#sobre" 
                    className="font-inter text-gray-300 hover:text-brand-yellow transition-colors"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a 
                    href="#servicos" 
                    className="font-inter text-gray-300 hover:text-brand-yellow transition-colors"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a 
                    href="#contato" 
                    className="font-inter text-gray-300 hover:text-brand-yellow transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="font-poppins font-semibold text-lg mb-3">
                Contato
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="tel:+5511983786802" 
                    className="font-inter text-gray-300 hover:text-brand-yellow transition-colors"
                  >
                    (11) 98378-6802
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+5511983786803" 
                    className="font-inter text-gray-300 hover:text-brand-yellow transition-colors"
                  >
                    (11) 98378-6803
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+5511991247611" 
                    className="font-inter text-gray-300 hover:text-brand-yellow transition-colors"
                  >
                    (11) 99124-7611
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="font-poppins font-semibold text-lg mb-3">
                Redes Sociais
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://instagram.com/rovanimf_auto_guincho" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-gray-300 hover:text-brand-yellow transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://youtube.com/@marcelotshello"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-inter text-gray-300 hover:text-brand-yellow transition-colors"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a 
                    href="https://cartaodevisitavirtual.com.br/v2/2025/04/22/rovanimf-guincho/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-inter text-gray-300 hover:text-brand-yellow transition-colors"
                  >
                    Cartão Virtual
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-inter text-sm text-gray-400">
            &copy; 2025 Rovanimf Guincho 24h. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center gap-2 font-inter text-sm text-brand-yellow hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
