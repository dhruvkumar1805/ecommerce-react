import React, { useContext } from "react";
import Item from "../Item/Item";
import { Link } from "react-router-dom";
import ProductContext from "../context/ProductContext";

function Electronics() {
  const products = useContext(ProductContext);
  const kidsProducts = products.filter(
    (item) => item.category === "electronics"
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
        {kidsProducts.map((item) => (
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

export default Electronics;
