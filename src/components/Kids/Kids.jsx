import React from "react";
import all_product from "../../../public/assets/all_product";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

function Men() {
  const kidsProducts = all_product.filter((item) => item.category === "kid");

  return (
    <div>
      <img src="/assets/banner_kids.png" alt="Men's Banner" />
      <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
        {kidsProducts.map((item) => (
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
