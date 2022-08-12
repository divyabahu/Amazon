import React,{useState} from "react";
import "./Card.css";
import data from "../Object";
//let obj ={key:value};
//let arr =[];
//object rendering =>dynamic way of inserting data
//array of object
//array.map=> uses callbacks
//letarr=[1,2,3,4,5]
//arr.map((ele,index)=>console.log(ele,index))
// `${}`=>stringvalue


export default function Card({inputState}) {
  // let filteredData=data.filter(ele=>ele.type.includes(inputState.toLowerCase()))
console.log(String(inputState.inputState).toLowerCase())
  let filteredData = data.filter(ele=>ele.type.includes(String (inputState.inputState).toLowerCase()))
  return (
    <>
    <div className="parent">
      
      {
        filteredData.length==0?
      data.map((ele) => {
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
              <button onClick={()=>{
                console.log(inputState.addToCart(ele))
              }}>Add to cart</button>
            </div>
          </div>
        );
      }):filteredData.map((ele) => {
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
              <button  onClick={()=>inputState.addToCart(ele)}>Add to cart</button>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
}
