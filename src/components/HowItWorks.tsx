
import { useEffect, useState, useRef } from "react";
import { Clock, MapPin, Phone, Truck } from "lucide-react";

const HowItWorks = () => {
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

  const steps = [
    {
      icon: <Phone className="w-10 h-10 text-brand-yellow" />,
      title: "Contato de Emergência",
      description: "Ligue para um dos nossos números 24h"
    },
    {
      icon: <MapPin className="w-10 h-10 text-brand-yellow" />,
      title: "Coleta de Informações",
      description: "Fornecemos as informações básicas sobre a situação e localização"
    },
    {
      icon: <Truck className="w-10 h-10 text-brand-yellow" />,
      title: "Deslocamento da Equipe",
      description: "Nossa equipe se desloca imediatamente até você"
    },
    {
      icon: <Clock className="w-10 h-10 text-brand-yellow" />,
      title: "Análise e Reboque",
      description: "Avaliamos a situação e realizamos o reboque com segurança"
    },
    {
      icon: <Truck className="w-10 h-10 text-brand-yellow" />,
      title: "Transporte Seguro",
      description: "Levamos seu veículo ao destino determinado"
    }
  ];

  return (
    <section 
      id="como-funciona" 
      ref={sectionRef}
      className="section bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          className={`section-title text-center transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Como Funciona Nosso Atendimento
        </h2>

        <div 
          className={`relative mt-16 px-4 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-yellow/30"></div>
          
          {/* Steps */}
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center mb-16 last:mb-0 transition-all duration-500 delay-${400 + index * 100} ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-10"
              } ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Content */}
              <div className={`w-full md:w-5/12 px-4 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <h3 className="font-poppins font-semibold text-xl mb-2">
                  {step.title}
                </h3>
                <p className="font-inter text-gray-600">
                  {step.description}
                </p>
              </div>
              
              {/* Icon */}
              <div className="flex justify-center items-center w-full md:w-2/12 my-4 md:my-0">
                <div className="rounded-full bg-black p-4 z-10">
                  {step.icon}
                </div>
              </div>
              
              {/* Spacer for second side */}
              <div className="w-full md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
