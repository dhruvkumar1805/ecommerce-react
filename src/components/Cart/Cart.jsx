import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems } = useContext(CartContext);
  const subtotal = cartItems.reduce((total, item) => {
    return total + item.new_price * item.quantity;
  }, 0);
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
      <div className="flex justify-center items-start gap-36">
        <div>
          {cartItems.map((item) => {
            return (
              <div key={item.id} className="flex justify-center mt-20 gap-4">
                <img
                  className="w-24 rounded-md"
                  src={item.image}
                  alt={item.name}
                />
                <div className="flex flex-col gap-2">
                  <h3 className="max-w-xs font-semibold text-lg leading-none">
                    {item.name}
                  </h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.selectedSize}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-start text-2xl font-semibold text-orange-500">
                    ${item.new_price * item.quantity}
                  </div>
                  <div className="flex items-start line-through opacity-50">
                    ${item.old_price * item.quantity}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
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
            className="mt-6 inline-block select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-auto"
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
