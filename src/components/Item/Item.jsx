import React from "react";

function Item(props) {
  return (
    <div className="w-[350px] cursor-pointer bg-gray-100 dark:bg-gray-800 p-3 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
      <div className="overflow-hidden rounded-lg mb-3">
        <img
          className="h-[200px] w-full object-cover"
          src={props.image}
          alt={props.name}
        />
      </div>
      <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 truncate">
        {props.title}
      </p>
      <div className="flex items-center justify-between mt-2">
        <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          ${props.price}
        </div>
      </div>
    </div>
  );
}

export default Item;
