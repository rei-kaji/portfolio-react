import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
