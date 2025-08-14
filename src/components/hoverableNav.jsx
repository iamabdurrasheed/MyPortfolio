import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const HoverableNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // On mobile, use toggle instead of hover
  if (isMobile) {
    return (
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <div
          className={`transition-all duration-300 ease-out ${
            isExpanded 
              ? 'bg-gradient-to-r from-[#1A1A2E]/95 to-[#2A2A3E]/95 backdrop-blur-md border border-[#9e13ea]/30 rounded-full px-6 py-3' 
              : 'bg-[#9e13ea]/20 backdrop-blur-sm border border-[#9e13ea]/50 rounded-full p-3'
          }`}
        >
          {isExpanded ? (
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://github.com/iamabdurrasheed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#9e13ea] transition-all duration-300 touch-manipulation"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/iamabdurrasheed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#9e13ea] transition-all duration-300 touch-manipulation"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/iamabdurrasheed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#9e13ea] transition-all duration-300 touch-manipulation"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-white hover:text-[#9e13ea] transition-all duration-300 touch-manipulation ml-2"
              >
                <span className="text-lg">✕</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsExpanded(true)}
              className="text-white hover:text-[#9e13ea] transition-all duration-300 touch-manipulation flex items-center justify-center"
            >
              <span className="text-xl">🔗</span>
            </button>
          )}
        </div>
      </nav>
    );
  }

  // Desktop: Original hoverable behavior with improvements
  return (
    <nav
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 p-4 rounded-full 
      transition-all duration-300 ease-in-out z-50
      ${isHovered 
        ? 'w-auto bg-gradient-to-r from-[#1A1A2E]/95 to-[#2A2A3E]/95 backdrop-blur-md border border-[#9e13ea]/30' 
        : 'w-[60px] bg-[#1A1A2E]/60 backdrop-blur-sm border border-[#2A2A3E]'
      }`}
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
              className="text-white hover:text-[#9e13ea] transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/iamabdurrasheed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9e13ea] transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/iamabdurrasheed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9e13ea] transition-all duration-300 transform hover:scale-110"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </>
        )}
        <div className="text-white text-xl w-6 h-6 flex items-center justify-center transition-transform duration-300 hover:scale-110">
          {isHovered ? '🔗' : '☰'}
        </div>
      </div>
    </nav>
  );
};

export default HoverableNav;