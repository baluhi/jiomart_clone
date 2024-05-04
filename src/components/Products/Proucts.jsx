import "./products.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import data from "../../components/Data/ProductsData";
const Products = ( {handleAddProduct, cartItems, handleWishList}) => {
  const { productItems } = data;
//   console.log("handle:",handleAddProduct, cartItems);
    return (
    <div className="container">
    <div className="products">
      {productItems.map((item, id) => {
        return (
          <div className="card " key={id}>
            <div>
            <div className="buttons">
              <button 
                className=" product-add-button"
                onClick ={() => {handleWishList(item)}}
              >
           <i className="bi bi-heart"></i>
              </button>
            </div>
              <img className="product-image" src={item.image} alt={item.name} />
              
            </div>
            <div>
              <span className="product-name"> {item.name}</span>
            </div>
          <div className="card-bottom">
            <p>₹{item.price}.00</p>
            <span className="orgPrice">₹{item.orgPrice}.00  </span>
             <span className="offer"> 50%OFF</span>
             <button className="add-btn">ADD</button>

          </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Products;
