import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Эксклюзив сізге</h1>
        <h1>арналған ұсыныстар</h1>
        <p>ТЕК ОСЫ АЙДА ҒАНА БАРЛЫҚ ТАУАРЛАР СКИДКАМЕН</p>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
