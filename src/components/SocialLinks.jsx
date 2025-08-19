import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center gap-8 py-8">
      <div className="flex gap-6">
        <a
          href="https://github.com/iamabdurrasheed"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-[#1A1A2E] to-[#2A2A3E] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 border border-[#9e13ea]/30 hover:border-[#9e13ea] hover:shadow-lg hover:shadow-[#9e13ea]/25">
            <FaGithub className="w-7 h-7 text-white group-hover:text-[#9e13ea] transition-all duration-300" />
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            GitHub
          </div>
        </a>

        <a
          href="https://linkedin.com/in/iamabdurrasheed"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-[#1A1A2E] to-[#2A2A3E] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 border border-[#9e13ea]/30 hover:border-[#9e13ea] hover:shadow-lg hover:shadow-[#9e13ea]/25">
            <FaLinkedin className="w-7 h-7 text-white group-hover:text-[#9e13ea] transition-all duration-300" />
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            LinkedIn
          </div>
        </a>

        <a
          href="https://www.instagram.com/iamabdurrasheed/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-[#1A1A2E] to-[#2A2A3E] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 border border-[#9e13ea]/30 hover:border-[#9e13ea] hover:shadow-lg hover:shadow-[#9e13ea]/25">
            <FaInstagram className="w-7 h-7 text-white group-hover:text-[#9e13ea] transition-all duration-300" />
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Instagram
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
