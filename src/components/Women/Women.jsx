import React from "react";
import all_product from "../../../public/assets/all_product";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

function Men() {
  const womenProducts = all_product.filter((item) => item.category === "women");

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
              name={item.name}
              newPrice={item.new_price}
              oldPrice={item.old_price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Men;
