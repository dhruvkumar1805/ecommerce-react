import React, { useContext } from "react";
import Item from "../Item/Item";
import { Link } from "react-router-dom";
import ProductContext from "../context/ProductContext";

function Popular() {
  const products = useContext(ProductContext);
  const popularProducts = products.filter(
    (item) => item.category === "jewelery"
  );

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl text-center mt-20 uppercase dark:text-slate-200">
          Popular in Jewelery
        </h1>
        <hr className="w-[200px] h-0.5 md:h-1 mt-5 mb-20 bg-slate-950 flex justify-center items-center" />
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6">
        {popularProducts.map((item, i) => {
          return (
            <Link key={item.id} to={`/item/${item.id}`}>
              <Item
                key={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
