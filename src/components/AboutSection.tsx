
import { useEffect, useState, useRef } from "react";
import { Clock, Shield, Wrench, Truck } from "lucide-react";

const AboutSection = () => {
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

  const features = [
    {
      icon: <Clock className="w-10 h-10 text-brand-yellow" />,
      title: "Atendimento 24 horas",
      description: "Estamos disponíveis todos os dias, a qualquer hora."
    },
    {
      icon: <Truck className="w-10 h-10 text-brand-yellow" />,
      title: "Equipamentos modernos",
      description: "Frota completa e bem equipada para todos os tipos de veículos."
    },
    {
      icon: <Shield className="w-10 h-10 text-brand-yellow" />,
      title: "Profissionais qualificados",
      description: "Equipe treinada para lidar com qualquer situação."
    },
    {
      icon: <Wrench className="w-10 h-10 text-brand-yellow" />,
      title: "Preço justo e transparente",
      description: "Sem surpresas, você sabe exatamente o valor do serviço."
    }
  ];

  return (
    <section id="sobre" ref={sectionRef} className="section bg-brand-gray">
      <div className="max-w-7xl mx-auto">
        <h2 
          className={`section-title text-center transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Sobre a Rovanimf Guincho
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 animate-fade-in-right" : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="font-inter text-lg mb-6 leading-relaxed">
              A Rovanimf Guincho 24h é especializada em serviços de reboque e socorro veicular, 
              oferecendo atendimento rápido, seguro e com preço justo. Estamos preparados para 
              atender qualquer tipo de situação, seja uma pane mecânica, elétrica, acidente ou 
              necessidade de transporte de veículos.
            </p>
            <p className="font-inter text-lg mb-6 leading-relaxed">
              Nossa equipe qualificada está disponível 24 horas por dia, 7 dias por semana, 
              garantindo que você nunca fique desamparado na estrada.
            </p>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 animate-fade-in-left" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <video 
                src="public/img/2.mp4" 
                autoPlay 
                loop 
                muted                 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`card flex flex-col items-center text-center hover-scale transition-all duration-1000 delay-${300 + index * 100} ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">
                {feature.title}
              </h3>
              <p className="font-inter text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
