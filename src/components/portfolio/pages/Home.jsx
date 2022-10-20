import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../../about/About";
import Contact from "../../contact/Contact";
import Experience from "../../experience/Experience";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import Navbar from "../../nav/Navbar";
import Portfolio from "../Portfolio";

const Home = () => {
  const location = useLocation();
  const returnInfo = location.state;
  useEffect(() => {
    if (returnInfo != null && returnInfo.state == "return") {
      window.location.hash = "portfolio";
    }
  });

  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Portfolio id={"portfolio"} />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
