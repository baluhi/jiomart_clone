import React, {useState} from 'react'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import { BrowserRouter, Routes } from 'react-router-dom';
import dummyData from './components/Data/data';
import BannerTop from './components/Banners/BannerTop';
import Deals from './components/Deals/Deals';
import Products from './components/Products/Proucts';
import Footer from './components/Footer/Footer';

const App = () => {


  const [cartItems, setCartItems] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleAddProduct = (productId) => {
    const productExist = cartItems.find((item) => item.id === productId);
    setCartItems((prev) => [...prev, productId]);
  };

  const handleWishList = (productId) => {
    const itemExist = wishList.find((item) => item.id === productId);
  setWishList((prev) => [...prev, productId]);
  };
 console.log("Cart",wishList)


  return (
    <div>
      <BrowserRouter>
   
      <Header/>
      <Navbar/>
      <Carousel />
      <BannerTop/>
      <Deals/>
      <Products/>
      <Deals/>
      <Footer/>
      
      <Routes
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          wishList={wishList}
          handleWishList={handleWishList}
        />
       </BrowserRouter>
      
    </div>
  )
}

export default App
