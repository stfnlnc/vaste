import {gsap} from "gsap";

window.addEventListener("DOMContentLoaded", () => {

    const clipTransition = document.getElementById('clip-transition')
    const transitionBracketLeft = document.getElementById('transition-bracket-left')
    const transitionBracketRight = document.getElementById('transition-bracket-right')

    const timeline = gsap.timeline({
        repeat: -1,
    });

    let i = 0
    const text = ['Culture', 'Outdoor', 'Adventure']

    timeline
        .fromTo(clipTransition, {
            clipPath: 'inset(0% 0% 0% 0%)',
        }, {
            clipPath: 'inset(0% 50% 0% 50%)',
            ease: 'linear',
            delay: 0.7,
            duration: 0.3,
            onComplete: () => {
                clipTransition.innerText = text[i]
                i === text.length - 1 ? i = 0 : i++
            }
        })
        .to(transitionBracketLeft, {
            left: '50%',
            ease: 'linear',
            duration: 0.3,

        }, "<")
        .to(transitionBracketRight, {
            left: '50%',
            ease: 'linear',
            duration: 0.3,

        }, "<")
        .fromTo(clipTransition, {
            clipPath: 'inset(0% 50% 0% 50%)',
        }, {
            clipPath: 'inset(0% 0% 0% 0%)',
            ease: 'linear',
            duration: 0.3
        })
        .to(transitionBracketLeft, {
            left: 0,
            ease: 'linear',
            duration: 0.3
        }, "<")
        .to(transitionBracketRight, {
            left: '100%',
            ease: 'linear',
            duration: 0.3
        }, "<")

})
