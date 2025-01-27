import './style.css'
import './js/image-follow-cursor.js'
import './js/menu.js'
import './js/link-hover.js'

import Lenis from "lenis"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {Observer} from "gsap/Observer"
import {Draggable} from "gsap/Draggable"
import InertiaPlugin from "gsap/InertiaPlugin"

gsap.registerPlugin(ScrollTrigger, Observer)
window.addEventListener("DOMContentLoaded", () => {

    const lenis = new Lenis({
        smooth: true, // Active le défilement fluide
        smoothTouch: true, // Active le défilement fluide sur appareils tactiles
        touchMultiplier: 1, // Ajustez la sensibilité au défilement pour les touchpads
        easing: function (t) {
            return (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))
        },
        duration: 3, // Durée du défilement
        direction: "vertical", // Défilement vertical
    });

// Gestion du défilement
    function raf(time) {
        lenis.raf(time); // Met à jour Lenis
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const siteTitle = document.getElementById('site-title')
    const postTitle = document.getElementById('post-title')
    const magazineTitle = document.getElementById('magazine-title')
    const cover = document.getElementById('cover')
    const newsletterTitle = document.getElementById('newsletter-title')
    const navBar = document.querySelector('nav')
    const footer = document.getElementById('footer')
    const footerDot = document.getElementById('footer-dot')
    const footerTextContainer = document.getElementById('footer-text-container')
    const footerText = document.getElementById('footer-text')
    const footerLogo = document.getElementById('footer-logo')
    const footerClipText = document.getElementById('footer-clip-text')
    const footerBracketLeft = document.getElementById('footer-bracket-left')
    const footerBracketRight = document.getElementById('footer-bracket-right')

    const heroSection = document.getElementById('hero-section')
    heroSection.style.height = window.innerHeight - (siteTitle.offsetHeight + navBar.offsetHeight) + 'px'

    const postLink = document.getElementById('post-link')
    const postMenu = document.getElementById('post-menu')
    const postFooter = document.getElementById('footer-post')
    const postImage = document.getElementById('image-post')
    const postContainer = document.getElementById('post-container')
    const postLinks = [postLink, postMenu, postFooter, postImage]

    postLinks.forEach((link) => {
        link.addEventListener('click', () => {
            lenis.scrollTo(postContainer, {offset: -postTitle.offsetHeight, duration: 5, easing: (t) => 1 - Math.pow(1 - t, 3)})
        })
    })

    const magazineLink = document.getElementById('magazine-link')
    const magazineMenu = document.getElementById('magazine-menu')
    const magazineFooter = document.getElementById('footer-magazine')
    const magazineImage = document.getElementById('image-magazine')
    const magazineContainer = document.getElementById('magazine-container')
    const magazineLinks = [magazineLink, magazineMenu, magazineFooter, magazineImage]

    magazineLinks.forEach((link) => {
        link.addEventListener('click', () => {
            lenis.scrollTo(magazineContainer, {offset: -magazineTitle.offsetHeight, duration: 5})
        })
    })

    const newsletterLink = document.getElementById('newsletter-link')
    const newsletterMenu = document.getElementById('newsletter-menu')
    const newsletterFooter = document.getElementById('footer-newsletter')
    const newsletterImage = document.getElementById('image-newsletter')
    const newsletterContainer = document.getElementById('newsletter-container')
    const newsletterLinks = [newsletterLink, newsletterMenu, newsletterFooter, newsletterImage]

    newsletterLinks.forEach((link) => {
        link.addEventListener('click', () => {
            lenis.scrollTo(newsletterContainer, {offset: -newsletterTitle.offsetHeight, duration: 5})
        })
    })

    const postsInfos = document.querySelectorAll('.post-infos')
    const postsParagraph = document.querySelectorAll('.post-paragraph')
    const postsImage = document.querySelectorAll('.post-image')
    const postsSection = document.querySelectorAll('.post-section')

    postsInfos.forEach((postInfo, key) => {
        postInfo.style.height = window.innerHeight - (siteTitle.offsetHeight + navBar.offsetHeight) + 'px'
        postsParagraph[key].style.height = window.innerHeight - (siteTitle.offsetHeight + navBar.offsetHeight) + 'px'
        postsImage[key].style.height = window.innerHeight - 20 - (siteTitle.offsetHeight + navBar.offsetHeight) + 'px'
        gsap.to(postInfo, {
            scrollTrigger: {
                trigger: postInfo,
                start: "top " + (siteTitle.offsetHeight + navBar.offsetHeight),
                end: "bottom " + (siteTitle.offsetHeight + navBar.offsetHeight),
                markers: false,
                pin: true,
                pinSpacing: false
            }
        })
    })

    gsap.registerPlugin(Draggable, InertiaPlugin);

    const postWrapper = document.getElementById('post-wrapper')
    const postDragContainer = document.getElementById('post-drag-container')
    const posts = document.querySelectorAll('.post')


    Draggable.create(postWrapper, {
        type: "x",
        bounds: postDragContainer,
        inertia: true,
        dragResistance: 0.2,
        dragClickables: true
    });

    const siteTransition = document.getElementById('site-transition')
    const clipTransition = document.getElementById('clip-transition')
    const transitionBracketLeft = document.getElementById('transition-bracket-left')
    const transitionBracketRight = document.getElementById('transition-bracket-right')

    const timeline = gsap.timeline({
        repeat: -1,
    });

    let i = 0

    const text = ['Culture', 'Outdoor', 'Adventure']

    let textSize = 0

    timeline
        .fromTo(clipTransition, {
            clipPath: 'inset(0% 0% 0% 0%)',
        }, {
            clipPath: 'inset(0% 50% 0% 50%)',
            ease: 'linear',
            delay: 0.7,
            duration : 0.3,

            onComplete: () => {
                clipTransition.innerText = text[i]
                i === text.length - 1 ? i = 0 : i++
            }
        })
        .to(transitionBracketLeft, {
            left: '50%',
            ease: 'linear',
            duration : 0.3,

        }, "<")
        .to(transitionBracketRight, {
            left: '50%',
            ease: 'linear',
            duration : 0.3,

        }, "<")
        .fromTo(clipTransition, {
            clipPath: 'inset(0% 50% 0% 50%)',
        }, {
            clipPath: 'inset(0% 0% 0% 0%)',
            ease: 'linear',
            duration : 0.3
        })
        .to(transitionBracketLeft, {
            left: 0,
            ease: 'linear',
            duration : 0.3
        }, "<")
        .to(transitionBracketRight, {
            left: '100%',
            ease: 'linear',
            duration : 0.3
        }, "<")


    const magazines = document.querySelectorAll('.magazine')
    gsap.to(magazines,{
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
                end: "top " + (navBar.offsetHeight + siteTitle.offsetHeight),
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
                end: "top " + (navBar.offsetHeight + siteTitle.offsetHeight),
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
                end: "top " + (navBar.offsetHeight + siteTitle.offsetHeight),
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
                end: "top " + (navBar.offsetHeight + siteTitle.offsetHeight),
                markers: false,
                pin: true,
                pinSpacing: false
            }
        })
        gsap.to(footerDot, {
            scale: (window.innerWidth / footerDot.offsetWidth) * 2,
            scrollTrigger: {
                trigger: footer,
                start: "top top",
                end: "+=2000",
                pin: true,
                scrub: 1,
                markers: false,
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
                markers: false
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