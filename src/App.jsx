import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import Electronics from "./components/Electronics/Electronics";
import Footer from "./components/Footer/Footer";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import Error from "./components/Error/Error";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./components/context/CartContext";
import Cart from "./components/Cart/Cart";
import { ProductProvider } from "./components/context/ProductContext";
import { DarkModeProvider } from "./components/context/DarkModeContext";

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <DarkModeProvider>
        <ProductProvider>
          <CartProvider>
            <BrowserRouter>
              <ScrollToTop />
              <Header />
              <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/men" element={<Men category="men" />} />
                <Route
                  path="/item/:id"
                  element={<ItemDetails category="details" />}
                />
                <Route path="/women" element={<Women category="women" />} />
                <Route path="/elec" element={<Electronics category="elec" />} />
                <Route path="*" element={<Error />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </CartProvider>
        </ProductProvider>
      </DarkModeProvider>
    </div>
  );
}

export default App;
