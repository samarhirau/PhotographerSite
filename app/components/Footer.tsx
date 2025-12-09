import React from "react";

function Footer() {
  return <footer id="footer" className="py-12 bg-[#332e29] text-white">
        <div className="container-custom text-center">
          <div className="mb-8">
            <h3 className="text-3xl">MAYUR MIRASE</h3>
           <div className="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto mt-6">
  <img
    src="/images/about-pic.jpg"
    alt="mayur"
    className="w-full h-full object-cover filter grayscale"
  />
</div>

          </div>
          <div>
            <ul className="flex flex-col md:flex-row justify-center gap-4">
              <li><a className="text-white text-[1.5rem]" href="#about">About Me</a></li>
              <li><a className="text-white text-[1.5rem]" href="#work">Work</a></li>
              <li><a className="text-white text-[1.5rem]" href="#portfolio">Portfolio</a></li>
              <li><a className="text-white text-[1.5rem]" href="#contact">Contact Me</a></li>
              <li><a className="text-white text-[1.5rem]" href="#insta">Instagram</a></li>
            </ul>
          </div>
        </div>
      </footer>
}

export default Footer;
