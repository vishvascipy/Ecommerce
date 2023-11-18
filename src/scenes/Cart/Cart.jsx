
import React from "react";

const Cart = ({ cart, removeFromCart  }) => (
  <div className="container mt-4">
    <h2>Your Cart</h2>
    {cart.map((item) => (
      <div key={item.id} className="cart-item">
        <div className="card crd hover-card" style={{ width: "18rem" }}>
          <img src={item.image} className="card-img-top" alt={item.name} />
          <div className="card-body">
            <p className="card-text">{item.name}</p>
            <p><i className="bi bi-currency-rupee"></i>{item.price}</p>
            <div className="size-row">
              <div className="size-box">
                <p className="size-text">Size: {item.size}</p>
              </div>
            </div>
            <button className="btn btn-danger" onClick={() => removeFromCart(item.id)} >
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Cart;
