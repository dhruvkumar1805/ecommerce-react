import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import Kids from "./components/Kids/Kids";
import Footer from "./components/Footer/Footer";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import Error from "./components/Error/Error";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<Men category="men" />} />
          <Route
            path="/item/:id"
            element={<ItemDetails category="details" />}
          />
          <Route path="/women" element={<Women category="women" />} />
          <Route path="/kids" element={<Kids category="kids" />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
