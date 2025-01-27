const imagePost = document.getElementById('image-post')
const imageMagazine = document.getElementById('image-magazine')
const imageNewsletter = document.getElementById('image-newsletter')
const hoverImage = document.getElementById('hover-image')

function hoverImageFollowCursor(item) {
    item.addEventListener('mouseenter', () => {
        hoverImage.classList.remove('opacity-0')
    })
    item.addEventListener('mouseout', () => {
        hoverImage.classList.add('opacity-0')
    })

    item.addEventListener('mousemove', (e) => {
        hoverImage.style.top = e.clientY - (hoverImage.offsetHeight / 2) + 'px'
        hoverImage.style.left = e.clientX - (hoverImage.offsetWidth / 2) + 'px'
    })
}

hoverImageFollowCursor(imagePost)
hoverImageFollowCursor(imageMagazine)
hoverImageFollowCursor(imageNewsletter)