window.addEventListener("DOMContentLoaded", () => {

    const menu = document.getElementById('menu')
    const menuButton = document.getElementById('menu-button')
    const menuBackground = document.getElementById('menu-background')
    const postMenu = document.getElementById('post-menu')
    const magazineMenu = document.getElementById('magazine-menu')
    const newsletterMenu = document.getElementById('newsletter-menu')
    const menuOpen = document.getElementById('menu-open')
    const menuClose = document.getElementById('menu-close')

    let toggle = false

    const menuLinks = [menuButton, postMenu, magazineMenu, newsletterMenu, menuBackground]

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            toggle = !toggle
            if (toggle) {
                menu.classList.remove('translate-x-full')
                menuBackground.classList.remove('opacity-0')
                menuBackground.classList.add('opacity-80')
                menuBackground.classList.remove('pointer-events-none')
                menuOpen.classList.add('-translate-y-full')
                menuClose.classList.remove('translate-y-full')
            } else {
                menuBackground.classList.add('opacity-0')
                menuBackground.classList.remove('opacity-80')
                menu.classList.add('translate-x-full')
                menuBackground.classList.add('pointer-events-none')
                menuOpen.classList.remove('-translate-y-full')
                menuClose.classList.add('translate-y-full')
            }
        })
    })

})