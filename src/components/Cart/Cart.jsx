import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems } = useContext(CartContext);
  const subtotal = cartItems
    .reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0)
    .toFixed(2);
  if (cartItems.length === 0) {
    return (
      <div>
        <h2 className="text-6xl text-center mt-20 uppercase">Cart</h2>
        <p className="text-center mt-4">No items in the cart :(</p>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-6xl text-center mt-20 uppercase">Cart</h2>
      <div className="flex flex-col md:flex-row justify-center md:items-start md:gap-36">
        <div className="flex flex-col justify-center items-center">
          {cartItems.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col md:flex-row justify-center mt-20 gap-4"
              >
                <img
                  className="md:w-24 rounded-md"
                  src={item.image}
                  alt={item.title}
                />
                <div className="flex flex-col gap-2">
                  <h3 className="max-w-xs font-semibold text-lg leading-none">
                    {item.title}
                  </h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.selectedSize}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-start text-2xl font-semibold text-orange-500">
                    ${item.price * item.quantity}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center mx-20">
          <h2 className="text-4xl text-center mt-20 uppercase">Cart total</h2>
          <div className="flex items-center justify-between mt-6">
            <p className="inline">Subtotal:</p>
            <p className="inline">${subtotal}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="inline">Shipping Fee:</p>
            <p className="inline">FREE</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="inline">
              <strong>Total: </strong>
            </p>
            <p className="inline">${subtotal}</p>
          </div>
          <button
            className="mt-6 rounded-md bg-gray-900 dark:bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:dark:bg-indigo-500 hover:shadow-lg hover:shadow-gray-900/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300"
            type="button"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
