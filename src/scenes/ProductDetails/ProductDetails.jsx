import { React, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails({ products }) {
  const { category, id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  console.log("category:", category);
  console.log("id:", id);
  console.log("products:", products);
  console.log("set",products[category])

  if (!products || !products[category]) {
    return <div>Product set not found</div>;
  }
  
  const product = products[category].find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="card crd hover-card" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt={product.name} /> 
      <div className="card-body">
        <p className="card-text">{product.name}</p>
        <p>Price: <i className="bi bi-currency-rupee"></i>{product.price}</p>
        <p>Rating: {product.rating}</p>
        <div className="quantity-row">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}/>
        </div><br/>
        <div className="size-row">
          <div className="size-box">
            <p className="size-text">Size: {product.size}</p>
          </div>
        </div>
        <button className="btn btn-warning w-100 cartbut">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
