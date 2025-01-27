const imagePost = document.getElementById('image-post')
const imageMagazine = document.getElementById('image-magazine')
const imageNewsletter = document.getElementById('image-newsletter')
const hoverContainer = document.getElementById('hover-container')
const hoverImage = document.getElementById('hover-image')
const hoverTitle = document.getElementById('hover-title')

function hoverContainerFollowCursor(item, title, path) {
    item.addEventListener('mouseenter', () => {
        hoverContainer.classList.remove('opacity-0')
        hoverTitle.innerText = title
        hoverImage.src = path
    })
    item.addEventListener('mouseout', () => {
        hoverContainer.classList.add('opacity-0')
    })

    item.addEventListener('mousemove', (e) => {
        hoverContainer.style.top = e.clientY - (hoverContainer.offsetHeight / 2) + 'px'
        hoverContainer.style.left = e.clientX - (hoverContainer.offsetWidth / 2) + 'px'
    })
}

hoverContainerFollowCursor(imagePost, '[Read articles]', '/src/images/van-life.avif')
hoverContainerFollowCursor(imageMagazine, '[Buy latest]', '/src/images/magazine/volume-1.avif')
hoverContainerFollowCursor(imageNewsletter, '[Join community]', '/src/images/cover.avif')