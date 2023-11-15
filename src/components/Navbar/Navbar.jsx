import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './appbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import { logout } from '../../store/loginedUser';


function NavBar() {
    const location = useLocation();
    if (location.pathname === '/Login' || location.pathname === '/Register' || location.pathname === '/ForgotPassword') {
        return null;
    }

    return (
        <>
            <div className="appbar p-3">
                <div>Ecommerce</div>
                <nav className="navbar navbar-light">
                    <div className="container-fluid">
                        <form className="d-flex">
                            <input className="form-control me-2 my-custom-search-bar" type="search" placeholder="Search" aria-label="Search" />
                            <button type="button" class="btn btn-secondary">Search</button>
                        </form>
                    </div>
                </nav>
                <div>
                    <>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/BoyFashion">Boy Fashion</NavLink>
                        <NavLink to="/GirlFashion">Girl Fashion</NavLink>
                        <NavLink to="/Footwear">Footwear</NavLink>
                        <NavLink to="/Gear">Gear</NavLink>
                        <NavLink to="/Nursing">Nursing</NavLink>
                        <NavLink to="/Health">Health</NavLink>
                        <NavLink to="/Cart"><i className="bi bi-cart3" style={{fontSize: "1.5em"}}></i>Cart</NavLink>
                    </>
                </div>
            </div>
        </>
    );
}

export default NavBar;
