import React from 'react'
import {Link} from "react-router-dom"
import './Subheader.css'
export default function Subheader() {
  return (
    <>
       <div class="subheader">
        <Link to ="/" style= {{textDecoration:"none"}}><div className="all"> ALL </div></Link>
        <Link to = "/Shirt" style={{textDecoration:"none"}}><div className="Shirts">Shirts</div></Link>
        <Link to ="/Mobile"><div className="mobiles">mobiles</div></Link>
        <Link to = "/CustomerServices"><div className="customerservice">customer service</div></Link>
        <Link to ="/Pant" style={{textDecoration:"none"}}><div className="Pants">Pants</div></Link>
        <div className="fashion"> fashion</div>
        <div className="electronics">electronics</div>
        <div className="prime">prime</div>
        <div className="hk">home&kitchen</div>
        <div className="amazonpay">amazon pay</div>
        <div className="newreleases">new releases</div>
        <div className="computer"> computer </div>
        <div className="downloadapp">download app</div>
    </div>

    </>
  )
}

