import React from "react";

function Item(props) {
  return (
    <div className="w-[300px] cursor-pointer bg-zinc-300 p-2.5 rounded-xl hover:scale-105 transition-all duration-150">
      <img className="rounded-lg" src={props.image} alt="" />
      <p className="mt-2 leading-5">{props.name}</p>
      <div className="flex mt-2 space-x-4">
        <div>${props.newPrice}</div>
        <div className="line-through opacity-50">${props.oldPrice}</div>
      </div>
    </div>
  );
}

export default Item;
