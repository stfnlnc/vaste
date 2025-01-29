import Lenis from "lenis"

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

})