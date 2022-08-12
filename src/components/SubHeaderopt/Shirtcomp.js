import React from 'react'
import "../Card.css"


export default function Shirtcomp({data,cart}) {
    console.log(data)
  return (
    <div className="parent">
      
      {data.map((ele) => {
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
              <button onClick={()=> {cart(ele)}}>Add to cart</button>
            </div>
          </div>
        );
      })}
      </div>
    
  )
}
