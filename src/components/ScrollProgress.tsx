
import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", calculateScroll);
    return () => window.removeEventListener("scroll", calculateScroll);
  }, []);

  return (
    <div 
      className="progress-bar" 
      style={{ width: `${scrollProgress}%` }} 
    />
  );
};

export default ScrollProgress;
