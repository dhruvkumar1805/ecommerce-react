import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import Kids from "./components/Kids/Kids";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<Men category="men" />} />
          <Route path="/women" element={<Women category="women" />} />
          <Route path="/kids" element={<Kids category="kids" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
