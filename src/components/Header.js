import React from "react"; //to write jsx
//export default means that in one file or module there is only one component
//input element vlosing
//in react every html element must be closed
//in place of class we use class name because in react we write jsx which is a part of js and class is a reserved keyword of jsx
//jsx is passede using debble in react
import "./Header.css";
// import amazonImg from "../images/amazon logo.png"
import { Link } from "react-router-dom";
export default function Header({myState}) {
    console.log(myState)
  function manageInput(e){
  let {value} = e.target
  // console.log(value);
  myState.setInputState(value)
  }

  return (
    <>
    
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src="/flipkart images.png" />
          </Link>
        </div>
        <div className="location">
          <div className="pindrop">
            <div className="pd">
              <span className="material-symbols-outlined">pin_drop</span>
            </div>
          </div>
          <div className="hello">
            <div className="hello1">hello</div>
            <div className="address">select your address</div>
          </div>
        </div>
        <div className="searchbar">
          {/* <div className="reset"> */}
            <div className="dropdown">
              ALL
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
            <div className="text">
              <input type="text" placeholder="search your item here" onChange={manageInput}/> 
              {/* here on change method is used on the input button  so that it gets the text on changing  */}
            </div>
            {/* <div className="search"> */}
              <button>
                <span className="material-symbols-outlined">search</span>
              </button>
            {/* </div> */}
          {/* </div> */}
        </div>
        <div className="country">
          <div className="flag"></div>
          <div className="drop"></div>
        </div>
        <div className="signin"></div>
        <div className="return"></div>
        <Link to ="/Cart" style={{textDecoration:"none"}}> <div className="cart">
          <div className="main">  
          {/* now the cart length is set by using mystate props with cart state  */}
          <div id="quant">{myState.cart.length}</div>  
          <div id="cartlogo"><span class="material-symbols-outlined">
shopping_cart
</span></div>
          </div>
          <div id="carts">CARTS</div>
        </div>
        </Link>
      </div>
    </>
  );
}
