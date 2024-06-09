import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {

  const {product} = props;
  const {addToCart} = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        {/* <div className="productdisplay-img-list">
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
        </div> */}
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(16)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">{product.old_price} ₸</div>
          <div className="productdisplay-right-price-new">{product.new_price} ₸</div>
        </div>
        <div className="productdisplay-right-description">
          Жеңіл, әдетте тоқылған, пуловер жейде, тығыз бекітілген және
          дөңгелек мойын және қысқа жеңдер, төменгі көйлек немесе сырт киім ретінде киіледі
          киім.
        </div>
        <div className="productdisplay-right-size">
          <h1>Размерлер: </h1>
          <div className="productdisplay-right-sizes">
            <div className="hover">S</div>
            <div className="hover">M</div>
            <div className="hover">L</div>
            <div className="hover">XL</div>
            <div className="hover">XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Себетке қосу</button>
        <p className="productdisplay-right-category"><span>Категория :</span> Жазғы үлгілер</p>
        <p className="productdisplay-right-category"><span>Тэгтар :</span> Модерн, Соңғы топтама</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
