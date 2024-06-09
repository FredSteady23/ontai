import React, { useContext } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const {products} = useContext(ShopContext);
  const {cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);

  const handlePromoSubmit = () => {
    alert("Тапсырыс сәтті берілді");
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Тауарлар</p>
        <p>Аты</p>
        <p>Бағасы</p>
        <p>Саны</p>
        <p>Барлығы</p>
        <p>Жою</p>
      </div>
      <hr />
      {products.map((e)=>{

        if(cartItems[e.id]>0)
        {
          return  <div>
                    <div className="cartitems-format-main cartitems-format">
                      <img className="cartitems-product-icon" src={e.image} alt="" />
                      <p cartitems-product-title>{e.name}</p>
                      <p>{e.new_price} ₸</p>
                      <button className="cartitems-quantity">{cartItems[e.id]}</button>
                      <p>{e.new_price*cartItems[e.id]} ₸</p>
                      <img onClick={()=>{removeFromCart(e.id)}} className="cartitems-remove-icon" src={cross_icon} alt="" />
                    </div>
                     <hr />
                  </div>;
        }
        return null;
      })}
      
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Себет жиынтықтары</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Аралық жиынтық</p>
              <p>{getTotalCartAmount()} ₸</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Жеткізу ақысы</p>
              <p>Тегін</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Барлығы</h3>
              <h3>{getTotalCartAmount()} ₸</h3>
            </div>
          </div>
          <button onClick={handlePromoSubmit}>ТЕКСЕРІСКЕ ӨТУ</button>
        </div>
        <div className="cartitems-promocode">
          <p>Егер сізде промо-код болса, оны осында енгізіңіз</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="ПРОМОКОД" />
            <button onClick={handlePromoSubmit}>Жіберу</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
