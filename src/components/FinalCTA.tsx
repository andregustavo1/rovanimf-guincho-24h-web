
import { useEffect, useState, useRef } from "react";
import { ArrowDown, Phone } from "lucide-react";

const FinalCTA = () => {
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

  const phoneNumber = '5511991247611';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20preciso%20de%20um%20guincho!`;

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Rovanimf Guincho 24h
TEL;TYPE=CELL:+5511991247611
TEL;TYPE=CELL:+5511983786802
TEL;TYPE=CELL:+5511983786803
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'rovanimf-guincho-24h.vcf';
    link.click();
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-black text-white"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0 bg-black"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1566876402521-d67680a724da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          opacity: 0.5
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 
          className={`font-poppins font-bold text-3xl md:text-4xl lg:text-5xl mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Não fique parado, chame quem entende!
        </h2>

        <p 
          className={`font-inter text-lg md:text-xl max-w-3xl mx-auto mb-10 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Salve nosso número e conte com a gente sempre que precisar!
        </p>

        <div 
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Phone size={20} />
            <span>Ligar Agora: (11) 99124-7611</span>
          </a>
          
          <button
            onClick={handleSaveContact}
            className="button-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <ArrowDown size={20} />
            <span>Salvar Contato</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
