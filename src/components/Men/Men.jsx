import React from "react";
import all_product from "../../../public/assets/all_product";
import Item from "../Item/Item";

function Men() {
  const menProducts = all_product.filter((item) => item.category === "men");

  return (
    <div>
      <img src="/assets/banner_mens.png" alt="Men's Banner" />
      <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
        {menProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            newPrice={item.new_price}
            oldPrice={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default Men;
