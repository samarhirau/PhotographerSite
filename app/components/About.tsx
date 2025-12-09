import React from "react";

function About() {
  return  <section id="about" className="py-20">
          <div className="container-custom">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="h-[480px] overflow-hidden rounded">
                <img src="/images/about-pic.jpg" alt="about" className="w-full h-full object-cover filter grayscale" />
              </div>
              <div>
                <h2 className="text-[3rem] md:text-[4rem] font-semibold tracking-wider mb-8">About Me</h2>
<p className="text-[1.7rem] leading-relaxed opacity-80 mb-4">
  Professional photographer Mayur Mirase combines his photography and marketing expertise to craft visually compelling stories. With a keen eye for detail, he blends creativity with professional insight to capture the perfect moment.
</p>
<p className="text-[1.7rem] leading-relaxed opacity-80 mb-4">
  Mayur has worked on diverse projects, from commercial shoots to portraits and events, always ensuring every photograph tells a unique story. Photography is more than a profession for him—it’s a passion.
</p>
<p className="text-[1.7rem] leading-relaxed opacity-80 mb-6">
  Explore his recent works and experiences below to see his dedication and creativity in action.
</p>




                <a href="#work" className="text-[3rem] inline-block transform transition hover:translate-y-1">
                  <i className="fas fa-chevron-down"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
}

export default About;
