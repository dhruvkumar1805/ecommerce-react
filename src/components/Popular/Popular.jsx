import React from "react";
import data_product from "../../../public/assets/data";
import Item from "../Item/Item";

function Popular() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl text-center mt-20 uppercase">
          Popular in Women
        </h1>
        <hr className="w-[200px] h-1 mt-5 mb-20 bg-slate-950 flex justify-center items-center" />
      </div>
      <div className="flex justify-center items-center space-x-6">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              newPrice={item.new_price}
              oldPrice={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
