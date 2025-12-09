import React from "react";

function Contact() {
  return     <section id="contact" className="py-20 bg-gray-50">
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
}

export default Contact;
