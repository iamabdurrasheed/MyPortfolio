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

  // On mobile, always show expanded version and position it better
  if (isMobile) {
    return (
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-[#1A1A2E]/90 backdrop-blur-sm border border-[#2A2A3E] z-40">
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/iamabdurrasheed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#9e13ea] transition-all duration-300"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/iamabdurrasheed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#9e13ea] transition-all duration-300"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/iamabdurrasheed/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#9e13ea] transition-all duration-300"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </nav>
    );
  }

  // Desktop: Original hoverable behavior
  return (
    <nav
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full 
      transition-all duration-300 ease-in-out z-50
      ${isHovered ? 'w-auto bg-[#1A1A2E]/90' : 'w-[60px] bg-[#1A1A2E]/60'}
      backdrop-blur-sm border border-[#2A2A3E]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center gap-6">
        {isHovered && (
          <>
            <a
              href="https://github.com/iamabdurrasheed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9e13ea] transition-all duration-300"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/iamabdurrasheed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9e13ea] transition-all duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/iamabdurrasheed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9e13ea] transition-all duration-300"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </>
        )}
        <div className="text-white text-xl w-6 h-6 flex items-center justify-center">☰</div>
      </div>
    </nav>
  );
};

export default HoverableNav;