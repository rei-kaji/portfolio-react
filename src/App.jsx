import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioDetail from "./components/portfolio/PortfolioDetail";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <>
                  <Header />
                  <Navbar />
                  <About />
                  <Portfolio />
                  <Experience />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="portfolioDetail" element={<PortfolioDetail />} />
            <Route path={`*`} element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
