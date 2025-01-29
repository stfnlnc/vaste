import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

window.addEventListener("DOMContentLoaded", () => {

    const footer = document.getElementById('footer')
    const footerDot = document.getElementById('footer-dot')
    const footerTextContainer = document.getElementById('footer-text-container')
    const footerText = document.getElementById('footer-text')
    const footerLogo = document.getElementById('footer-logo')
    const footerClipText = document.getElementById('footer-clip-text')
    const footerBracketLeft = document.getElementById('footer-bracket-left')
    const footerBracketRight = document.getElementById('footer-bracket-right')

    const hideFooterBrackets = () => {
        document.querySelectorAll('.footer-bracket-hide').forEach(item => {
            item.classList.toggle('opacity-0')
        })
    }
    gsap.to(footerDot, {
        width: window.innerWidth * 3,
        height: window.innerWidth * 3,
        scrollTrigger: {
            trigger: footer,
            start: "top top",
            end: "+=2000",
            pin: true,
            scrub: 1,
            markers: false,
            onEnter: () => {
                hideFooterBrackets()
            },
            onLeaveBack: () => {
                hideFooterBrackets()
            },
        }
    })
    gsap.to(footerText, {
        opacity: 1,
        scrollTrigger: {
            trigger: footer,
            start: "top top",
            end: "+=100",
            scrub: 1
        }
    })
    gsap.to(footerBracketLeft, {
        left: 0,
        scrollTrigger: {
            trigger: footer,
            start: "top top",
            end: "+=300",
            scrub: 1
        }
    })
    gsap.to(footerBracketRight, {
        left: '100%',
        scrollTrigger: {
            trigger: footer,
            start: "top top",
            end: "+=300",
            scrub: 1
        }
    })

    gsap.fromTo(footerClipText, {
        clipPath: 'inset(0% 50% 0% 50%)',
    }, {
        clipPath: 'inset(0% 0% 0% 0%)',
        ease: 'linear',
        scrollTrigger: {
            trigger: footer,
            start: "top top",
            end: "+=300",
            scrub: 1,
            markers: false,
        }
    })
    gsap.to(footerClipText, {
        scrollTrigger: {
            trigger: footer,
            start: "top top",
            end: "+=1000",
            onLeave: () => {
                footerTextContainer.classList.remove('top-1/2')
                footerTextContainer.classList.add('top-5')
                footerLogo.classList.remove('translate-y-full')
            },
            onEnterBack: () => {
                footerTextContainer.classList.add('top-1/2')
                footerTextContainer.classList.remove('top-5')
                footerLogo.classList.add('translate-y-full')
            },
        }
    })

})