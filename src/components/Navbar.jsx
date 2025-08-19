import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`${
        scrolled ? "bg-primary" : "bg-transparent"
      } ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[16px] sm:text-[18px] font-bold cursor-pointer flex '>
            Mohammed Abdur Rasheed &nbsp;
            <span className='sm:block hidden'> | Full Stack Developer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-[#9e13ea]" : "text-secondary"
              } hover:text-[#9e13ea] text-[18px] font-medium cursor-pointer transition-colors duration-300`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <a
              href="/Mohammed Abdur Rasheed Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#9e13ea] hover:bg-[#8711d1] text-white px-4 py-2 rounded-lg text-[16px] font-medium transition-colors duration-300 flex items-center gap-2"
            >
              📄 Resume
            </a>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center z-50'>
          {/* Backdrop overlay for mobile menu */}
          {toggle && (
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 touch-manipulation"
              onClick={() => setToggle(false)}
            />
          )}

          {/* Mobile menu button with improved styling */}
          <button
            className={`w-10 h-10 flex flex-col justify-center items-center cursor-pointer z-50 touch-manipulation rounded-lg transition-all duration-300 ${
              toggle ? 'bg-[#9e13ea]/20' : 'bg-transparent hover:bg-white/10'
            }`}
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${toggle ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 my-1 ${toggle ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${toggle ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {/* Mobile dropdown menu with improved animation */}
          <div
            className={`${
              !toggle ? "opacity-0 invisible translate-y-[-10px]" : "opacity-100 visible translate-y-0"
            } p-6 bg-gradient-to-br from-black via-[#1a1a2e] to-black absolute top-20 right-0 mx-4 my-2 min-w-[240px] z-50 rounded-2xl border border-[#9e13ea]/30 shadow-2xl backdrop-blur-md transition-all duration-300 ease-out touch-manipulation`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] transition-all duration-200 w-full text-right hover:text-[#9e13ea] ${
                    active === nav.title ? "text-[#9e13ea]" : "text-white/90"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className="block py-2 px-3 rounded-lg hover:bg-[#9e13ea]/10 transition-colors duration-200">{nav.title}</a>
                </li>
              ))}
              <li className="w-full mt-2 pt-2 border-t border-white/20">
                <a
                  href="/Mohammed Abdur Rasheed Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#9e13ea] to-[#7c11c7] hover:from-[#8711d1] hover:to-[#6b0ea9] text-white px-4 py-3 rounded-xl text-[14px] font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  onClick={() => setToggle(!toggle)}
                >
                  📄 Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
