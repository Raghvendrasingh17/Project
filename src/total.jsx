import Product from "./Display/disp";
import Footer from "./Footer/foot";
import NavBar from "./Navbar/nav";
import Category from "./Secondnav/secNav";
import Slide from "./Slider/courser";

export default function Front()
{
    return(
        <>
        <NavBar/>
        <Category/>
        <Slide/>
        <Product/>
        <Footer/>

        </>
    )
}