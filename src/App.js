import { useState } from "react";
// import logo from './logo.svg';
// all the elements which are to be rendered are imported on app.js
import Header from "./components/Header";
import Subheader from "./components/Subheader";
import Shirt from "./components/SubHeaderopt/Shirt";
import Pant from "./components/SubHeaderopt/Pant";
import Mobile from "./components/SubHeaderopt/Mobile";
import CustomerService from "./components/SubHeaderopt/CustomerService";
import "./App.css";
import Cart from "./components/Cart";
import Card from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// app.js is treated as a parent for all the custome made components
import Home from "./components/Home";

function App() {
  let [inputState, setInputState] = useState("");//state defined for filteration
  const [cart, setCart] = useState([]); //step:1 define state for add to cart

  function addToCart(product) {
    //step:2addtocart function generated 
    console.log("clicked on cart", product);
    const productInCart = cart.find((ele) => ele.id === product.id);//if product id is matched with element id then product in cart will be equal to the provided product id
    if (productInCart) {      //if product id matched with element id then only quantity will be increased 
      setCart(
        cart.map((ele) =>
          ele.id === product.id    
            ? { ...productInCart, quantity: productInCart.quantity + 1 }
            : ele
        )
      );
    } else {             //if the product is not present in cart then the product will be added
      setCart([...cart, { ...product, quantity: 1 }]); 
    }
    
  } 
  //browser router is genersted to link the element to make it a functional component
  // here the inputstate is passed to  card  and set input is passed to header with help of states and props for filteration purpose 
//
  return (
    <>
      <BrowserRouter>
      {/* in below lines my state props is gnerated and passed to header with function cart and inputstate */}
        <Header myState={{ setInputState, cart }} />
        <Subheader />
        <Routes>  
          {/* routing is done to each element where we want to open thw new page after clicking the mouse on the element */}
          {/* now input state and add to cart is passed to each element where we want to use the filteration properties and addto cart properties */}
          <Route path="/" element={<Card inputState={{ inputState, addToCart }} />} />    
          <Route path="/Card" element={<Card />} />
          <Route path="/Cart" element={<Cart cart={{ cart, addToCart }} />} />
          <Route path="/Shirt" element={<Shirt cart={addToCart} />} />
          <Route path="/pant" element={<Pant cart={addToCart} />} />  
          <Route path="/mobile" element={<Mobile cart={addToCart} />} /> 
          <Route path="/CustomerServices" element={<CustomerService />} />
        </Routes>
      </BrowserRouter>

      {/* <Header/>
   <Subheader/>
   <Card/> */}
    </>
  );
}

export default App;

