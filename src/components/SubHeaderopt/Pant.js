import React from 'react'
import data from '../../Object'
import PantComp from './PantComp'

export default function Pant({cart}) {
  let PantData=data.filter((ele)=>ele.type=="pants")
  return (
    <PantComp cart={cart} data={PantData}/>

  )
}
