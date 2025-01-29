import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

window.addEventListener("DOMContentLoaded", () => {

    const magazines = document.querySelectorAll('.magazine')
    const magazineContainer = document.getElementById('magazine-container')

    gsap.to(magazines, {
        scrollTrigger: {
            trigger: magazineContainer,
            start: "top 50%",
            end: "bottom 50%",
            markers: false,
            onEnter: () => {
                magazines[0].classList.remove('-translate-x-1/2')
                magazines[0].classList.remove('left-1/2')
                magazines[0].classList.add('left-0')
                magazines[0].classList.remove('rotate-12')
                magazines[1].classList.remove('-rotate-12')
                magazines[2].classList.remove('-translate-x-1/2')
                magazines[2].classList.add('-translate-x-full')
                magazines[2].classList.remove('left-1/2')
                magazines[2].classList.add('left-full')
                magazines[2].classList.remove('-rotate-6')
            },
            onLeaveBack: () => {
                magazines[0].classList.add('-translate-x-1/2')
                magazines[0].classList.add('left-1/2')
                magazines[0].classList.remove('left-0')
                magazines[0].classList.add('rotate-12')
                magazines[1].classList.add('-rotate-12')
                magazines[2].classList.add('-translate-x-1/2')
                magazines[2].classList.remove('-translate-x-full')
                magazines[2].classList.add('left-1/2')
                magazines[2].classList.remove('left-full')
                magazines[2].classList.add('-rotate-6')
            }
        }
    })

})