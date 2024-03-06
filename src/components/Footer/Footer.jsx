import React from "react";

function Footer() {
  return (
    <div className="flex justify-between px-24 py-10 mt-10 bg-slate-200">
      <a
        to="/"
        className="font-bold tracking-wide text-3xl"
        onClick={() => handleLinkClick("Home")}
      >
        Nova
      </a>
      <div className="flex flex-col">
        <a className="font-bold mb-4 text-lg" href="#">
          Social
        </a>
        <a href="#">Instagram</a>
        <a href="#">X</a>
        <a href="#">Youtube</a>
        <a href="#">Facebook</a>
      </div>
      <div className="flex flex-col">
        <a className="font-bold mb-4 text-lg" href="#">
          Support
        </a>
        <a href="#">Terms of service</a>
        <a href="#">Track Order</a>
        <a href="#">Contact</a>
      </div>
      <div>
        <h2 className="font-bold mb-4 text-lg">Get Updates and more</h2>
        <input
          className="bg-gray-300 text-black placeholder-black-200 p-2 focus:outline-none rounded-lg"
          type="email"
          name="email"
          placeholder="Your email address"
        />
      </div>
    </div>
  );
}

export default Footer;
