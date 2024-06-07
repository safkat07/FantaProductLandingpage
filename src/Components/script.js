import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.box',
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
        markers: true
    }
})
tl.to(".fantaImg", {
    top: "150%",

})