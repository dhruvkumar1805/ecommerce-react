import React from "react";
import data_product from "../../../public/assets/data";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

function Popular() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl text-center mt-20 uppercase">
          Popular in Women
        </h1>
        <hr className="w-[200px] h-0.5 md:h-1 mt-5 mb-20 bg-slate-950 flex justify-center items-center" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-x-6">
        {data_product.map((item, i) => {
          return (
            <Link key={item.id} to={`/item/${item.id}`}>
              <Item
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                newPrice={item.new_price}
                oldPrice={item.old_price}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
