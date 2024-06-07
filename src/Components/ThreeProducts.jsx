import { useLayoutEffect, useRef } from 'react'
import coca from '../assets/coca1.png'
import pepsi from '../assets/pepsi.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { rule } from 'postcss'
const ThreeProducts = () => {
    const cocaRef = useRef(null)
    const pepRef = useRef(null)

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#con",
                start: "top 90%",
                end: "bottom 110%",
                scrub: 1,
            }
        })
        tl.from(cocaRef.current, {
            duration: 2,
            left: "-100%",
            rotate: "-80deg",
            ease: "power1.inOut",
        }, "coc")

        tl.to(cocaRef.current, {
            duration: 2,
            left: "23%",
            rotate: "-10deg",
            ease: "power1.inOut",
        }, "coc")


        tl.from(pepRef.current, {
            duration: 2,
            right: "-100%",
            rotate: "100deg",

            ease: "power1.inOut",
        }, "coc")

        tl.to(pepRef.current, {
            duration: 2,
            right: "10%",
            rotate: "10deg",
            ease: "power1.inOut",
        }, "coc")



    }, [])
    return (
        <div id='con' className="bg-gradient-to-t overflow-hidden flex justify-center items-center gap-14 h-screen from-amber-400 to-orange-300 ">
            <div className="w-[25vw] relative flex items-center flex-col gap-[2vh] justify-center rounded-2xl h-[70vh] bg-white">
                <img ref={cocaRef} className='absolute  w-[55%] -top-[10%]' src={coca} alt="" />
                <h1 className="text-[3vw] mt-[40vh]">Coca-Cola</h1>
                <button className="px-[2vw] bg-orange-500  text-white rounded-[50px]  py-[1vw]">Buy Now</button>
            </div>
            <div className="w-[25vw] relative flex items-center gap-[2vh] flex-col justify-center rounded-2xl h-[70vh] bg-white">
                <h1 className="text-[3vw] mt-[40vh]">Fanta</h1>
                <button className="px-[2vw] bg-orange-500 text-white rounded-[50px] py-[1vw]">Buy Now</button>
            </div>
            <div className="w-[25vw] relative flex items-center flex-col gap-[2vh] justify-center rounded-2xl h-[70vh] bg-white">
                <img ref={pepRef} className='absolute w-[80%] -top-[15%]' src={pepsi} alt="" />
                <h1 className="text-[3vw] mt-[40vh]">Pepsi</h1>
                <button className="px-[2vw] bg-orange-500 text-white  rounded-[50px] py-[1vw]">Buy Now</button>
            </div>
        </div>
    )
}

export default ThreeProducts