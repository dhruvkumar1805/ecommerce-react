import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { CartContext } from "../context/CartContext";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

function Header() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex justify-between items-center px-10 py-5 bg-white">
        <div>
          <Link
            to="/"
            className="font-bold tracking-wide text-xl"
            onClick={() => handleLinkClick("Home")}
          >
            Nova
          </Link>
        </div>
        <div
          className={`md:flex text-center md:space-x-10 ${
            isOpen
              ? "flex flex-col inset-x-0 gap-4 absolute top-16 text-xl bg-white z-10"
              : "hidden"
          } `}
        >
          <Link
            to="/"
            className={`hover:text-blue-600 hover:font-medium transition-all duration-300 ${
              activeLink === "Home"
                ? "md:border-b-2 md:border-blue-600 text-blue-600"
                : ""
            }`}
            onClick={() => handleLinkClick("Home")}
          >
            <div>Home</div>
          </Link>
          <Link
            to="/men"
            className={`hover:text-blue-600 hover:font-medium transition-all duration-300 ${
              activeLink === "Men"
                ? "md:border-b-2 md:border-blue-600 text-blue-600"
                : ""
            }`}
            onClick={() => handleLinkClick("Men")}
          >
            Men
          </Link>
          <Link
            to="/women"
            className={`hover:text-blue-600 hover:font-medium transition-all duration-300 ${
              activeLink === "Women"
                ? "md:border-b-2 md:border-blue-600 text-blue-600"
                : ""
            }`}
            onClick={() => handleLinkClick("Women")}
          >
            <div>Women</div>
          </Link>
          <Link
            to="/kids"
            className={`hover:text-blue-600 hover:font-medium transition-all duration-300 ${
              activeLink === "Kids"
                ? "md:border-b-2 md:border-blue-600 text-blue-600"
                : ""
            }`}
            onClick={() => handleLinkClick("Kids")}
          >
            <div>Kids</div>
          </Link>
          <Link
            to="/sale"
            className={`hover:text-blue-600 hover:font-medium transition-all duration-300 mb-4 md:mb-0 ${
              activeLink === "Sale"
                ? "md:border-b-2 md:border-blue-600 text-blue-600"
                : ""
            }`}
            onClick={() => handleLinkClick("Sale")}
          >
            <div>Sale</div>
          </Link>
        </div>
        <div className="flex justify-center items-center space-x-8">
          <Link to="/cart">
            <FiShoppingCart size="20px" />
            <div className="w-4 h-4 bg-orange-500 rounded-full absolute top-4 md:right-20 right-32 text-center text-xs text-white font-semibold">
              {cartItems.length}
            </div>
          </Link>
          <Link to="/account">
            <VscAccount size="20px" />
          </Link>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer md:hidden"
          >
            {isOpen ? (
              <HiOutlineX size="20px" />
            ) : (
              <HiOutlineMenuAlt3 size="20px" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
