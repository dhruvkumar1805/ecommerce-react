import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Popular from "../Popular/Popular";
import About from "../About/About";
import { Link } from "react-router-dom";

function Shop() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="relative h-[calc(100vh-68px)]">
        <img
          className="w-[100%] dark:opacity-60"
          src="/assets/background.jpg"
          alt="Clothes background image"
        />
        <div className="absolute flex flex-col gap-6 top-[calc(30%-68px)] left-[10%] font-bold right-[10%] md:w-3/6 text-white">
          <h1 className="text-5xl md:text-8xl">Nova - Fashion for All Ages</h1>
          <p className="text-lg font-normal">
            Our ecommerce clothing store offers a wide range of fashionable
            apparel for all ages. Browse our extensive collection of trendy
            clothing and accessories to find your perfect style.
          </p>
          <div className="flex gap-8">
            <Link to="/men">
              <button
                className="mt-6 rounded-md bg-white px-3.5 py-2.5 font-semibold text-black shadow-sm hover:dark:bg-indigo-500 hover:dark:text-white hover:shadow-lg hover:shadow-gray-900/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300"
                type="button"
              >
                Men
              </button>
            </Link>
            <Link to="/women">
              <button
                className="mt-6 rounded-md bg-white px-3.5 py-2.5 font-semibold text-black shadow-sm hover:dark:bg-indigo-500 hover:dark:text-white hover:shadow-lg hover:shadow-gray-900/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300"
                type="button"
              >
                Women
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Slider arrows={false} {...sliderSettings}>
        <div>
          <img
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg"
            className="outline-none border-none focus:border-none"
          />
        </div>
        <div>
          <img
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/eb6408d8-b413-49f7-8525-317fddba53821650180659351-Casual---Sports-Shoes_Desk.jpg"
            className="outline-none border-none focus:border-none"
          />
        </div>
        <div>
          <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg" />
        </div>
      </Slider>
      <Popular />
      <About />
    </div>
  );
}

export default Shop;
