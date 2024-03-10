import React, { useContext } from "react";
import Item from "../Item/Item";
import { Link } from "react-router-dom";
import ProductContext from "../context/ProductContext";

function Men() {
  const products = useContext(ProductContext);
  const womenProducts = products.filter(
    (item) => item.category === "women's clothing"
  );

  return (
    <div>
      <img src="/assets/banner_women.png" alt="Men's Banner" />
      <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
        {womenProducts.map((item) => (
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
