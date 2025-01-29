window.addEventListener("DOMContentLoaded", () => {

    const imagePost = document.getElementById('image-post')
    const imageMagazine = document.getElementById('image-magazine')
    const imageNewsletter = document.getElementById('image-newsletter')
    const hoverContainer = document.getElementById('hover-container')
    const hoverImagePost = document.getElementById('hover-image-post')
    const hoverImageMagazine = document.getElementById('hover-image-magazine')
    const hoverImageNewsletter = document.getElementById('hover-image-newsletter')
    const hoverTitle = document.getElementById('hover-title')

    function hoverContainerFollowCursor(item, title, image) {
        item.addEventListener('mouseenter', () => {
            hoverContainer.classList.remove('opacity-0')
            hoverTitle.innerText = title
            image.classList.remove('hidden')
        })
        item.addEventListener('mouseout', () => {
            hoverContainer.classList.add('opacity-0')
            image.classList.add('hidden')
        })

        item.addEventListener('mousemove', (e) => {
            hoverContainer.style.top = e.clientY - (hoverContainer.offsetHeight / 2) + 'px'
            hoverContainer.style.left = e.clientX - (hoverContainer.offsetWidth / 2) + 'px'
        })
    }

    hoverContainerFollowCursor(imagePost, '[Read latest article]', hoverImagePost)
    hoverContainerFollowCursor(imageMagazine, '[Buy latest]', hoverImageMagazine)
    hoverContainerFollowCursor(imageNewsletter, '[Join our community]', hoverImageNewsletter)

})