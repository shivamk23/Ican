import React from 'react'
import Connect from "../../Connect/Connect"
import {HomeAbout} from "./HomeAbout"
import HomeTop from './HomeTop'
import { Footer } from '../../Footer/Footer'
import Product from '../../Product/Product'
export const Home = () => {
  return (
    
    <>
    < div className=''>
<HomeTop/>
   <HomeAbout/>
   <div id="productPage">
   <Product />
   </div>
   <Connect/>
<Footer/>
    </div>


    </>
  )
}

