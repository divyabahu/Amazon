import React from 'react'
import data from "../../Object"
import MobileComp from './MobileComp'


export default function Mobile({cart}) {
    let MobileData=data.filter((ele)=>ele.type=="mobiles")
  return (
    <MobileComp addToCart={cart} data={MobileData}/>
   
  )
}
