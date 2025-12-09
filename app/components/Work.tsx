import React from "react";

function Work() {
  return  <section id="work" className="work-bg text-white min-h-[100vh] py-20">
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
}

export default Work;
