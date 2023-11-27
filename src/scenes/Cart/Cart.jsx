import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./ContextCart";

function AddtoCart() {
  const { cartItems, removeFromCart, savedItems, moveToSavedItems, removeFromSavedItems  } = useCart();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };
  const handleSaveForLater = (productId) => {
    moveToSavedItems(productId);
  }
  const handleRemoveFromSaved = (productId) => {
    removeFromSavedItems(productId);
  };
  const totalPrice = cartItems.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );
  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
          {cartItems.map((item) => (
            <div key={item.id} className="col">
              <div className="card text-center d-flex flex-column align-items-center">
                <div className="col-sm-8">
                  <img
                    src={item.image}
                    className="card-img-bottom rounded mx-auto mt-4"
                    alt={item.name}
                  />
                </div>
                <div className="col-sm-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      Price:<i className="bi bi-currency-rupee"></i>{item.price} {/* Format the price if needed */}
                    </p>
                    <p className="card-text">Quantity: {item.quantity}</p>
                    <div className=" d-flex justify-content-between">
                      <button className="btn btn-sm btn-primary mr-3">Buy</button>
                      <button className="btn btn-sm btn-danger mx-3" onClick={() => handleRemove(item.id)}>Remove</button>
                      <button
                        className="btn btn-sm btn-secondary ml-3" onClick={() => handleSaveForLater(item.id)}>Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Display the total price card */}
          <div className="col">
            <div className="card text-center">
              <div className="card-body">
                <h5>Payment Infomation</h5>
                <h5 className="card-title">Total Price</h5>
                <p className="card-text">Total: {totalPrice}</p>
                {/* Add any additional information or checkout button */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
      {/* Display the "Save for Later" section */}
      {savedItems && savedItems.length > 0 && (
        <div className="mt-4">
          <h3>Saved for Later</h3>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
            {savedItems.map((item) => (
              <div key={item.id} className="col">
                <div className="card text-center d-flex flex-column align-items-center">
                  <div className="col-sm-8">
                    <img
                      src={item.image}
                      className="card-img-bottom rounded mx-auto mt-4"
                      alt={item.name}
                    />
                  </div>
                  <div className="col-sm-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">
                        Price:<i className="bi bi-currency-rupee"></i>{item.price} {/* Format the price if needed */}
                      </p>
                      <p className="card-text">Quantity: {item.quantity}</p>
                      <div className="w-100 d-flex justify-content-between">
                        <button className="btn btn-sm btn-primary">Buy Now</button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleRemoveFromSaved(item.id)}>Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AddtoCart;
