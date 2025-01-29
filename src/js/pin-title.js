import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

window.addEventListener("DOMContentLoaded", () => {

    const siteTitle = document.getElementById('site-title')
    const postTitle = document.getElementById('post-title')
    const magazineTitle = document.getElementById('magazine-title')
    const newsletterTitle = document.getElementById('newsletter-title')
    const navBar = document.querySelector('nav')
    const siteTransition = document.getElementById('site-transition')
    const cover = document.getElementById('cover')
    const footer = document.getElementById('footer')


    gsap.to(siteTitle, {
        scrollTrigger: {
            trigger: siteTitle,
            start: "top " + navBar.offsetHeight,
            endTrigger: postTitle,
            end: "top " + (navBar.offsetHeight + siteTitle.offsetHeight),
            pin: true,
            pinSpacing: false,
        }
    })
    gsap.to(postTitle, {
        scrollTrigger: {
            trigger: postTitle,
            start: "top " + navBar.offsetHeight,
            endTrigger: siteTransition,
            end: "top " + (navBar.offsetHeight + postTitle.offsetHeight),
            pin: true,
            pinSpacing: false,
            markers: false
        }
    })
    gsap.to(magazineTitle, {
        scrollTrigger: {
            trigger: magazineTitle,
            start: "top " + navBar.offsetHeight,
            endTrigger: cover,
            end: "top " + (navBar.offsetHeight + magazineTitle.offsetHeight),
            pin: true,
            pinSpacing: false,
            markers: false
        }
    })
    gsap.to(newsletterTitle, {
        scrollTrigger: {
            trigger: newsletterTitle,
            start: "top " + navBar.offsetHeight,
            endTrigger: footer,
            end: "top " + (navBar.offsetHeight + newsletterTitle.offsetHeight),
            pin: true,
            pinSpacing: false,
            markers: false
        }
    })
    gsap.to(navBar, {
        scrollTrigger: {
            trigger: navBar,
            start: "top top",
            endTrigger: footer,
            end: "top " + (navBar.offsetHeight + newsletterTitle.offsetHeight),
            markers: false,
            pin: true,
            pinSpacing: false
        }
    })

})