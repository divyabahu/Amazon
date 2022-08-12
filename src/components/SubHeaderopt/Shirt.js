import React from 'react'
import data from '../../Object.js'
import Shirtcomp from "./Shirtcomp.js"
//to render object wwe use array.map()
//to pass information from one parent com to a child comp we use props
//to filter we use array.filter

export default function Shirt({cart}) {
let shirtdata= data.filter((ele)=>ele.type=="shirts")
  return (
  <>
  <Shirtcomp cart={cart} data={shirtdata}/>
  </>
  )
}
