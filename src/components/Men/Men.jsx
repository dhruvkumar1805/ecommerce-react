import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import ProductContext from "../context/ProductContext";

function Men() {
  const products = useContext(ProductContext);
  const menProducts = products.filter(
    (item) => item.category === "men's clothing"
  );

  return (
    <div>
      <img src="/assets/banner_mens.png" alt="Men's Banner" />
      <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
        {menProducts.map((item) => (
          <Link key={item.id} to={`/item/${item.id}`}>
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Men;
