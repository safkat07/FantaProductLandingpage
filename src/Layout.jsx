import { useLayoutEffect } from "react"
import Banner from "./Components/Banner"
import Product from "./Components/Product"
import ThreeProducts from "./Components/ThreeProducts"
import Ingredients from "./Components/Ingredients"
import { Outlet } from "react-router-dom"
// import gsap from "gsap-trial";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollSmoother from "gsap/src/ScrollSmoother";



const Layout = () => {
    // gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    // useLayoutEffect(() => {

    //     ScrollSmoother.create({
    //         wrapper: "#wrapper",
    //         content: "#content",
    //         smooth: 1
    //     });
    // }, []);



    return <div>
        <Outlet />
    </div>
}

export default Layout