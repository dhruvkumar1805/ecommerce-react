import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Men from "./components/Men/Men";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<Men category="men" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
