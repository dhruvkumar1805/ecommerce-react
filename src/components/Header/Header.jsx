import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";

function Header() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className="flex justify-between px-10 py-5 bg-white">
        <Link
          to="/"
          className="font-bold tracking-wide text-xl"
          onClick={() => handleLinkClick("Home")}
        >
          Nova
        </Link>
        <div className="hidden md:block space-x-10">
          <Link
            to="/"
            className={`hover:text-blue-600 hover:font-medium transition-all duration-300 ${
              activeLink === "Home" ? "border-b-2 border-blue-600" : ""
            }`}
            onClick={() => handleLinkClick("Home")}
          >
            Home
          </Link>
          <Link
            to="/men"
            className={`hover:text-blue-600 hover:font-medium transition-all duration-300 ${
              activeLink === "Men" ? "border-b-2 border-blue-600" : ""
            }`}
            onClick={() => handleLinkClick("Men")}
          >
            Men
          </Link>
          <Link
            to="/women"
            className={`hover:text-blue-600 hover:font-medium transition-all duration-300 ${
              activeLink === "Women" ? "border-b-2 border-blue-600" : ""
            }`}
            onClick={() => handleLinkClick("Women")}
          >
            Women
          </Link>
          <Link
            to="/kids"
            className={`hover:text-blue-600 hover:font-medium transition-all duration-300 ${
              activeLink === "Kids" ? "border-b-2 border-blue-600" : ""
            }`}
            onClick={() => handleLinkClick("Kids")}
          >
            Kids
          </Link>
          <Link
            to="/sale"
            className={`hover:text-blue-600 hover:font-medium transition-all duration-300 ${
              activeLink === "Sale" ? "border-b-2 border-blue-600" : ""
            }`}
            onClick={() => handleLinkClick("Sale")}
          >
            Sale
          </Link>
        </div>
        <div className="flex space-x-8">
          <Link to="/cart">
            <FiShoppingCart size="18px" />
          </Link>
          <Link to="account">
            <VscAccount size="18px" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
