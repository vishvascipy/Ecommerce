import { React, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './scenes/Home/home';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import UserRegister from './scenes/Register/Register';
import Login from './scenes/Login/Login';
import ForgotPassword from './scenes/ForgotPassword/ForgotPassword';
import BoyFashion from './scenes/BoyFashion/BoyFashion';
import WinterSets from './scenes/Home/WinterSets';
import ad1 from "./img/ad1.jpg"
import ad2 from "./img/ad2.jpg"
import ad3 from "./img/ad3.jpg"
import ProductDetails from './scenes/ProductDetails/ProductDetails';

const winterProductsSet1 = [
  {
    id: 1,
    name: "Full Sleeve Winter Wear Suit",
    price: 1699,
    size: "12-15M",
    image: ad1,
    rating: 4,
    category: "winterProductsSet1",
  },
  {
    id: 2,
    name: "Full Sleeve Jacket Wear Suit",
    price: 1299,
    size: "15-18M",
    image: ad2,
    rating: 4,
    category: "winterProductsSet1",
  },
  {
    id: 3,
    name: "Sweater Wear Suit",
    price: 1199,
    size: "15-18M",
    image: ad3,
    rating: 4.5,
    category: "winterProductsSet1",
  },
  {
    id: 4,
    name: "Cotton Wear Suit",
    price: 999,
    size: "12-15M",
    image: ad1,
    rating: 4.5,
    category: "winterProductsSet1",
  },
  {
    id: 5,
    name: "Sleeve Sweater Wear Suit",
    price: 1899,
    size: "8-10M",
    image: ad2,
    rating: 4,
    category: "winterProductsSet1",
  },
  {
    id: 6,
    name: "Winter Wear Suit",
    price: 1799,
    size: "8-10M",
    image: ad3,
    rating: 4,
    category: "winterProductsSet1",
  },
]

const Occasionwear = [
  {
    id: 1,
    name: "Full Sleeve Occasion Wear Suit",
    price: 2699,
    size: "12-15M",
    image: ad1,
    rating: 4,
    category: "Occasionwear",
  },
  {
    id: 2,
    name: "Party Wear Suit",
    price: 1299,
    size: "15-18M",
    image: ad2,
    rating: 4,
    category: "Occasionwear",
  },
  {
    id: 3,
    name: "Office Wear",
    price: 3199,
    size: "15-18M",
    image: ad3,
    rating: 4.5,
    category: "Occasionwear",
  },
  {
    id: 4,
    name: "Cotton Jacket Wear",
    price: 1999,
    size: "12-15M",
    image: ad1,
    rating: 4.5,
    category: "Occasionwear",
  },
  {
    id: 5,
    name: "Sleeve Occasion Wear Suit",
    price: 1899,
    size: "8-10M",
    image: ad2,
    rating: 4,
    category: "Occasionwear",
  },
  {
    id: 6,
    name: "Normal Wear Suit",
    price: 1799,
    size: "8-10M",
    image: ad3,
    rating: 4,
    category: "Occasionwear",
  },
]
const Sportswear = [
  {
    id: 1,
    name: "Full Sleeve Sports Jacket",
    price: 1699,
    size: "12-15M",
    image: ad1,
    rating: 4,
    category: "Sportswear",
  },
  {
    id: 2,
    name: "Sports Tshirt",
    price: 1299,
    size: "15-18M",
    image: ad2,
    rating: 4,
    category: "Sportswear",
  },
  {
    id: 3,
    name: "Shorts Wear",
    price: 1199,
    size: "15-18M",
    image: ad3,
    rating: 4.5,
    category: "Sportswear",
  },
  {
    id: 4,
    name: "Puma Pants",
    price: 1999,
    size: "12-15M",
    image: ad1,
    rating: 4.5,
    category: "Sportswear",
  },
  {
    id: 5,
    name: "Adidas Kit",
    price: 8899,
    size: "8-10M",
    image: ad2,
    rating: 4,
    category: "Sportswear",
  },
  {
    id: 6,
    name: "Normal Wear Shorts",
    price: 1799,
    size: "8-10M",
    image: ad3,
    rating: 4,
    category: "Sportswear",
  },
]
const Footwear = [
  {
    id: 1,
    name: "Formal Shoes",
    price: 999,
    size: "12-15M",
    image: ad1,
    rating: 4,
    category: "Footwear",
  },
  {
    id: 2,
    name: "Causal Shoes",
    price: 1299,
    size: "15-18M",
    image: ad2,
    rating: 4,
    category: "Footwear",
  },
  {
    id: 3,
    name: "Canvas Shoes",
    price: 1199,
    size: "15-18M",
    image: ad3,
    rating: 4.5,
    category: "Footwear",
  },
  {
    id: 4,
    name: "Baby Designed Shoes",
    price: 999,
    size: "12-15M",
    image: ad1,
    rating: 4.5,
    category: "Footwear",
  },
  {
    id: 5,
    name: "Sandals",
    price: 1899,
    size: "8-10M",
    image: ad2,
    rating: 4,
    category: "Footwear",
  },
  {
    id: 6,
    name: "Spike Shoes",
    price: 1799,
    size: "8-10M",
    image: ad3,
    rating: 4,
    category: "Footwear",
  },
]
const Accessories = [
  {
    id: 1,
    name: "Bag",
    price: 1699,
    size: "12-15M",
    image: ad1,
    rating: 4,
    category: "Accessories",
  },
  {
    id: 2,
    name: "Watch",
    price: 1299,
    size: "15-18M",
    image: ad2,
    rating: 4,
    category: "Accessories",
  },
  {
    id: 3,
    name: "Wallet",
    price: 1199,
    size: "15-18M",
    image: ad3,
    rating: 4.5,
    category: "Accessories",
  },
  {
    id: 4,
    name: "Sandals",
    price: 999,
    size: "12-15M",
    image: ad1,
    rating: 4.5,
    category: "Accessories",
  },
  {
    id: 5,
    name: "Baby Sandals",
    price: 1899,
    size: "8-10M",
    image: ad2,
    rating: 4,
    category: "Accessories",
  },
  {
    id: 6,
    name: "Design Bags",
    price: 1799,
    size: "8-10M",
    image: ad3,
    rating: 4,
    category: "Accessories",
  },
]

function App() {
  //   const [cart, setCart] = useState([]);
  //   const handleAddToCart = (product) => {
  //     setCart([...cart, product]);
  // };
  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<UserRegister />} />
          <Route path="/Login" element={< Login />} />
          <Route path="/ForgotPassword" element={< ForgotPassword />} />
          <Route path="/BoyFashion" element={< BoyFashion />} />


          <Route path="/WinterSets" element={<WinterSets products={winterProductsSet1} />} />
          <Route path="/Occasionwear" element={<WinterSets products={Occasionwear} />} />
          <Route path="/Sportswear" element={<WinterSets products={Sportswear} />} />
          <Route path="/Footwear" element={<WinterSets products={Footwear} />} />
          <Route path="/Accessories" element={<WinterSets products={Accessories} />} />
          <Route
            path="/:productSet/:category/:id"
            element={<ProductDetails products={{ winterProductsSet1, Occasionwear, Sportswear, Footwear, Accessories }} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
} 

export default App; 
