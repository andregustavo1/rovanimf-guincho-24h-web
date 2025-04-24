
import { useEffect, useState, useRef } from "react";
import { Instagram, Phone, Youtube } from "lucide-react";

const ContactSection = () => {
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

  const contacts = [
    {
      type: "Telefones",
      icon: <Phone size={24} className="text-brand-yellow" />,
      info: [
        { text: "(11) 9837-8682 ", link: "tel:+5511983786802" },
        { text: "(11) 99124-7611", link: "tel:+5511991247611" }
      ]
    },
    {
      type: "Instagram",
      icon: <Instagram size={24} className="text-brand-yellow" />,
      info: [
        { text: "@rovanimf_auto_guincho", link: "https://instagram.com/rovanimf_auto_guincho" }
      ]
    },
    {
      type: "YouTube",
      icon: <Youtube size={24} className="text-brand-yellow" />,
      info: [
        { text: "Rovanimf Guincho", link: "https://youtube.com/@marcelotshello" }
      ]
    }
  ];

  return (
    <section 
      id="contato" 
      ref={sectionRef}
      className="section bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          className={`section-title text-center transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Entre em Contato
        </h2>
        
        <p 
          className={`section-subtitle text-center text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Atendimento 24h para qualquer emergência
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {contacts.map((contact, index) => (
            <div 
              key={index} 
              className={`bg-black/50 border border-brand-yellow/30 p-8 rounded-lg flex flex-col items-center text-center transition-all duration-500 hover:border-brand-yellow hover:bg-black/70 delay-${400 + index * 100} ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="mb-6 p-4 rounded-full bg-black/50 border border-brand-yellow/50">
                {contact.icon}
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-6 text-brand-yellow">
                {contact.type}
              </h3>
              <div className="space-y-3">
                {contact.info.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-lg text-gray-200 hover:text-brand-yellow transition-colors block"
                  >
                    {item.text}
                  </a>
                ))}
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
            href="https://cartaodevisitavirtual.com.br/v2/2025/04/22/rovanimf-guincho/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-primary inline-flex items-center gap-2"
          >
            <span>Ver Cartão Virtual</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
