import React from "react";
import "../components/Card.css";
export default function Cart({ cart }) {
  return (
    <>
      {
        cart.length==0?<div>there is no product in cart</div>
     
    :cart.cart.map((ele) => {
        return (
          <div className="Card">
            <div className="img">
              <img src={`${ele.Image}`} width="190" />
            </div>
            <div className="details">
              <div className="title">{ele.title}</div>
              <div className="quantity">{ele.quantity}</div>
              <div className="price">{ele.price}</div>
              <div className="type">{ele.type}</div>
              {/* we have to put an arrow function in order to call a function directly in inline*/}
              <button onClick={() => cart.addToCart(ele)}>Add to cart</button>
            </div>
          </div>
        );
      })}
    
    </>
  );
}
