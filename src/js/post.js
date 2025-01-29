import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

window.addEventListener("DOMContentLoaded", () => {

    const navBar = document.querySelector('nav')
    const postTitle = document.getElementById('post-title')

    const postsInfos = document.querySelectorAll('.post-infos')
    const postsParagraph = document.querySelectorAll('.post-paragraph')
    const postsImage = document.querySelectorAll('.post-image')
    if (window.innerWidth > 1024) {
        postsInfos.forEach((postInfo, key) => {
            postInfo.style.height = window.innerHeight - (postTitle.offsetHeight + navBar.offsetHeight) + 'px'
            postsParagraph[key].style.height = window.innerHeight - (postTitle.offsetHeight + navBar.offsetHeight) + 'px'
            postsImage[key].style.height = window.innerHeight - 20 - (postTitle.offsetHeight + navBar.offsetHeight) + 'px'
            gsap.to(postInfo, {
                scrollTrigger: {
                    trigger: postInfo,
                    start: "top " + (postTitle.offsetHeight + navBar.offsetHeight),
                    end: "bottom " + (postTitle.offsetHeight + navBar.offsetHeight),
                    markers: false,
                    pin: true,
                    pinSpacing: false
                }
            })
        })
    }

})