window.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll('.link')
    const linksUp = document.querySelectorAll('.link-up')
    const linksDown = document.querySelectorAll('.link-down')

    links.forEach((link, key) => {
        link.addEventListener('mouseenter', () => {
            linksUp[key].classList.add('-translate-y-full')
            linksDown[key].classList.remove('translate-y-full')
        })
        link.addEventListener('mouseleave', () => {
            linksUp[key].classList.remove('-translate-y-full')
            linksDown[key].classList.add('translate-y-full')
        })
    })

})