// import React, { useState } from "react";
// import { useParams } from "react-router-dom";

// function ProductDetails({ products, addToCart }) {
//   const { category, id } = useParams();
//   const [quantity, setQuantity] = useState(1);

//   const handleQuantityChange = (newQuantity) => {
//     setQuantity(newQuantity);
//   };

//   if (!products || !products[category]) {
//     return <div>Product set not found</div>;
//   }

//   const product = products[category].find((p) => p.id === parseInt(id, 10));

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const handleAddToCart = () => {
//     // Create a cart item object with product details and quantity
//     const cartItem = {
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       quantity: quantity,
//     };

//     // Call the addToCart function passed as a prop
//     addToCart(cartItem);

//     // Optionally, you can reset the quantity to 1 after adding to the cart
//     setQuantity(1);
//   };

//   return (
//     <div className="card crd hover-card" style={{ width: "18rem" }}>
//       <img src={product.image} className="card-img-top" alt={product.name} />
//       <div className="card-body">
//         <p className="card-text">{product.name}</p>
//         <p>
//           Price: <i className="bi bi-currency-rupee"></i>
//           {product.price}
//         </p>
//         <p>Rating: {product.rating}</p>
//         <div className="quantity-row">
//           <label htmlFor="quantity">Quantity:</label>
//           <input
//             type="number"
//             id="quantity"
//             name="quantity"
//             value={quantity}
//             onChange={(e) =>
//               handleQuantityChange(parseInt(e.target.value, 10))
//             }
//           />
//         </div>
//         <br />
//         <div className="size-row">
//           <div className="size-box">
//             <p className="size-text">Size: {product.size}</p>
//           </div>
//         </div>
//         <button
//           className="btn btn-warning w-100 cartbut"
//           onClick={handleAddToCart}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;





// ProductDetails.js

import React, { useState, useReducer, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../Cart/ContextCart"

const initialState = {
  quantity: 1,
}

const quantityReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUANTITY":
      return { quantity: action.payload };
    case "INCREMENT":
      return { quantity: state.quantity + 1 };
    case "DECREMENT":
      return { quantity: Math.max(1, state.quantity - 1) };
    default:
      return state;
  }
};

function ProductDetails({ products }) {
  console.log('addToCart in ProductDetails:', products);
  const { category, id } = useParams();
  const navigate = useNavigate()
  const { addToCart } = useCart();
  const [state, dispatch] = useReducer(quantityReducer, initialState)
  const { quantity } = state;

  const handleQuantityChange = (newQuantity) => {
    dispatch({ type: "SET_QUANTITY", payload: newQuantity });
  };


  if (!products || !products[category]) {
    return <div>Product set not found</div>;
  }

  const product = products[category].find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    console.log('handleAddToCart function called');
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: state.quantity,
      image: product.image
    };
    addToCart(cartItem);
    console.log("cartitems...", cartItem);
    // Optionally, you can reset the quantity to 1 after adding to the cart
    dispatch({ type: "SET_QUANTITY", payload: 1 });
    navigate("/Cart");
  };


  return (
    <div className="card crd hover-card" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <p className="card-text">{product.name}</p>
        <p>
          Price: <i className="bi bi-currency-rupee"></i>
          {product.price}
        </p>
        <p>Rating: {product.rating}</p>
        <div className="quantity-row">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) =>
              handleQuantityChange(parseInt(e.target.value, 10))
            }
          />
        </div>
        <br />
        <div className="size-row">
          <div className="size-box">
            <p className="size-text">Size: {product.size}</p>
          </div>
        </div>
        <button
          className="btn btn-warning w-100 cartbut"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;