import React, { useState } from "react";
import "./Winter.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import RatingAndReview from "./RatingReview";
import { Link, Router } from "react-router-dom";

function WinterSets({ products }) {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortBy, setSortBy] = useState("default");
    const [selectedSize, setSelectedSize] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    // const [cart, setCart] = useState([]);

    const handleFilter = (size) => {
        setSelectedSize(size);
        const filtered = products.filter((product) => product.size === size);
        setFilteredProducts(filtered);
        setSortBy("default"); // Reset sorting when applying a filter
    };

    const handleSort = (sortBy) => {
        const sortedProducts = [...filteredProducts.length > 0 ? filteredProducts : products];
        switch (sortBy) {
            case "priceLowToHigh":
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case "priceHighToLow":
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            default:
                // Default case, do nothing
                sortedProducts.sort((a, b) => a.id - b.id);
        }
        setFilteredProducts(sortedProducts);
    };

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(term)
        );
        setFilteredProducts(filtered);
        setSortBy("default"); // Reset sorting when applying a search
    };

    // const handleAddToCart = (product) => {
    //     setCart([...cart, product]);
    // };

    return (
        <>
            <div className="container mt-4 filter">
                <div className="row1">
                    <div className="col-sm-5 row1">
                        <input type="text" className="form-control mb-2" placeholder="Search" value={searchTerm} onChange={handleSearch} />
                        <select className="form-select" value={selectedSize} onChange={(e) => handleFilter(e.target.value)}>
                            <option value="">All Sizes</option>
                            <option value="8-10M">8-10M</option>
                            <option value="12-15M">12-15M</option>
                            <option value="15-18M">15-18M</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="container mt-4 sort">
                <select onChange={(e) => handleSort(e.target.value)}>
                    <option value="default">Default Sorting</option>
                    <option value="priceLowToHigh">Price Low to High</option>
                    <option value="priceHighToLow">Price High to Low</option>
                </select>

                <div className="row">
                    {(filteredProducts.length > 0 ? filteredProducts : products).map((product) => (
                        <div className="col-sm-4" key={product.id}>
                            <Link to={`/ProductDetails/${product.category}/${product.id}`}>
                                <div className="card crd hover-card" style={{ width: "18rem" }}>
                                    <img src={product.image} className="card-img-top" alt={product.name} />
                                    <div className="card-body">
                                        <p className="card-text">{product.name}</p>
                                        <p>Price:<i className="bi bi-currency-rupee"></i>{product.price}</p>
                                        <p>Rating: {product.rating}</p>
                                        <div className="size-row">
                                            <div className="size-box">
                                                <p className="size-text">Size: {product.size}</p>
                                            </div>
                                        </div>
                                        <button className="btn btn-warning w-100 cartbut">Add to Cart</button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default WinterSets;
