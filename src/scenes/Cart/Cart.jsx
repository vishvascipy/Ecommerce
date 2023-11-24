// // ProductPage.js

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import ProductDetails from "../ProductDetails/ProductDetails";
// import ad1 from "../../img/ad1.jpg"
// import ad2 from "../../img/ad2.jpg"
// import ad3 from "../../img/ad3.jpg"

// function AddtoCart({ products, addToCart }) {
//   // State to manage the shopping cart
//   const { category, id, name } = useParams();
//   const [cartItems, setCartItems] = useState([]);

//   const handleAddToCart = (cartItem) => {
//     // Update cartItems state with the new item
//     setCartItems((prevItems) => [...prevItems, cartItem]);
//   };


//   return (
//     <div>
//       {/* Pass the products and addToCart function to ProductDetails */}
//       <ProductDetails products={products} addToCart={handleAddToCart} />
//       {/* <AddtoCart products={cart} addToCart={addToCart} /> */}
//       {/* Render the shopping cart */}
//       <h2>Shopping Cart</h2>
//       <div className="card">
//         {cartItems.map((item) => (
//           <div key={item.id}>
//             <img src={item.image} className="card-img-top" alt={item.name} />
//             <p>Name:{item.name}</p>
//             <p>Price: {item.price}</p>
//             <p>Quantity: {item.quantity}</p>
//             {/* Add more product details as needed */}
//           </div>
//         ))}
//         {/* <p>Name: {name}</p>
//         <p>Category: {category}</p>
//         <p>Product ID: {id}</p> */}
//       </div>
//     </div>
//   );
// }

// export default AddtoCart;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./ContextCart";

function AddtoCart() {
  const { cartItems } = useCart();
  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {cartItems.map((item) => (
            <div key={item.id} className="col">
              <div className="card justify-content-center">
                <div className="col-sm-8">
                  <img
                    src={item.image}
                    className="img-fluid rounded-start"
                    alt={item.name}
                  />
                </div>
                <div className="col-sm-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      Price: {item.price} {/* Format the price if needed */}
                    </p>
                    <p className="card-text">Quantity: {item.quantity}</p>
                    <div className="w-100 d-flex justify-content-between">
                      <button className="btn btn-sm btn-primary">Buy Now</button>
                      <button className="btn btn-sm btn-danger">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <Link to="/checkout">Proceed to Checkout</Link> */}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default AddtoCart;
