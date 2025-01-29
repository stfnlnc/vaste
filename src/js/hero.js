window.addEventListener("DOMContentLoaded", () => {

    const navBar = document.querySelector('nav')
    const siteTitle = document.getElementById('site-title')
    const heroSection = document.getElementById('hero-section')
    heroSection.style.height = window.innerHeight - (siteTitle.offsetHeight + navBar.offsetHeight) + 'px'

})