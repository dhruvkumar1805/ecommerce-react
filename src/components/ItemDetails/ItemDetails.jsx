import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Toaster, toast } from "sonner";
import ProductContext from "../context/ProductContext";

function ItemDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const products = useContext(ProductContext);
  const item = products.find((product) => product.id === parseInt(id));

  const handleAddToCart = () => {
    if (item) {
      addToCart(item, quantity, selectedSize);
      toast.success("Item added to cart!");
    }
  };
  const [selectedSize, setSelectedSize] = useState("XL");
  const [quantity, setQuantity] = useState(1);

  if (!item) {
    return <div>Item not found</div>;
  }

  const { title, image, price } = item;
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div>
      <Toaster richColors />
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-16 my-20">
        <img className="h-[400px] rounded-lg" src={image} alt={title} />
        <div className="flex flex-col ml-6 md:ml-0 gap-3">
          <h1 className="text-3xl font-semibold max-w-xl">{title}</h1>
          <div className="flex mt-2 space-x-4">
            <div className="text-2xl font-semibold text-orange-500">
              ${price}
            </div>
            <div className="flex items-center text-white">
              <span className="text-xs font-semibold rounded-sm p-1 bg-orange-500">
                SAVE 15%
              </span>
            </div>
          </div>

          <div className="mt-4">
            <p className="mr-2 mb-2">Size: {selectedSize}</p>
            <div className="flex gap-1 cursor-pointer mb-2">
              {sizes.map((size) => (
                <div
                  key={size}
                  className={`border-2 py-2 px-4 md:py-4 md:px-6 rounded-md inline-block ${
                    selectedSize === size
                      ? "bg-gray-200 border-gray-500 font-semibold"
                      : ""
                  }`}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2">Quantity:</p>
            <div className="border-2 inline-block px-4 py-2 rounded-md mb-2">
              <button onClick={decrementQuantity}>-</button>
              <span className="py-4 px-6 rounded-md">{quantity}</span>
              <button onClick={incrementQuantity}>+</button>
            </div>
          </div>
          <div>
            <button
              onClick={handleAddToCart}
              className="inline-block select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-auto"
              type="button"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="md:mx-64 mx-6 md:ml-60">
        <h2 className="uppercase font-bold text-lg">Description</h2>
        <p className="mb-4">{item.description}</p>
        <li>Height of the Male model - 6'0</li>
        <li>Male Model wearing Size - L</li>
        <li>GSM - 330-350</li>
        <li>Fit - Regular </li>
        <li>Composition - 60%Cotton + 40% Polyester</li>
      </div>
    </div>
  );
}

export default ItemDetails;
