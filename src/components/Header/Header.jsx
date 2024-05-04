import React from "react";
import "./header.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import {Link} from 'react-scroll'
import SigninBtn from "../Button/SigninBtn";
const Header = ({cartItems, handleAddProduct}) => {
  return (
    <>
      <header className="header align-items-center" id="header">
        {/*  Logo */}
        <Logo/>
        {/*  searchbar */}
        <SearchBar/>
        {/*    cart */}
     <Link to='/cart'><i className="bi bi-cart-fill"></i></Link>
        {/* Profile */}
        <SigninBtn/>
      </header>
    </>
  );
};

export default Header;
