
import { useEffect, useState, useRef } from "react";
import { AlertTriangle, Car, Clock, MapPin, ShieldCheck, Truck } from "lucide-react";

const ServicesSection = () => {
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

  const services = [
    {
      icon: <Car className="w-10 h-10 text-brand-yellow" />,
      title: "Socorro em Estrada",
      description: "Atendimento emergencial para panes mecânicas e elétricas"
    },
    {
      icon: <Truck className="w-10 h-10 text-brand-yellow" />,
      title: "Reboque para Oficinas",
      description: "Transporte seguro do seu veículo para o local de reparo"
    },
    {
      icon: <AlertTriangle className="w-10 h-10 text-brand-yellow" />,
      title: "Apoio em Acidentes",
      description: "Suporte completo em situações de colisão ou capotamento"
    },
    {
      icon: <Car className="w-10 h-10 text-brand-yellow" />,
      title: "Transporte de Veículos",
      description: "Serviço de movimentação programada para qualquer destino"
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-brand-yellow" />,
      title: "Atendimento Urgente",
      description: "Resposta imediata para situações críticas"
    },
    {
      icon: <Clock className="w-10 h-10 text-brand-yellow" />,
      title: "Serviço Agendado",
      description: "Planejamento antecipado para transporte de veículos"
    }
  ];

  return (
    <section 
      id="servicos" 
      ref={sectionRef}
      className="section bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          className={`section-title text-center transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Serviços de Guincho
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`card hover-scale bg-gradient-to-br from-white to-brand-gray/30 transition-all duration-500 delay-${300 + index * 100} ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-full bg-black text-brand-yellow shadow-lg">
                  {service.icon}
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">
                  {service.title}
                </h3>
                <p className="font-inter text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <a 
            href="https://wa.me/5511991247611?text=Olá,%20preciso%20de%20um%20guincho!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-primary inline-flex items-center gap-2"
          >
            <Truck size={20} />
            <span>Solicitar um Guincho</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
