"use client";
import Footer from "./components/Footer";
import About from "./components/About";
import Work from "./components/Work";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Instagram from "./components/Instagram";
import Header from "./components/Header";
import Loader from "./components/Loader";


export default function App() {



  return (
    <>
      <Loader />
      < Header />
      <About />
      < Work />
      < Portfolio />
      <Contact />
      <Instagram />
      < Footer />
    </>
  );
}
