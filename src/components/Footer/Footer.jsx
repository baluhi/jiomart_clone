import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="container">
      <div className="footer-container">
        <div>
          <ol>
            <li>
              <h6>All Categories</h6>
            </li>

            <li>Electronics</li>
            <li>Fashion</li>
            <li>Beauty</li>
            <li>Home & Kitchen</li>
            <li>Premium Fruits</li>
            <li>Books</li>
            <li>Furniture</li>
            
          </ol>
        </div>
        <div>
          <ol>
            <li>
              {" "}
              <h6>Popular Categories</h6>
            </li>

            <li>Staples</li>
            <li>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li>Fruits & Vegetables</li>
            <li>Baby Care</li>
            <li>Snacks & Branded Foods</li>
            
            
          </ol>
        </div>
        <div>
          <ol>
            <li>
              <h6>Customer Account</h6>
            </li>

            <li>My Account</li>
            <li>My Orders</li>
            <li>Wishlist</li>
            <li>Payment Methods</li>
            <li>Delivery Addresses</li>
            <li>JioMart Wallet</li>
          </ol>
        </div>
        <div>
          <ol>
            <li>
              <h6>Help & Support</h6>
            </li>

            <li> About Us</li>
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>E-waste Policy</li>
            <li>Cancellation & Return Policy</li>
            <li>Shipping & Delivery Policy</li>
            <li>AC Installation by resQ</li>
          </ol>
        </div>
        <div className="address">
          <address>
            <h6>Contact Us</h6>
            WhatsApp us: <strong>70003 70003</strong> <br />
            Call us: <strong> 1800 890 1222 </strong>
            <br />
            8:00 AM to 8:00 PM, 365 days
          </address>
          Should you encounter any bugs, glitches,
          <br /> lack of functionality, delayed deliveries,
          <br /> billing errors or other problems on the
          <br /> website, please email us on <strong>cs@jiomart.com.</strong>
        </div>
      </div>
    </div>
  );
};

export default Footer;
