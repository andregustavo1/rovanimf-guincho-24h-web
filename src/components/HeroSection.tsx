
import { useEffect, useState } from "react";
import { Truck } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const phoneNumber = '5511991247611';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20preciso%20de%20um%20guincho!`;

  return (
    <section 
      id="inicio" 
      className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white pt-20 pb-16"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0 bg-black/50"
        style={{
          backgroundImage: "url('/img/4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          opacity: 0.7
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 
          className={`font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0 -translate-y-10"
          }`}
        >
          Rovanimf Guincho 24h
          <span className="block text-brand-yellow mt-2">Chegamos rápido onde você estiver!</span>
        </h1>

        <p 
          className={`font-inter text-lg md:text-xl max-w-3xl mx-auto mb-10 transition-all delay-300 duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Avaria? Acidente? Precisa transportar seu veículo? A Rovanimf Guincho está pronta para te atender a qualquer hora, em qualquer lugar!
        </p>

        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all delay-500 duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Truck size={20} />
            <span>Chamar Guincho Agora</span>
          </a>
          
          <a
            href="tel:+5511991247611"
            className="button-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Phone size={20} />
            <span>(11) 99124-7611</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center items-start p-1">
          <div className="w-1 h-2 rounded-full bg-white animate-fade-in"></div>
        </div>
      </div>
    </section>
  );
};

// Import Phone icon manually since it wasn't detected
function Phone(props: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

export default HeroSection;
