import React from "react";

function About() {
  return (
    <div className="flex justify-center items-center w-4/6 mx-auto mt-28">
      <div className="flex gap-14">
        <img
          className="w-3/6 rounded-md"
          src="https://10web-site.ai/8/wp-content/uploads/sites/9/2024/03/recycled-shoe-store-home-about-image_iXHhchlT.webp"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6">
          <h4 className="font-semibold text-indigo-500">ABOUT US</h4>
          <h2 className="text-5xl font-semibold tracking-wider">
            Welcome to Nova
          </h2>
          <p className="tracking-wide">
            At Nova, we believe that fashion is not just about clothing, but
            about expressing oneself. Our ecommerce store offers a diverse
            collection of apparel and accessories to cater to all your fashion
            needs. We are committed to providing the latest and trendiest styles
            at affordable prices.
          </p>
          <a href="#" className="underline underline-offset-4">
            READ MORE
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
