// images import
import fanta from '../assets/fanta.png'
import orange2 from '../assets/orange2.png'
import orange4 from '../assets/orange4.png'
import orange6 from '../assets/orange-cut.png'
import plum from '../assets/plum.png'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { RiMenu3Line } from "react-icons/ri";


const Banner = () => {
    const fantaImg = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#main",
                start: "0% 0% ",
                end: "300% 20%",
                scrub: 0.5,

            }
        })

        timeline.to(fantaImg.current, {
            duration: 1,
            y: "140%",
            x: "-85%",
            ease: "power1.inOut",
            scale: "0.9"
        }, "orange")

        timeline.to(fantaImg.current, {
            duration: 1,
            y: "292%",
            x: "-0%",
            ease: "power1.inOut",
            scale: "0.8"
        })

        timeline.to(fantaImg.current, {
            duration: 1,
            y: "480%",
            x: "-0%",
            ease: "power1.inOut",
            scale: "0.8"
        })


        timeline.to("#bgOrange", {
            duration: 1,
            y: "400%",
            x: "-70%",
            ease: "power1.inOut",
            scale: "0.9"
        }, "orange")

        timeline.to("#bottomOrange", {
            duration: 1,
            y: "240%",
            x: "70%",
            ease: "power1.inOut",
            scale: "0.9"
        }, "orange")






    }, [])

    return (
        <div id="main" className="h-screen relative">
            {/* header section */}
            <nav className="flex z-[100] justify-between fixed left-0 right-0 text-neutral-200 items-center lg:px-10 md:px-5 px-2 pt-2">
                <a className="text-[2rem] font-semibold" href="#">
                    Fanta.Co
                </a>
                <ul className="md:flex lg:gap-x-10  gap-x-5 hidden 2xl:text-[1vw] xl:text-[1.5vw] text-[1.2rem]">
                    <li>Home</li>
                    <li>Product</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
                <button className="border px-5 md:block hidden uppercase font-semibold py-2 rounded-md">Buy Now</button>
                <div className='md:hidden block'>
                    <span className='text-2xl'>
                        <RiMenu3Line />
                    </span>
                </div>
            </nav>
            {/* header section */}
            {/* main banner */}
            <div className="w-[100%] hidden md:flex relative h-[100vh] justify-center items-center">
                <img ref={fantaImg} className="xl:w-[40%] lg:w-[60%] md:w-[70%] z-[99]" src={fanta} alt="" />
                <img id='bottomOrange' className="lg:w-[25%] md:w-[40%]  z-[99] absolute md:right-[15%] lg:right-[27%] bottom-1" src={orange4} alt="" />
                <img className="absolute z-10  md:block lg:h-[90%] md:h-3/4 hidden rotate-180 right-0" src={orange2} alt="" />
                <img id='bgOrange' src={orange6} className="absolute  z-30 w-[25%] lg:w-[16%] top-[10%] lg:left-[30%] md:left-[20%]" alt="" />
                <img src={plum} className="lg:left-0 md:-left-[10%] lg:h-[65%] md:h-[57%] md:block hidden absolute z-[9] lg:bottom-0 md:bottom-[0%]" alt="" />
                <h1 className="xl:text-[22vw] text-[30vw]  absolute  text-white uppercase font-semibold">Fanta</h1>
            </div>

            {/* mobile responsive deisgn */}
            <div className="w-[100%] md:hidden pt-20  overflow-hidden relative h-[100vh] flex justify-center items-center">
                <img className="scale-125 z-[99]" src={fanta} alt="" />
                <img className=" w-[80%] left-[25%] z-[99] absolute  bottom-1" src={orange4} alt="" />
                {/* <img className="absolute z-10  md:block lg:h-[90%] md:h-3/4 hidden rotate-180 right-0" src={orange2} alt="" /> */}
                <img src={orange6} className="absolute  z-30 w-[55%] top-[10%] right-[40%]" alt="" />
                {/* <img src={plum} className="lg:left-0 md:-left-[10%] lg:h-[65%] md:h-[57%] md:block hidden absolute z-[9] lg:bottom-0 md:bottom-[0%]" alt="" /> */}
                <h1 className="  absolute text-9xl text-white uppercase font-semibold">Fanta</h1>
            </div>


        </div>
    );
};

export default Banner;
