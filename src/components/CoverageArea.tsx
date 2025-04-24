
import { useEffect, useState, useRef } from "react";
import { MapPin } from "lucide-react";

const CoverageArea = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current!);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const areas = [
    "São Paulo - Capital",
    "Grande São Paulo",
    "Guarulhos",
    "ABC Paulista",
    "Osasco",
    "Taboão da Serra",
    "Cotia",
    "Embu das Artes",
    "Itapecerica da Serra"
  ];

  return (
    <section 
      id="cobertura" 
      ref={sectionRef}
      className="section bg-brand-gray relative"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          className={`section-title text-center transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Onde Atendemos
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10">
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 animate-fade-in-right" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <p className="font-inter text-lg mb-6">
                  Atuamos em toda região metropolitana de São Paulo e principais rodovias. Em caso de 
                  dúvida sobre atendimento na sua localização, entre em contato.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {areas.map((area, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-2"
                    >
                      <MapPin size={18} className="text-brand-yellow" />
                      <span className="font-inter">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <a 
                href="https://wa.me/5511991247611?text=Olá,%20gostaria%20de%20verificar%20se%20vocês%20atendem%20na%20minha%20região!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-primary inline-flex items-center gap-2 mt-4"
              >
                <MapPin size={18} />
                <span>Verificar Disponibilidade</span>
              </a>
            </div>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 animate-fade-in-left" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="rounded-lg overflow-hidden shadow-xl h-[400px]">
              <img 
                src="/img/3.png" 
                alt="Mapa de cobertura da Rovanimf Guincho" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageArea;
