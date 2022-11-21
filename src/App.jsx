import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioDetail from "./components/portfolio/PortfolioDetail";
import NotFound from "./components/NotFound";
import Home from "./components/portfolio/pages/Home";
import MyFavorite from "./components/about/MyFavorite";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="portfolioDetail" element={<PortfolioDetail />} />
            <Route path="myfavorite" element={<MyFavorite />} />
            <Route path={`*`} element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
