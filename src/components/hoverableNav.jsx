import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const HoverableNav = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full 
      transition-all duration-300 ease-in-out z-50
      ${isHovered ? 'w-auto bg-tertiary/90' : 'w-[60px] bg-tertiary/60'}
      backdrop-blur-sm border border-tertiary`}
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
              className="text-white hover:text-secondary transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/iamabdurrasheed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/iamabdurrasheed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </>
        )}
        <div className="text-white text-xl">☰</div>
      </div>
    </nav>
  );
};

export default HoverableNav;