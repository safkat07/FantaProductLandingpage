import HeadingTitle from "./Useable/HeadingTitle"
import ilemon1 from '../assets/ilemon1.png'
import iorange from '../assets/iorange.png'
import istraw from '../assets/istrawberry.png'
import iapple from '../assets/iapple.png'
import iberry from '../assets/iberry.png'
import iguava from '../assets/iguava.png'
import imango from '../assets/imango.png'
import ilicchi from '../assets/ilicchi.png'

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';





const Ingredients = () => {

    useEffect(() => {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Define the rotation animation
        const rotationAnimation = gsap.to('.container', {
            rotation: 360, // Rotate 360 degrees (one full circle)
            duration: 5, // Animation duration in seconds
            ease: 'none', // Linear easing
            paused: true // Initially pause the animation
        });

        ScrollTrigger.create({
            trigger: '.container',
            start: 'top bottom',
             rotation: 360,
            onEnter: () => rotationAnimation.play()
        });
    }, []);








    return (
        <div className="bg-gradient-to-b  relative overflow-hidden   h-screen from-amber-400 to-orange-300 ">


            {/* <div>
                <div className="h-[700px] max-w-[700px] border-2 mx-auto rounded-full">

                </div>
            </div> */}

            <div className="container  ">
                <div className="circle"></div>
                <div className="image" style={{ '--angle': '0' }}>
                    <img src={ilemon1} alt="" />
                </div>
                <div className="image" style={{ '--angle': '45deg' }}>
                    <img src={iorange} alt="" />
                </div>
                <div className="image" style={{ '--angle': '90deg' }}>
                    <img src={istraw} alt="" />
                </div>
                <div className="image" style={{ '--angle': '135deg' }}>
                    <img src={iberry} alt="" />
                </div>
                <div className="image" style={{ '--angle': '180deg' }}>
                    <img src={iguava} alt="" />
                </div>
                <div className="image" style={{ '--angle': '225deg' }}>
                    <img src={imango} alt="" />
                </div>
                <div className="image" style={{ '--angle': '270deg' }}>
                    <img src={ilicchi} alt="" />
                </div>
                <div className="image" style={{ '--angle': '315deg' }}>
                    <img src={iapple} alt="" />
                </div>
            </div>


        </div>
    )
}

export default Ingredients