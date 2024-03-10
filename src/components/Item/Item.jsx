import React from "react";

function Item(props) {
  return (
    <div className="w-[300px] cursor-pointer bg-gray-300 p-2 rounded-xl hover:scale-105 transition-all duration-150">
      <div className="overflow-hidden rounded-lg">
        <img
          className="h-[300px] w-full object-cover"
          src={props.image}
          alt={props.name}
        />
      </div>
      <p className="mt-2 leading-5 truncate">{props.title}</p>
      <div className="flex mt-2 space-x-4">
        <div>${props.price}</div>
      </div>
    </div>
  );
}

export default Item;
