
import { useEffect, useState, useRef } from "react";
import { Clock, Shield, Truck, Zap } from "lucide-react";

const WhyChooseUs = () => {
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

  const reasons = [
    {
      icon: <Zap className="w-12 h-12 text-brand-yellow" />,
      title: "Rapidez no Atendimento",
      description: "Chegamos onde você estiver no menor tempo possível"
    },
    {
      icon: <Clock className="w-12 h-12 text-brand-yellow" />,
      title: "Disponibilidade 24h",
      description: "Serviço ininterrupto todos os dias do ano"
    },
    {
      icon: <Shield className="w-12 h-12 text-brand-yellow" />,
      title: "Equipe Especializada",
      description: "Profissionais treinados para qualquer situação"
    },
    {
      icon: <Truck className="w-12 h-12 text-brand-yellow" />,
      title: "Equipamentos Modernos",
      description: "Frota completa e adaptada para todos os tipos de veículos"
    }
  ];

  return (
    <section 
      id="porqueNosEscolher" 
      ref={sectionRef}
      className="section bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          className={`section-title text-center transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Por Que Nos Escolher?
        </h2>
        
        <p 
          className={`section-subtitle text-center text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Socorro veicular de qualidade em qualquer situação
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`bg-black/50 border border-brand-yellow/30 p-8 rounded-lg flex flex-col items-center text-center transition-all duration-500 hover:border-brand-yellow hover:bg-black/70 hover:-translate-y-2 delay-${400 + index * 100} ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="mb-6 p-4 rounded-full bg-black/50 border border-brand-yellow/50">
                {reason.icon}
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3 text-brand-yellow">
                {reason.title}
              </h3>
              <p className="font-inter text-gray-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
