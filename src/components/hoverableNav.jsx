import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const HoverableNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Same hover behavior for both mobile and desktop, but responsive sizing
  return (
    <nav
      className={`fixed ${isMobile ? 'bottom-6' : 'bottom-8'} left-1/2 transform -translate-x-1/2 ${isMobile ? 'p-3' : 'p-4'} rounded-full 
      transition-all duration-300 ease-in-out z-50
      ${isHovered 
        ? `w-auto bg-gradient-to-r from-[#1A1A2E]/95 to-[#2A2A3E]/95 backdrop-blur-md border border-[#9e13ea]/30` 
        : `${isMobile ? 'w-[50px]' : 'w-[60px]'} bg-[#1A1A2E]/60 backdrop-blur-sm border border-[#2A2A3E]`
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex items-center justify-center ${isMobile ? 'gap-4' : 'gap-6'}`}>
        {isHovered && (
          <>
            <a
              href="https://github.com/iamabdurrasheed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9e13ea] transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
            </a>
            <a
              href="https://linkedin.com/in/iamabdurrasheed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9e13ea] transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
            </a>
            <a
              href="https://www.instagram.com/iamabdurrasheed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9e13ea] transition-all duration-300 transform hover:scale-110"
            >
              <FaInstagram className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
            </a>
          </>
        )}
        <div className={`text-white ${isMobile ? 'text-lg w-5 h-5' : 'text-xl w-6 h-6'} flex items-center justify-center transition-transform duration-300 hover:scale-110`}>
          {isHovered ? '🔗' : '☰'}
        </div>
      </div>
    </nav>
  );
};

export default HoverableNav;