import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './scenes/Home/home';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import UserRegister from './scenes/Register/Register';
import Login from './scenes/Login/Login';
import ForgotPassword from './scenes/ForgotPassword/ForgotPassword';
import BoyFashion from './scenes/BoyFashion/BoyFashion';
import WinterSets from './scenes/Home/WinterSets';

function App() {
  return (
    <>
     
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element= { <Home /> } />
        <Route path="/Register" element={<UserRegister/>} />
        <Route path="/Login" element={< Login />} />
        <Route path="/ForgotPassword" element={< ForgotPassword/>} />
        <Route path="/BoyFashion" element={< BoyFashion/>}/>
        <Route path="/WinterSets" element={< WinterSets />} />

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
