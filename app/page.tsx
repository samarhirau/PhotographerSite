"use client";

import React, { JSX } from "react";
import { useTypewriter } from "./hooks/useTypewriter";

const words = ["photographer", "videographer", "video editor"];
export default function App() {

  const typed = useTypewriter(words, 80, 1800, true);

  return (
    <div className="text-darkcolor">
      <header id="header" className="header-bg min-h-screen flex items-end">
        <div className="container-custom pb-16">
          <div className="pb-8">
            <h1 className="text-white uppercase text-[4.5rem] leading-tight md:text-[7rem]">
              I'm a <br />
              <span className="inline-block">
                <span className="capitalize write">{typed}</span>
                <span className="blinking-cursor text-white">|</span>
              </span>
            </h1>
            <h3 className="text-white font-light tracking-widest uppercase mt-6">Mayur Mirase</h3>
            <ul className="flex mt-8">
              <li className="mr-4">
                <a className="w-10 h-10 bg-white rounded-sm flex items-center justify-center shadow" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="mr-4">
                <a className="w-10 h-10 bg-white rounded-sm flex items-center justify-center shadow" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="mr-4">
                <a className="w-10 h-10 bg-white rounded-sm flex items-center justify-center shadow" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a className="w-10 h-10 bg-white rounded-sm flex items-center justify-center shadow" href="#">
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        {/* About */}
        <section id="about" className="py-20">
          <div className="container-custom">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="h-[480px] overflow-hidden rounded">
                <img src="/images/about-pic.jpg" alt="about" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-[3rem] md:text-[4rem] font-semibold tracking-wider mb-8">About Me</h2>
                <p className="text-[1.7rem] leading-relaxed opacity-80 mb-4">
                  Professional photographer Jason Smith combines his photography degree with his marketing degree to find the right balance between creativity and commercial sinse. Jason is an experienced all round photographer and moved to New York at the end of 2020.
                </p>
                <p className="text-[1.7rem] leading-relaxed opacity-80 mb-6">
                  We can checkout his recent works and experiences below. He considers photography as his passion more than profession.
                </p>
                <a href="#work" className="text-[3rem] inline-block transform transition hover:translate-y-1">
                  <i className="fas fa-chevron-down"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="work-bg text-white min-h-[100vh] py-20">
          <div className="container-custom">
            <div>
              <h2 className="text-[3rem] md:text-[4rem] font-semibold mb-8">what am i doing?</h2>
              <ul className="grid gap-4 md:grid-cols-2 mb-8">
                <li className="text-[1.7rem] leading-relaxed"><i className="fas fa-dot-circle mr-3"></i> We work according to the guidelines of the American Institute of Digital Photography with regard to color management and file handling.</li>
                <li className="text-[1.7rem] leading-relaxed"><i className="fas fa-dot-circle mr-3"></i> Your files will be stored multiples times on two locations</li>
                <li className="text-[1.7rem] leading-relaxed"><i className="fas fa-dot-circle mr-3"></i> We work with the terms and conditions of the Dupho, registered at the court in Ohio with number 08/2018.</li>
                <li className="text-[1.7rem] leading-relaxed"><i className="fas fa-dot-circle mr-3"></i> We always have back-up equipment at hand, also on location.</li>
              </ul>

              <div className="grid gap-8 md:grid-cols-4 text-center mb-8">
                <div>
                  <img src="/images/wildlife-icon.png" alt="" className="mx-auto mb-4 w-[50px] h-[50px] object-contain" />
                  <h3 className="text-xl">Wildlife</h3>
                </div>
                <div>
                  <img src="/images/portrait-icon.png" alt="" className="mx-auto mb-4 w-[50px] h-[50px] object-contain" />
                  <h3 className="text-xl">Portrait</h3>
                </div>
                <div>
                  <img src="/images/landscape-icon.png" alt="" className="mx-auto mb-4 w-[50px] h-[50px] object-contain" />
                  <h3 className="text-xl">Landscape</h3>
                </div>
                <div>
                  <img src="/images/family-icon.png" alt="" className="mx-auto mb-4 w-[50px] h-[50px] object-contain" />
                  <h3 className="text-xl">Family</h3>
                </div>
              </div>

              <a href="#portfolio" className="inline-block text-[3rem] text-white transform transition hover:translate-y-1">
                <i className="fas fa-chevron-down"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-20">
          <div className="container-custom">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-[3rem] md:text-[4rem] font-semibold">my last works</h2>
              <a href="#contact" className="text-[2.4rem]"><i className="fas fa-chevron-down"></i></a>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px]">
              <div className="overflow-hidden">
                <img src="/images/port-1.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden lg:col-span-2">
                <img src="/images/port-2.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden">
                <img src="/images/port-3.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden">
                <img src="/images/port-4.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden">
                <img src="/images/port-5.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden lg:col-span-2">
                <img src="/images/port-6.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden">
                <img src="/images/port-7.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="md:flex md:items-start md:space-x-8">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-[3rem] md:text-[4rem] font-semibold mb-6">contact with me</h2>
                <p className="text-[1.6rem] mb-2"><i className="fas fa-phone-alt mr-3"></i> +91 73891 34499</p>
                <p className="text-[1.6rem] mb-6"><i className="fas fa-envelope mr-3"></i> contact@gmail.com</p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input className="block w-full max-w-md border-2 border-black/30 p-4 mb-4" type="text" placeholder="Your name here ..." />
                  <input className="block w-full max-w-md border-2 border-black/30 p-4 mb-4" type="email" placeholder="Your email here" />
                  <input className="inline-block text-white bg-darkcolor py-4 px-8 uppercase tracking-wider cursor-pointer" type="submit" value="Submit" />
                </form>
              </div>
              <div className="md:w-1/2">
                <img src="/images/contact-pic.jpg" alt="contact image" className="w-full rounded" />
              </div>
            </div>
          </div>
        </section>

        {/* Instagram */}
        <section id="insta" className="insta-bg py-20">
          <div className="container-custom">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-[3rem] md:text-[4rem] font-semibold text-white">instagram</h2>
              <a href="#footer" className="text-[2.4rem] text-white"><i className="fas fa-chevron-down"></i></a>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="h-[400px] overflow-hidden">
                <img src="/images/port-1.jpg" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="h-[400px] overflow-hidden">
                <img src="/images/port-2.jpg" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="h-[400px] overflow-hidden">
                <img src="/images/port-3.jpg" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="h-[400px] overflow-hidden">
                <img src="/images/port-4.jpg" alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="py-12 bg-[#332e29] text-white">
        <div className="container-custom text-center">
          <div className="mb-8">
            <h3 className="text-3xl">MAYUR MIRASE</h3>
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto mt-6">
              <img src="/images/about-pic.jpg" alt="mayur" className="w-full h-full object-cover" />
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
    </div>
  );
}
