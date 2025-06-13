import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginsign from "./Login/log";
import Front from "./total";
import ProductDetail from './Detailpage/page';
import Product from './Display/disp';
import CartPage from './Cartbag/cart';
import About1 from './About/abhotp';

import { createContext, useState } from 'react';
import Paymentgateway from './Payment/pay';
export var Content= createContext()


export default function App()
{

  var [cart,setCart ]=useState([])

  return(
    <>



    <BrowserRouter>
    <Content.Provider value={{cart,setCart}}>

    <Routes>
    <Route path="" element={<Front/>}></Route>
    <Route path="/Login" element={<Loginsign/>}></Route>
    <Route path="/" element={<Product />} />
    <Route path="/man" element={<Product />} />

    <Route path="/ProductDetail/:id" element={<ProductDetail />} />
    
    <Route path="/cart" element={<CartPage/>} />
    <Route path="/about" element={<About1/>} />


      {/* <Route path="/payment" element={<Paymentgateway/>}></Route> */}
    </Routes>
    </Content.Provider>

    </BrowserRouter>

    </>
  )
}