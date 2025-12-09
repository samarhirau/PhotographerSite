import React from "react";
import { useTypewriter } from "../hooks/useTypewriter";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

const words = ["photographer", "videographer", "video editor"];

function Header() {
  const typed = useTypewriter(words, 80, 1800, true);

  return (
    <header
      id="header"
      className="header-bg min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
    >
      <div className="container-custom pb-20">
        <div className="animate-fade-in-up">
          <h1 className="text-white uppercase text-[3.5rem] md:text-[6rem] font-extrabold leading-[1.1] drop-shadow-xl">
            I'm a <br />
            <span className="inline-block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {typed}
            </span>
            <span className="blinking-cursor text-white">|</span>
          </h1>

          <h3 className="text-white font-light tracking-[0.3em] uppercase mt-6 text-xl md:text-2xl">
            Mayur Mirase
          </h3>

          <ul className="flex mt-10 gap-4">
            <li>
              <a className="w-12 h-12 rounded-xl backdrop-blur-md bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
                <FaFacebookF size={18} />
              </a>
            </li>
            <li>
              <a className="w-12 h-12 rounded-xl backdrop-blur-md bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
                <FaTwitter size={18} />
              </a>
            </li>
            <li>
              <a className="w-12 h-12 rounded-xl backdrop-blur-md bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
                <FaInstagram size={18} />
              </a>
            </li>
            <li>
              <a className="w-12 h-12 rounded-xl backdrop-blur-md bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
                <FaPinterest size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
